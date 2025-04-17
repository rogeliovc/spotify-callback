export default function handler(req, res) {
  const code = req.query.code;
  if (code) {
    res.send(`
      <html>
        <body>
          <h2>Spotify Authorization Code</h2>
          <p>Copia este código y pégalo en tu app:</p>
          <pre style="font-size:1.5em">${code}</pre>
        </body>
      </html>
    `);
  } else {
    res.send("No code found in query params.");
  }
}