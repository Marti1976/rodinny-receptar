const CACHE_NAME = 'RECEPTAR_v0.50_A3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json?v=0.50_A3',
  './icons/icons32.png',
  './icons/icons64.png',
  './icons/icons128.png',
  './icons/icons192.png',
  './icons/icons256.png',
  './icons/icons512.png',
  './iconsS/1s.jpg',
  './iconsO/1o.jpg',
  './iconseEXT/e1.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Pre-caching critical assets');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (!(event.request.url.startsWith('http'))) return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        return cachedResponse;
      });

      return cachedResponse || fetchPromise;
    })
  );
});
