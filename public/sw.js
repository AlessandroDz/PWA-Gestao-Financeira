const CACHE_NAME = 'gerenciador-financeiro-shell-v1'
const APP_ROOT = new URL('./', self.registration.scope).href
const APP_SHELL = [
  APP_ROOT,
  new URL('manifest.webmanifest', APP_ROOT).href,
  new URL('icons/icon-192.png', APP_ROOT).href,
  new URL('icons/icon-512.png', APP_ROOT).href,
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names
          .filter((name) => name.startsWith('gerenciador-financeiro-shell-') && name !== CACHE_NAME)
          .map((name) => caches.delete(name)),
      ))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const request = event.request
  const url = new URL(request.url)

  if (
    request.method !== 'GET' ||
    url.origin !== self.location.origin ||
    !url.href.startsWith(self.registration.scope) ||
    url.href === new URL('sw.js', APP_ROOT).href
  ) {
    return
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request)
          if (response.ok) {
            const cache = await caches.open(CACHE_NAME)
            await cache.put(APP_ROOT, response.clone())
          }
          return response
        } catch {
          return (await caches.match(request)) || (await caches.match(APP_ROOT))
        }
      })(),
    )
    return
  }

  if (['script', 'style', 'image', 'font'].includes(request.destination)) {
    event.respondWith(
      (async () => {
        const cached = await caches.match(request)
        if (cached) return cached

        const response = await fetch(request)
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME)
          await cache.put(request, response.clone())
        }
        return response
      })(),
    )
  }
})
