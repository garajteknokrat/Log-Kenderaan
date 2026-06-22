// Service worker minimum untuk membolehkan "Install App" / "Add to Home Screen"
// berfungsi dengan baik. Tak buat caching kompleks — setiap kali app dibuka,
// ia tetap ambil versi terkini dari internet (penting sebab data tempahan
// kena sentiasa terkini).
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request, { cache: 'no-store' }));
});
