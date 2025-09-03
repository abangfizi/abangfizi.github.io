const CACHE_NAME = "my-wuling";
const ASSETS = [
  "/",
  "/index.html",
  "/my-wuling.html",
  "/engine-page.html",
  "/icon.png",
  "/assets/images/Almaz RS bagasi.png",
  "/assets/images/Almaz RS buka kunci.png",
  "/assets/images/Almaz RS cahaya 1.png",
  "/assets/images/Almaz RS jendela 1.png",
  "/assets/images/Almaz RS jendela.png",
  "/assets/images/Almaz RS.png",
  "/assets/images/bagasi.png",
  "/assets/images/daun.png",
  "/assets/images/kabin cool.png",
  "/assets/images/kabin hidup.png",
  "/assets/images/kabin.png",
  "/assets/images/pintu mobil.png",
  "/assets/images/salju.png",
  "/assets/images/setir.png",
  "/assets/images/suhu.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
