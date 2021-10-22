/// <reference no-default-lib="true"/>
/// <reference lib="es2020" />
/// <reference lib="webworker" />

function handleRequest(_: Request): Response {
  return new Response('Degraded', { headers: { 'content-type': 'text/plain' }});
}

const sw = self as ServiceWorkerGlobalScope & typeof globalThis
sw.addEventListener('fetch', async (event: FetchEvent) => { event.respondWith(handleRequest(event.request)) });
