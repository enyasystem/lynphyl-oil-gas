const CACHE_NAME = "lynphyl-v1"
const urlsToCache = [
  "/",
  "/services/fuel-supply",
  "/services/logistics-transport",
  "/services/technical-services",
  "/careers",
  "/case-studies",
  "/images/lynphyl-logo.jpg",
  "/images/nigeria-map.png",
  "/manifest.json",
]

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    }),
  )
})

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      return response || fetch(event.request)
    }),
  )
})

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Push notification event
self.addEventListener("push", (event) => {
  const options = {
    body: event.data ? event.data.text() : "New update from Lynphyl Oil & Gas",
    icon: "/images/lynphyl-logo.jpg",
    badge: "/images/lynphyl-logo.jpg",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "View Details",
        icon: "/images/lynphyl-logo.jpg",
      },
      {
        action: "close",
        title: "Close",
        icon: "/images/lynphyl-logo.jpg",
      },
    ],
  }

  event.waitUntil(self.registration.showNotification("Lynphyl Oil & Gas", options))
})
