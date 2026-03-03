import { NextResponse } from 'next/server';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { deriveAll } from '@/lib/server/derive';

type AnalyzeRequest = { text?: string };

function mergeReport(extraction: any, derived: any, inputText: string) {
  const base = (derived && typeof derived === 'object' && 'output' in derived) ? (derived as any).output : derived;
  const out: any = base && typeof base === 'object' ? JSON.parse(JSON.stringify(base)) : {};

  if (extraction?.rsl?.summary) {
    out.rsl = out.rsl || {};
    out.rsl.summary = extraction.rsl.summary;
  }
  // "전달값 체크" 기준: rsl.summary는 항상 존재하도록 기본값을 둔다.
  if (!out?.rsl?.summary) {
    out.rsl = out.rsl || {};
    out.rsl.summary = { one_line: '', paragraph: '' };
  }
  if (Array.isArray(extraction?.rsl?.dimensions)) {
    out.rsl = out.rsl || {};
    out.rsl.dimensions = extraction.rsl.dimensions;
  }
  // "전달값 체크" 기준: rsl.dimensions는 항상 8개 형태를 유지하는 것이 안전하다.
  if (!Array.isArray(out?.rsl?.dimensions) || out.rsl.dimensions.length === 0) {
    out.rsl = out.rsl || {};
    out.rsl.dimensions = [
      { code: 'R1', label: 'Interpretation', score_1to5: 0, observation: '' },
      { code: 'R2', label: 'Issue Decomposition', score_1to5: 0, observation: '' },
      { code: 'R3', label: 'Evidence Quality', score_1to5: 0, observation: '' },
      { code: 'R4', label: 'Reasoning & Counterfactuals', score_1to5: 0, observation: '' },
      { code: 'R5', label: 'Coherence & Clarity', score_1to5: 0, observation: '' },
      { code: 'R6', label: 'Metacognition & Self-repair', score_1to5: 0, observation: '' },
      { code: 'R7', label: 'Ethical / Societal Framing', score_1to5: 0, observation: '' },
      { code: 'R8', label: 'Perspective Flexibility', score_1to5: 0, observation: '' }
    ];
  }
  // "전달값 체크" 기준: decision_compression_quote는 TOP-LEVEL.
  // (호환을 위해 meta.decision_compression_quote도 함께 유지)
  const dcq = (extraction && typeof extraction === 'object' && 'decision_compression_quote' in extraction)
    ? extraction.decision_compression_quote
    : '';
  out.decision_compression_quote = (dcq == null) ? '' : dcq;
  out.meta = out.meta || {};
  out.meta.decision_compression_quote = out.decision_compression_quote;

  // Minimal meta defaults for report.html (safe if already present)
  out.meta = out.meta || {};
  if (!out.meta.verification_id) {
    // lightweight, stable-enough id for UI; not cryptographic
    out.meta.verification_id = `NP-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  }
  if (!out.meta.verify_url) {
    // can be overwritten by the UI; keep blank-safe
    out.meta.verify_url = '';
  }

  // Provide hero chips expected by report.html (derive.ts may not emit chips)
  out.chips = out.chips || {};
  if (!out.chips.rsl_level_short_name) out.chips.rsl_level_short_name = out?.rsl?.level?.short_name || '';
  if (out.chips.rsl_fri_score == null) out.chips.rsl_fri_score = out?.rsl?.fri?.score ?? null;
  if (!out.chips.cff_final_type_chip_label) out.chips.cff_final_type_chip_label = out?.cff?.final_type?.chip_label || out?.cff?.final_type?.label || '';
  if (!out.chips.rc_final_determination) out.chips.rc_final_determination = out?.rc?.reasoning_control_distribution?.final_determination || out?.rc?.final_determination || '';
  if (!out.chips.rfs_top_group_name) out.chips.rfs_top_group_name = out?.rfs?.top_groups?.[0]?.group_name || '';

  // Alias fields some templates expect at rc.*
  out.rc = out.rc || {};
  if (!out.rc.determination_sentence) {
    out.rc.determination_sentence = out?.rc?.reasoning_control_distribution?.determination_sentence || '';
  }

  // Keep submitted_text for any downstream debugging (report.html doesn't require it)
  out.submitted_text = inputText;
  return out;
}


function pickJsonObject(text: string): any {
  // Try direct parse
  try {
    return JSON.parse(text);
  } catch {
    // Try to extract first JSON object block
  }
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start >= 0 && end > start) {
    const sliced = text.slice(start, end + 1);
    try {
      return JSON.parse(sliced);
    } catch {
      // fallthrough
    }
  }
  throw new Error('Model did not return valid JSON.');
}

async function callOpenAI(prompt: string, userText: string) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('Missing OPENAI_API_KEY environment variable.');

  const model = process.env.OPENAI_MODEL || 'gpt-4.1-mini';

  const body = {
    model,
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: userText }
    ],
    temperature: 0,
    // If the platform supports it, this helps force JSON.
    response_format: { type: 'json_object' }
  };

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify(body)
  });

  const json = await res.json();
  if (!res.ok) {
    const msg = json?.error?.message || `OpenAI API error (${res.status})`;
    throw new Error(msg);
  }

  const content = json?.choices?.[0]?.message?.content;
  if (typeof content !== 'string' || !content.trim()) {
    throw new Error('OpenAI returned empty content.');
  }
  return content;
}

export async function POST(req: Request) {
  try {
    const { text }: AnalyzeRequest = await req.json();
    const inputText = (text || '').trim();
    if (!inputText) {
      return NextResponse.json({ ok: false, error: 'Please enter text.' }, { status: 400 });
    }

    const promptPath = path.join(process.cwd(), 'prompts', 'gpt_prompt_v5.txt');
    const prompt = await readFile(promptPath, 'utf-8');

    const modelContent = await callOpenAI(prompt, inputText);
    const extraction = pickJsonObject(modelContent);

    // Derive backend outputs from extraction.
    const report = deriveAll(
      {
        raw_features: extraction,
        rsl: extraction?.rsl,
        rsl_rubric: extraction?.rsl_rubric,
        raw_signals_quotes: extraction?.raw_signals_quotes,
        input_text: inputText
      } as any,
      {
        // Fill missing deterministic lexical counts / unit segmentation in backend when GPT output omits them.
        enableBackendFill: true
      }
    );

    // Debug-first: return both the raw extraction (GPT output) and the derived report.
    const merged_report = mergeReport(extraction, report, inputText);
    return NextResponse.json({ ok: true, extraction, report: merged_report, report_raw: report }, { status: 200 });
  } catch (e: any) {
    const msg = e?.message ? String(e.message) : 'Unknown error';
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
