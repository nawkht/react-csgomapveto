"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/react-csgomapveto/index.html","d0448214ce67555fd813161d0e1208b2"],["/react-csgomapveto/static/css/main.ab6c9f27.css","f04986da3e7ac2c80b79c2c9846660ec"],["/react-csgomapveto/static/js/main.cbd24cba.js","b91bdec75ee07c275ebe2fd174c6b0a4"],["/react-csgomapveto/static/media/best-of-1.3712d655.jpg","3712d6553e2a265c47cdbf9d18bf01ab"],["/react-csgomapveto/static/media/best-of-3.dcc13129.jpg","dcc13129835464b3cfe7ab5aadf4a7c1"],["/react-csgomapveto/static/media/best-of-5.e0585176.jpg","e05851765d4e8d1553832074760ea5c5"],["/react-csgomapveto/static/media/bg.f94f9846.jpg","f94f984614f967c4ee29284b00768773"],["/react-csgomapveto/static/media/csgo-logo.f181fa40.png","f181fa4055c9e9411037e970cc79cff3"],["/react-csgomapveto/static/media/de_cache.4fc83082.png","4fc830823d588216b0d03983b7318d9f"],["/react-csgomapveto/static/media/de_inferno.832bd1cd.jpg","832bd1cdf4f3a8e2597f413aabd258b5"],["/react-csgomapveto/static/media/de_nuke.0563da5b.jpg","0563da5b437806ac4d83c2cd052034c1"],["/react-csgomapveto/static/media/de_overpass.936c0e49.png","936c0e49e8f6357243bacb39331258e1"],["/react-csgomapveto/static/media/de_train.76f3806a.png","76f3806af99135366c5226e9c64e4c47"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/react-csgomapveto/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});