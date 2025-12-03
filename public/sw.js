const CACHE_NAME = 'root-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/manifest.webmanifest',
  '/file.svg'
];

self.addEventListener('install', event => {
  console.log('Root SW: install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Root SW: Caching assets');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // Let sub-app service workers handle their own scope
  if (url.pathname.startsWith('/app1/') || url.pathname.startsWith('/app2/')) {
    return;
  }
  
  console.log('Root SW: fetch', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
