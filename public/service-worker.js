/* eslint-disable no-restricted-globals */
const CACHE_NAME = "my-app-cache-v1"; // Versão do cache
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
      // Retorna do cache se encontrado
      if (response) {
        return response;
      }

      // Caso contrário, busca na rede
      return fetch(event.request)
        .then((networkResponse) => {
          // Verifica se a resposta é válida
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type !== "basic"
          ) {
            return networkResponse;
          }

          // Clona a resposta e a coloca no cache
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch((error) => {
          console.error("Fetch failed:", error);
          // Responde com uma mensagem de erro
          return new Response("Failed to fetch", {
            status: 500,
            statusText: "Internal Server Error",
          });
        });
    })
  );
});

// Limpa caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
