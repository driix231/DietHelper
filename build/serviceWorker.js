self.addEventListener('install', event => {
  function onInstall() {
    return caches.open('static')
      .then(cache => cache.addAll([
        '/'
      ])
      );
  }

  event.waitUntil(onInstall(event));
});


self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response
        }
        return fetch(event.request)
      }
    )
  )
})

self.addEventListener('activate', (event) => {
});