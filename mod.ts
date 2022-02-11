/// <reference path='./deploy.d.ts' />

type Status = {
  status: 'Degraded' | 'OK';
};

const responseFromAcceptHeader = (accept: string, s: Status): Response => {
  const JSONContentType = 'application/json';
  if (accept.includes(JSONContentType)) {
    return new Response(JSON.stringify(s), { headers: { 'content-type': JSONContentType }});
  }
  return new Response(`${s.status}\n`, { headers: { 'content-type': 'text/plain' }});
};

const favicon = (): Response => {
  return new Response(null, {status: 302, headers: { location: 'https://nna774.net/favicon.ico' }});
};

const ひみつのことResponse = (): Response => {
  return new Response('今回の「ピ」について', { status: 401 });
};

const handleRequest = (req: Request): Response => {
  const url = new URL(req.url);
  switch(url.pathname) {
  case '/favicon.ico':
    return favicon();
  case encodeURI('/ひみつのこと.txt'):
    return ひみつのことResponse();
  }
  return responseFromAcceptHeader(req.headers.get('Accept') || '', {status: 'Degraded'});
};

addEventListener('fetch', async (event: FetchEvent) => { event.respondWith(handleRequest(event.request)) });
