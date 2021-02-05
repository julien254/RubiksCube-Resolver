console.log("SW: Téléchargement fini!!!!!!!!");

self.addEventListener("fetch", (event) => {
     event.respondWith(caches.open("cache-dynamique").then(cache =>
         cache.match(event.request).then(cResponse => {
             if (cResponse)
                 return cResponse;
             return fetch(event.request).then(fResponse =>
                 cache.put(event.request, fResponse.clone())
                     .then(() => fResponse)
             );
             console.log(cache);
         })
     ));
 });
