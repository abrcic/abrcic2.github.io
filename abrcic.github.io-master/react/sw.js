self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('vanjstodo-store').then(function(cache) {
        return cache.addAll([
          '/react/',
          '/react/index.html',
          '/react/index.js',
          '/react/images/Hrvatska_PNG.png',
          '/react/js/app.js',
          '/react/js/app.jsx',
          '/react/js/footer.jsx',
          '/react/js/todoModel.js',
          '/react/js/todoItem.jsx',
          '/react/js/utils.js',
          '/react/node_modules/todomvc-app-css/index.css',
          '/react/node_modules/todomvc-common/base.css',
          '/react/node_modules/todomvc-common/base.js'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });