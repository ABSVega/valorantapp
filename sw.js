importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

workbox.precaching.precacheAndRoute([
  "index.html",
  "armeria.html",
  "rutinas.html",
  "app.js",
  "sw.js",
  "manifest.webmanifest",
  "css/main-css.css",
  "css/bootstrap.min.css",
  "css/bootstrap.css",
  "js/bootstrap.min.js",
  "img/playerone.jpg",
  "img/playertwo.jpg",
  "img/version1.png",
  "img/Version2.jpg",
  "img/Version3.jpg",
  "icons/512.png",
  "img/mira1.PNG",
  "img/mira2.PNG",
  "img/mira3.PNG",
  "img/clasic.jpg",
  "img/shorty.jpg",
  "img/Ghost.jpg",
  "img/frenzy.jpg",
  "img/stinger.jpg",
  "img/spectre.jpg",
  "img/bucky.jpg",
  "img/judge.jpg",
  "img/bulldog.jpg",
]);

workbox.routing.registerRoute(
  ({request}) => request.destination === "document",
  new workbox.strategies.NetworkFirst()
);


/*self.addEventListener("install", (e) => {
  console.log("Instalado");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(contenidoCache);
    })()
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      if (r) return r;
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      cache.put(e.request, response.clone());
      return response;
    })()
  );
});*/
