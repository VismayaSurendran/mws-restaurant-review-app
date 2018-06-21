let cacheName = "restaurant-cache";
let urlsToCache = [
  "./",
  "./sw.js",
  "./index.html",  
  "./restaurant.html",
  "./css/styles.css",
  "./data/restaurants.json",
  "./js/dbhelper.js",
  "./js/main.js",
  "./js/restaurant_info.js",
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
  "./img/6.jpg",
  "./img/7.jpg",
  "./img/8.jpg",
  "./img/9.jpg",
  "./img/10.jpg"
];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(cacheName).then(function(c){
    return c.addAll(urlsToCache);
  }));
});

self.addEventListener('activate',function(e){
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e){
  e.respondWith(caches.match(e.request, {ignoreSearch:true}).then(function(c){
    return c || fetch(e.request);
  }).catch(function(err){
    console.log(err, e.request);
  })
  );
});