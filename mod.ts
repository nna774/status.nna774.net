/// <reference path='./deploy.d.ts' />

type Status = {
  status: 'Degraded' | 'OK';
};

const responseFromAcceptHeader = (accept: string, s: Status): Response => {
  const JSONContentType = 'application/json';
  if (accept.includes(JSONContentType)) {
    return new Response(`{"status": "${s.status}"}`, { headers: { 'content-type': JSONContentType }});
  }
  return new Response(`${s.status}\n`, { headers: { 'content-type': 'text/plain' }});
}

const handleRequest = (req: Request): Response => {
  return responseFromAcceptHeader(req.headers.get('Accept') || '', {status: 'Degraded'})
}

addEventListener('fetch', async (event: FetchEvent) => { event.respondWith(handleRequest(event.request)) });
