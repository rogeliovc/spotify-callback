export default function handler(req, res) {
  const code = req.query.code;
  if (code) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`
      <html>
        <head>
          <title>Spotify Authorization Code</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            body { font-family: sans-serif; max-width: 480px; margin: 80px auto; background: #f8fafc; color: #222; }
            .code-box { display: flex; align-items: center; border: 1px solid #ccc; border-radius: 8px; padding: 12px; background: #f4f4f4; margin-bottom: 16px; }
            .code { word-break: break-all; font-family: monospace; font-size: 1.1em; flex: 1; margin-right: 12px; user-select: all; }
            button { padding: 6px 16px; font-weight: bold; border-radius: 4px; border: none; background: #1db954; color: #fff; cursor: pointer; font-size: 1em; }
            button:active { background: #159c41; }
            .copied { color: #1db954; margin-left: 10px; font-size: 0.95em; }
            @media (max-width: 600px) { body { margin: 20px; } }
          </style>
        </head>
        <body>
          <h2>Spotify Authorization Code</h2>
          <p>Copia este código y pégalo en tu app:</p>
          <div class="code-box">
            <span class="code" id="code">${code}</span>
            <button onclick="copyCode()">Copiar</button>
            <span id="copied" class="copied" style="display:none;">¡Copiado!</span>
          </div>
          <p style="color:#888; font-size:13px;">El código solo es válido una vez y por pocos minutos.</p>
          <script>
            function copyCode() {
              const code = document.getElementById('code').innerText;
              navigator.clipboard.writeText(code).then(function() {
                document.getElementById('copied').style.display = 'inline';
                setTimeout(() => {
                  document.getElementById('copied').style.display = 'none';
                }, 1500);
              });
            }
          </script>
        </body>
      </html>
    `);
  } else {
    res.send("No code found in query params.");
  }
}