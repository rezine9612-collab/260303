import { NextResponse } from 'next/server';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { deriveAll } from '@/lib/server/derive';

type AnalyzeRequest = { text?: string };

function pickJsonObject(text: string): any {
  try {
    return JSON.parse(text);
  } catch {
    // continue
  }

  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start >= 0 && end > start) {
    const sliced = text.slice(start, end + 1);
    try {
      return JSON.parse(sliced);
    } catch {
      // continue
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

function detectInputLanguage(inputText: string): string {
  if (/[\u3131-\u318E\uAC00-\uD7A3]/.test(inputText)) return 'KO';
  if (/[A-Za-z]/.test(inputText)) return 'EN';
  return 'EN';
}

function makeVerificationId(now: Date): string {
  const yyyy = now.getUTCFullYear();
  const mm = String(now.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(now.getUTCDate()).padStart(2, '0');
  const rand = Math.random().toString().slice(2, 6).padStart(4, '0');
  return `NP-${yyyy}-${mm}${dd}-${rand}`;
}

function toReportSchema(extraction: any, derived: any, inputText: string) {
  const now = new Date();

  const rcd = derived?.rc?.reasoning_control_distribution || {};
  const cffPattern = derived?.cff?.pattern || {};
  const cffDefinition = cffPattern?.definition || {};

  return {
    meta: {
      input_language: detectInputLanguage(inputText),
      generated_at_utc: now.toISOString(),
      verify_url: 'https://neuprint.ai/verify',
      verification_id: makeVerificationId(now),
      input_text: inputText,
      decision_compression_quote: extraction?.decision_compression_quote || ''
    },
    rsl: {
      level: {
        short_name: derived?.rsl?.level?.short_name || '',
        definition: derived?.rsl?.level?.definition || ''
      },
      fri: {
        score: derived?.rsl?.fri?.score ?? null,
        interpretation: derived?.rsl?.fri?.interpretation || ''
      },
      cohort: {
        top_percent_label: derived?.rsl?.cohort?.top_percent_label || '',
        interpretation: derived?.rsl?.cohort?.interpretation || '',
        percentile_0to1: derived?.rsl?.cohort?.percentile_0to1 ?? null
      },
      sri: {
        score: derived?.rsl?.sri?.score ?? null,
        interpretation: derived?.rsl?.sri?.interpretation || ''
      },
      summary: {
        one_line: extraction?.rsl?.summary?.one_line || '',
        paragraph: extraction?.rsl?.summary?.paragraph || ''
      },
      dimensions: Array.isArray(extraction?.rsl?.dimensions) ? extraction.rsl.dimensions : []
    },
    cff: {
      final_type: {
        chip_label: derived?.cff?.final_type?.chip_label || derived?.cff?.final_type?.label || '',
        label: derived?.cff?.final_type?.label || '',
        confidence: derived?.cff?.final_type?.confidence ?? null,
        interpretation: derived?.cff?.final_type?.interpretation || ''
      },
      pattern: {
        primary_label: cffPattern?.primary_label || '',
        secondary_label: cffPattern?.secondary_label || '',
        primary_description: cffPattern?.primary_description || cffDefinition?.primary || '',
        secondary_description: cffPattern?.secondary_description || cffDefinition?.secondary || ''
      },
      labels: Array.isArray(derived?.cff?.labels) ? derived.cff.labels : [],
      values_0to1: Array.isArray(derived?.cff?.values_0to1) ? derived.cff.values_0to1 : []
    },
    rc: {
      reasoning_control_distribution: {
        final_determination: rcd?.final_determination || '',
        Human: rcd?.Human || '',
        Hybrid: rcd?.Hybrid || '',
        AI: rcd?.AI || ''
      },
      summary: derived?.rc?.summary || '',
      control_pattern: derived?.rc?.control_pattern || '',
      reliability_band: derived?.rc?.reliability_band || '',
      band_rationale: derived?.rc?.band_rationale || '',
      observed_structural_signals: {
        '1': derived?.rc?.observed_structural_signals?.['1'] || '',
        '2': derived?.rc?.observed_structural_signals?.['2'] || '',
        '3': derived?.rc?.observed_structural_signals?.['3'] || '',
        '4': derived?.rc?.observed_structural_signals?.['4'] || ''
      },
      pattern_interpretation: derived?.rc?.pattern_interpretation || '',
      structural_control_signals: {
        structural_variance: derived?.rc?.structural_control_signals?.structural_variance ?? null,
        human_rhythm_index: derived?.rc?.structural_control_signals?.human_rhythm_index ?? null,
        transition_flow: derived?.rc?.structural_control_signals?.transition_flow ?? null,
        revision_depth: derived?.rc?.structural_control_signals?.revision_depth ?? null
      },
      determination_sentence:
        derived?.rc?.determination_sentence ||
        rcd?.determination_sentence ||
        ''
    },
    rfs: {
      top_groups: Array.isArray(derived?.rfs?.top_groups) ? derived.rfs.top_groups : [],
      primary_pattern: derived?.rfs?.primary_pattern || '',
      representative_phrase: derived?.rfs?.representative_phrase || '',
      summary_lines: Array.isArray(derived?.rfs?.summary_lines) ? derived.rfs.summary_lines : [],
      recommended_roles_top3: Array.isArray(derived?.rfs?.recommended_roles_top3)
        ? derived.rfs.recommended_roles_top3
        : [],
      recommended_roles_line: derived?.rfs?.recommended_roles_line || '',
      pattern_interpretation: derived?.rfs?.pattern_interpretation || ''
    }
  };
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

    const derived = deriveAll(
      {
        raw_features: extraction,
        rsl: extraction?.rsl,
        rsl_rubric: extraction?.rsl_rubric,
        raw_signals_quotes: extraction?.raw_signals_quotes,
        input_text: inputText
      } as any,
      {
        enableBackendFill: true
      }
    );

    const report = toReportSchema(extraction, derived, inputText);
    return NextResponse.json(report, { status: 200 });
  } catch (e: any) {
    const msg = e?.message ? String(e.message) : 'Unknown error';
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
