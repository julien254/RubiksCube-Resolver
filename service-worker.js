console.log("SW: Service Telechargé!");

self.addEventListener("fetch", (event) => {
   event.respondWith(caches.open("mon-cache").then(cache =>
       cache.match(event.request).then(cResponse => {
           if (cResponse) {
               event.waitUntil(fetch(event.request).then(fResponse =>
                   cache.put(event.request, fResponse)
               ));
               return cResponse;
           } else {
               return fetch(event.request).then(fResponse =>
                   cache.put(event.request, fResponse.clone())
                       .then(() => fResponse)
               );
           }
       })
   ));
});
