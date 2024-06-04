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
      return fetch(event.request);
    })
  );
});
