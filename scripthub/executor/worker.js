// worker.js — Cloudflare Worker for api.izen.lol proxy
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    if (path === '/ping') return json({ ok: true, note: 'worker running' });

    if (path === '/supported') {
      return forward(env.API_KEY, 'https://api.izen.lol/v1/supported');
    }

    if (path === '/bypass' || path === '/refresh') {
      const target = url.searchParams.get('url');
      if (!target) return json({ error: 'Missing url query parameter' }, 400);
      const upstreamPath = path === '/bypass' ? '/v1/bypass' : '/v1/refresh';
      const upstreamUrl = `https://api.izen.lol${upstreamPath}?url=${encodeOnce(target)}`;
      return forward(env.API_KEY, upstreamUrl);
    }

    return json({ error: 'Not found' }, 404);
  }
};

function corsHeaders(extra = {}) {
  return {
    'Access-Control-Allow-Origin': 'https://scripthub.fun', // lock to your GitHub Pages origin
    'Access-Control-Allow-Methods': 'GET,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Accept',
    'Access-Control-Max-Age': '86400',
    ...extra,
  };
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: corsHeaders({ 'Content-Type': 'application/json' }),
  });
}

function encodeOnce(value) {
  try { return encodeURIComponent(decodeURIComponent(value)); }
  catch { return encodeURIComponent(value); }
}

async function forward(API_KEY, upstreamUrl) {
  try {
    const r = await fetch(upstreamUrl, {
      method: 'GET',
      headers: { 'x-api-key': API_KEY, 'Accept': 'application/json' },
      redirect: 'follow',
    });
    const ct = r.headers.get('content-type') || '';
    const body = await r.text();
    return new Response(body, {
      status: r.status,
      headers: corsHeaders(ct ? { 'Content-Type': ct } : {}),
    });
  } catch (e) {
    return json({ error: 'Upstream failed', details: String(e) }, 500);
  }
}
