const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  './index.html',
  './css/styles.css',
  './js/clima.js',
  './js/pwa.js',
  './img/icono.png',
  './img/descarga.png',
  './img/descarga2.png',
  './img/descarga3.png',
  './img/descarga4.png',
  './img/descarga5.png',
  './img/descarga6.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[ServiceWorker] Archivos cacheados');
        return cache.addAll(urlsToCache);
      }).catch(err => console.error('Error al cachear archivos:', err))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[ServiceWorker] Eliminando caché antigua:', cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
