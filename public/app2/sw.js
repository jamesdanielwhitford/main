const CACHE_NAME = 'app2-pwa-cache-v1';
const urlsToCache = [
  '/app2/',
  '/app2/manifest.webmanifest',
  '/app2/example-page',
  '/file.svg'
];

self.addEventListener('install', event => {
  console.log('App2 SW: install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('App2 SW: Caching assets');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  // Only handle requests within the scope of this SW
  if (event.request.url.startsWith(self.registration.scope)) {
    console.log('App2 SW: fetch', event.request.url);
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request);
        })
    );
  }
});
