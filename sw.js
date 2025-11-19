const CACHE_NAME = "diamondDefense-v1";

const assets = [
  "./",
  "./index.html",
  "./diamondDefense.css",
  "./diamondDefense.js",
  "./manifest.json",

  // icons
  "./icons/C1.png",
  "./icons/C2.png",
  "./icons/C3.png",
  "./icons/B.png",
  "./icons/S.png",
  "./icons/n1.png",
  "./icons/n2.png",
  "./icons/n3.png",
  "./icons/n4.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
      )
    )
  );
});
