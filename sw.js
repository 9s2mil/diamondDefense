const CACHE = "sheep-guardian-v1";

const assets = [
  "./",
  "./index.html",
  "./manifest.json",
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

// 설치
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(assets))
  );
});

// 요청 가로채기
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
