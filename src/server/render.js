import { renderToString } from "react-dom/server";
import App from "@/server/App";

export default function (req, res) {
  const componentHtml = renderToString(<App />);
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${componentHtml}
</body>
</html>`;

  res.send(html);
}
