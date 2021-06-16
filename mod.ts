function handleRequest(_request) {
  return new Response('Degraded', { headers: { 'content-type': 'text/plain' }});
}

addEventListener('fetch', async (event) => { event.respondWith(handleRequest(event.request)) });
