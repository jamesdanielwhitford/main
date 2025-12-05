const CACHE_NAME = 'app1-pwa-cache-v1';
const urlsToCache = [
  '/app1/',
  '/app1/manifest.webmanifest',
  '/app1/example-page',
  '/file.svg'
];

self.addEventListener('install', event => {
  console.log('App1 SW: install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('App1 SW: Caching assets');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  // Only handle requests within the scope of this SW
  if (event.request.url.startsWith(self.registration.scope)) {
    console.log('App1 SW: fetch', event.request.url);
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request);
        })
    );
  }
});
