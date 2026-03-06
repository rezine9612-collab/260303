import { NextResponse } from "next/server"

export async function GET() {

  const reportJSON = {
    meta: {},
    rsl: {},
    cff: {},
    rc: {},
    rfs: {}
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>NeuPrint Report</title>
</head>

<body>

<div id="report-root"></div>

<script id="dev-report-json" type="application/json">
${JSON.stringify(reportJSON)}
</script>

<script src="/report.js"></script>

</body>
</html>
`

  return new NextResponse(html,{
    headers:{
      "Content-Type":"text/html"
    }
  })

}
