// server.js
// Run:
//   npm i express@4 cors node-fetch@3   # or express@5 if you prefer
//   node server.js
//
// Local endpoints:
//   GET http://127.0.0.1:8787/ping
//   GET http://127.0.0.1:8787/supported
//   GET http://127.0.0.1:8787/bypass?url=<url>
//   GET http://127.0.0.1:8787/refresh?url=<url>

const express = require('express');
const cors = require('cors');

const app = express();

// CORS (no wildcard OPTIONS path—compatible with Express 4 & 5)
app.use(cors({
  origin: true,               // reflect request origin
  methods: ['GET', 'OPTIONS'],
  allowedHeaders: ['Accept', 'Content-Type', 'x-api-key'],
}));
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

const PORT = process.env.PORT || 8787;

// ---- YOUR API KEY (server-side only) ----
const API_KEY = '0b8141fd-40c7-4f57-a502-34556940e60f';
const API_KEY_HEADER = 'x-api-key';

// Use native fetch if Node >= 18 else fallback
async function doFetch(url, options) {
  if (typeof fetch === 'function') return fetch(url, options);
  const nodeFetch = (await import('node-fetch')).default;
  return nodeFetch(url, options);
}

// Encode the URL exactly once
function encodeOnce(value) {
  try {
    const decoded = decodeURIComponent(value);
    return encodeURIComponent(decoded);
  } catch {
    return encodeURIComponent(value);
  }
}

async function forwardToIzen(path, rawUrlParam, res) {
  try {
    const encoded = encodeOnce(rawUrlParam);
    const upstreamUrl = `https://api.izen.lol${path}?url=${encoded}`;

    console.log(`[proxy ->] ${upstreamUrl}`);

    const upstreamRes = await doFetch(upstreamUrl, {
      method: 'GET',
      headers: {
        [API_KEY_HEADER]: API_KEY,
        'Accept': 'application/json',
      },
      redirect: 'follow',
    });

    const contentType = upstreamRes.headers.get('content-type') || '';
    const bodyText = await upstreamRes.text();

    console.log(`[proxy <-] ${upstreamRes.status} ${contentType || '(no content-type)'}`);

    if (contentType) res.set('Content-Type', contentType);
    res.status(upstreamRes.status).send(bodyText);
  } catch (err) {
    console.error('[proxy error]', err?.stack || err);
    res.status(500).json({ error: 'Proxy failure', details: err?.message || String(err) });
  }
}

// Health + convenience routes
app.get('/ping', (req, res) => res.json({ ok: true, note: 'proxy running' }));

app.get('/supported', async (req, res) => {
  try {
    const upstream = await doFetch('https://api.izen.lol/v1/supported', {
      headers: { [API_KEY_HEADER]: API_KEY, 'Accept': 'application/json' },
    });
    const ct = upstream.headers.get('content-type') || '';
    const body = await upstream.text();
    if (ct) res.set('Content-Type', ct);
    res.status(upstream.status).send(body);
  } catch (err) {
    console.error('[supported error]', err);
    res.status(500).json({ error: 'Proxy failure', details: err?.message || String(err) });
  }
});

// Main forwarding routes
app.get('/bypass', (req, res) => {
  const raw = req.query.url;
  if (!raw) return res.status(400).json({ error: 'Missing url query parameter. Use /bypass?url=<url>' });
  forwardToIzen('/v1/bypass', raw, res);
});

app.get('/refresh', (req, res) => {
  const raw = req.query.url;
  if (!raw) return res.status(400).json({ error: 'Missing url query parameter. Use /refresh?url=<url>' });
  forwardToIzen('/v1/refresh', raw, res);
});

// Bind to 0.0.0.0 so localhost/127.0.0.1/::1 all work
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Proxy listening on http://127.0.0.1:${PORT}`);
  console.log('Try:  http://127.0.0.1:8787/ping');
});
