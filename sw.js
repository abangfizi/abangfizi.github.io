const CACHE_NAME = "fizi-app";
const ASSETS = ["/", "/index.html", "/script-check-website.html", "/icon.png"];

// ✅ Install - cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)),
  );
  self.skipWaiting(); // ← tambahan: langsung aktif tanpa tunggu tab lama ditutup
});

// ✅ Activate
self.addEventListener("activate", (event) => {
  self.clients.claim(); // ← tambahan: langsung kontrol semua tab
});

// ✅ Fetch - cache first
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});

// ✅ TAMBAHAN: Terima pesan notifikasi dari halaman
self.addEventListener("message", (event) => {
  if (event.data?.type === "SHOW_NOTIFICATION") {
    self.registration.showNotification(event.data.title, {
      body: event.data.body,
      icon: "/icon.png",
    });
  }
});
