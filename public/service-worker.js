/* eslint-disable no-restricted-globals */
const CACHE_NAME = "my-app-cache";
const urlsToCache = [
  "/",
  "/index.html",
  "/icons/favicon.ico",
  "/icons/lanche.png",
  "/icons/logo.png",
  "/icons/logo2.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      // Fetch from network
      return fetch(event.request)
        .then((response) => {
          // Check if we received a valid response
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }
          // Clone the response as we need to use it twice
          const responseToCache = response.clone();
          // Put the response in cache
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch((error) => {
          console.error("Fetch failed:", error);
          // You can customize the fallback response here
          return new Response("Failed to fetch", {
            status: 500,
            statusText: "Internal Server Error",
          });
        });
    })
  );
});
