/* Tasbih Pro service worker — offline-first for the app shell,
   stale-while-revalidate for Google Fonts. Bump CACHE on release. */
const CACHE = 'tasbih-pro-v1';
const SHELL = [
    './',
    './index.html',
    './manifest.json',
    './logo.svg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE)
            .then((c) => c.addAll(SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    const url = new URL(req.url);
    const isFont = url.origin.includes('fonts.googleapis.com') || url.origin.includes('fonts.gstatic.com');

    if (isFont) {
        // Stale-while-revalidate for fonts so they work offline after first load.
        event.respondWith(
            caches.open(CACHE).then((cache) =>
                cache.match(req).then((cached) => {
                    const network = fetch(req)
                        .then((res) => { if (res && res.status === 200) cache.put(req, res.clone()); return res; })
                        .catch(() => cached);
                    return cached || network;
                })
            )
        );
        return;
    }

    if (url.origin === self.location.origin) {
        // App shell: cache-first, fall back to network, then to cached index for navigations.
        event.respondWith(
            caches.match(req).then((cached) =>
                cached || fetch(req)
                    .then((res) => {
                        if (res && res.status === 200 && res.type === 'basic') {
                            const copy = res.clone();
                            caches.open(CACHE).then((c) => c.put(req, copy));
                        }
                        return res;
                    })
                    .catch(() => (req.mode === 'navigate' ? caches.match('./index.html') : undefined))
            )
        );
    }
});
