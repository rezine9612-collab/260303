import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {

  const reportPath = path.join(process.cwd(), "public", "report.html")
  let html = fs.readFileSync(reportPath, "utf8")

  const reportJSON = {
    meta: {},
    rsl: {},
    cff: {},
    rc: {},
    rfs: {}
  }

  const injectedScript = `<script id="dev-report-json" type="application/json">
${JSON.stringify(reportJSON, null, 2)}
</script>`

  // 반드시 존재해야 한다
  if (!/<script[^>]*id=["']dev-report-json["'][^>]*>/i.test(html)) {
    throw new Error("dev-report-json script tag not found in report.html")
  }

  html = html.replace(
    /<script[^>]*id=["']dev-report-json["'][^>]*>[\s\S]*?<\/script>/i,
    injectedScript
  )

  return new NextResponse(html,{
    headers:{
      "Content-Type":"text/html; charset=utf-8",
      "Cache-Control":"no-store"
    }
  })
}
