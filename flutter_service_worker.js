'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "77f8a139ff1426956668eeb83c9f116a",
"/": "77f8a139ff1426956668eeb83c9f116a",
"main.dart.js": "b99b95b58a110c44dc890d23ce13abc0",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "618d318903f2ee509bb644a8479442c9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90c454c29b48f08bc06627d125f70466",
"assets/AssetManifest.json": "2ea2383e6854548b9ccee4fe9eee7229",
"assets/NOTICES": "c5fd356c61efe459059db0ee5e1edbd9",
"assets/FontManifest.json": "e88da408e364c39d5e1738932caba5dc",
"assets/AssetManifest.bin.json": "ba24c301f77545682508538e62202659",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "146885d83fe22a5ae021282ad8a8d8d7",
"assets/fonts/MaterialIcons-Regular.otf": "8433d638210ba265be070f76dd41a2a1",
"assets/assets/images/illustration_2.png": "672276190be15db5ed313c64d36e1685",
"assets/assets/images/service10.png": "6986fd26b5187b5fc428d1503cc61b7d",
"assets/assets/images/service11.png": "4793d7a2b8239323daae1a29db8140a8",
"assets/assets/images/service13.png": "542c3b2d7022b98416522e20cd7aca2f",
"assets/assets/images/service12.png": "92241168dfd83d9eb8e35f034e730985",
"assets/assets/images/service3.png": "24f3fa5e1c99f9ab850a97d1e5b1a445",
"assets/assets/images/service2.png": "607ef0d6abd04e548ea916a2b5a3f16b",
"assets/assets/images/service1.png": "fd9f18b63c7523aaa98c55c9b790de1a",
"assets/assets/images/service5.png": "30563f3666226d36c22878834149f4e7",
"assets/assets/images/illustration.png": "c50c0dee7619fb0c98be389b14ac8aca",
"assets/assets/images/service4.png": "b4464ef7ac79b0ef795788c85a67dd3e",
"assets/assets/images/service7.png": "c16fb25f69a567fc412ea2183bc2397e",
"assets/assets/images/service9.png": "8f19b31c53d9e9132e40f02d27195915",
"assets/assets/images/service8.png": "c886705cb5634a09ce22ed43146072be",
"assets/assets/images/contact_us.png": "32dd2b513de02c221bc7a5561f634b82",
"assets/assets/images/main_image.jpg": "f7e84449c35f5b4b7358d59663274108",
"assets/assets/logo/watermark.png": "ca80f872bcd74c89dbd7795732996946",
"assets/assets/logo/logo.png": "618d318903f2ee509bb644a8479442c9",
"assets/assets/loader/loader.gif": "f56204c8df7c9b32fa3babe1de9fcde5",
"assets/assets/icons/tata_motors.png": "1226e841f3176b0028d531100bbf9226",
"assets/assets/icons/interior.png": "2e15b3cce0dae4bbcec521e4179393ac",
"assets/assets/icons/tanishq.png": "30e985a58f821a0ec7f27c21aa771428",
"assets/assets/icons/skoda.png": "b9feb74c08f2277f8191a88cf4a31622",
"assets/assets/icons/fastrack.png": "7f4a34895bae29cf4fc5cce7f7ca5598",
"assets/assets/icons/levis.png": "a694b6b95f00ecce589cbb74bd5975b2",
"assets/assets/icons/services.png": "57ee3294ae70899f243a367dcf160e5a",
"assets/assets/icons/lenskart.png": "b56070c9719fc8915152282ad5357ff8",
"assets/assets/icons/home.png": "72918bf75694588f81e3ebb01f6293eb",
"assets/assets/icons/about_us.png": "bb3696bde19e73e1ae8eda0c89a5f6d6",
"assets/assets/icons/pepe_jeans.png": "ec928c90f8f255afeb9b93184a302941",
"assets/assets/icons/third_wave_coffee.png": "036bfa903a99be9cdac4037e5675e917",
"assets/assets/icons/clean.png": "5edbe0ef881ed55a43459d1ace9cf1c8",
"assets/assets/icons/us_polo.png": "e1375ed7e777e8c1b7f18d5291030ecd",
"assets/assets/icons/hng.png": "7b8a1a3274d7e60aacc96dbd50888ec1",
"assets/assets/icons/starbucks.png": "0c6a37d99a63469372d8abcefefb00fd",
"assets/assets/icons/contact_us.png": "cfedbf7dda84158885ab81acb97a2540",
"assets/assets/icons/badge.png": "67876a7a0c97522de48f9115f9783bf3",
"assets/assets/icons/bata.png": "bf85f81a00d61d66d197a8b49a978465",
"assets/assets/fonts/Satoshi-Black.otf": "22d9e9fdd8728dfa00bb0f49124ce5a7",
"assets/assets/fonts/Satoshi-Regular.otf": "177a4dda04b52dedbd966942e932c5dc",
"assets/assets/fonts/Satoshi-Light.otf": "d1d1eaba7a325545089fa9d773459211",
"assets/assets/fonts/Satoshi-Medium.otf": "378def5c1f4df7eb6554a88608893391",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
