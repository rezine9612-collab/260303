import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {

  const reportPath = path.join(process.cwd(), "public", "report.PATCHED_v3.html")

  let html = fs.readFileSync(reportPath, "utf8")

  const reportJSON = {
    meta: {},
    rsl: {},
    cff: {},
    rc: {},
    rfs: {}
  }

  html = html.replace(
    `<script id="dev-report-json" type="application/json">
</script>`,
    `<script id="dev-report-json" type="application/json">
${JSON.stringify(reportJSON, null, 2)}
</script>`
  )

  return new NextResponse(html,{
    headers:{
      "Content-Type":"text/html; charset=utf-8"
    }
  })

}
