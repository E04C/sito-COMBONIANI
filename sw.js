/* Service worker Comboniani 26/27.
   - Pagina (index.html, anche se richiesta come / o /index.html): prima la rete, senza HTTP cache, così gli aggiornamenti arrivano subito; senza rete la copia salvata.
   - Librerie e font dai CDN: copia salvata subito, aggiornata in background.
   - Il database Firebase non passa mai da qui: resta sempre in tempo reale. */
/* Nome della cache = "cmb-v" + APP_VERSION di index.html: da aggiornare insieme a ogni release */
const VERSION = 'cmb-v1.7.10';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png'];
const CDN = /(^|\.)gstatic\.com$|(^|\.)cdnjs\.cloudflare\.com$|(^|\.)fonts\.googleapis\.com$|(^|\.)cdn\.jsdelivr\.net$/;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  if(/firebasedatabase\.app$|firebaseio\.com$/.test(url.hostname)) return;

  const isPage = req.mode === 'navigate' || (url.origin === self.location.origin && /(^|\/)(index\.html)?$/.test(url.pathname));
  if(isPage){
    e.respondWith(fetch(req, { cache:'no-cache' }).then(res => {
      if(res && res.ok){ const copy = res.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); }
      return res;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  if(url.origin === self.location.origin || CDN.test(url.hostname)){
    e.respondWith(caches.match(req).then(hit => {
      const net = fetch(req).then(res => {
        if(res && (res.ok || res.type === 'opaque')){ const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => hit);
      return hit || net;
    }));
  }
});
