export async function onRequest({ request, params }) {
  const { version, file } = params;
  if (!/^v\d+\.\d+\.\d+$/.test(version) || !/^[A-Za-z0-9._-]+\.exe$/.test(file)) {
    return new Response('Not found', { status: 404 });
  }

  const upstream = `https://github.com/adesolabolu/tiktok-live-tts/releases/download/${version}/${file}`;
  const method = request.method === 'HEAD' ? 'HEAD' : 'GET';

  const res = await fetch(upstream, {
    method,
    redirect: 'follow',
    headers: { 'User-Agent': 'TTSLiveStudio-CDN/1.0' },
  });

  if (!res.ok) {
    return new Response('Upstream error', { status: res.status });
  }

  const headers = new Headers();
  headers.set('Content-Type', 'application/vnd.microsoft.portable-executable');
  const len = res.headers.get('Content-Length');
  if (len) headers.set('Content-Length', len);
  headers.set('Content-Disposition', `attachment; filename="${file}"`);
  headers.set('Cache-Control', 'public, max-age=86400');

  return new Response(method === 'HEAD' ? null : res.body, {
    status: 200,
    headers,
  });
}
