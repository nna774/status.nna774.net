/// <reference path='./deploy.d.ts' />

function handleRequest(_: Request): Response {
  return new Response('Degraded', { headers: { 'content-type': 'text/plain' }});
}

//const sw = self as ServiceWorkerGlobalScope & typeof globalThis
self.addEventListener('fetch', async (event: FetchEvent) => { event.respondWith(handleRequest(event.request)) });
