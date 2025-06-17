'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7c897c2167f77748644493434066ae04",
".git/config": "efb75e4cd6ed9b69b3b428e265a1441d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cdc6e77564d392632d1d3162ecd18e1f",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7a19b808cf2e4cf836a040333a7012a5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d089624140fdc146fb39a51f5e3871f9",
".git/logs/refs/heads/develop": "87dee73490f799708ac0e8770187a9b3",
".git/logs/refs/heads/main": "ee51491c8cf58050f489d3b373ddd06a",
".git/logs/refs/remotes/origin/develop": "239999f70649ba01d175e9a0589b8995",
".git/logs/refs/remotes/origin/main": "7b4ede0a5e027e7456ad367f5f727819",
".git/objects/00/cbe1331838ec1e629c1834292837c7f5d4815f": "0efd8909f34331422a7dee3d1c8f7600",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/31b1f4660463d86d348658f4a35a3674a31d0b": "9c5b2063744cdbe21555c3e68652720c",
".git/objects/12/a3f8827ad34e425e2b51ec5f5d101573c0fdfb": "2257ee87a26088b453a1aa0327d82324",
".git/objects/14/7a46c5235033c80f3af02eab3d3b4824a6f78d": "880a37d9bb80945c71855b3fe58f34d7",
".git/objects/19/0f7c9a6cbea1d5bd526cb4f30c6db75d277f01": "31518e9a6e7ebfb9383d7ac237cb7b31",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/9f30f7482d62e72a4fc62fc8110afb48bac50c": "2577de133809a60c47486881c69ca67b",
".git/objects/3e/0bac187b2a05aebd9031f23d06586bfe34baf1": "feebe554402a099f390b7dec8428259b",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/c40172155c4f9e168a8aa8adcac840280bd7c1": "51055e0df4346d2a2bd560eea9215b2a",
".git/objects/5b/22bc101e8bd031e9f1cb36f4b2e430c907aebd": "9f5497bc9434e91534e8111aa2c2e8e0",
".git/objects/5b/3cbf0997e95380f41e73902ed9c20c219717bc": "eb85be6eab7212686dd9594587bb45f8",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/556988ecef144013d8c5e4146a9462078e8dcd": "25c8aaeb3eae268b7e134b465d1f2071",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/80/9456261a414ca396c61edddaed5e16e377ccf9": "f2dd4f1394cd765c199b2a7fe8e3c3cd",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/0807087a5d97408ef643d4181419d328ea378e": "41a08144c7f6db9f4466adefad1a45d9",
".git/objects/97/6061599878bdc5d97071a371dbc8258f36734a": "392c4426b9dd6c1e65edd11cc370c872",
".git/objects/97/a9780f8220d3762a6e6d51311bcebcdaf8407d": "e92c1381e5a2a32e8572c5803f4f7d7f",
".git/objects/9c/e7b7b2f4ebb5a98cd706801b93a4649f9f6df6": "357fdfd3c166bd91d8e1ce4529a0552f",
".git/objects/9d/21a2d4e937e3844480be0429ca363550f25272": "5d309d196af285506f3d7718d0595c99",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b5/5dda4335f5361564487ac9d48167030b2b74e7": "33c8da475e2b1b32eb9336b7a07d0e5e",
".git/objects/ba/e70f23510bd77bed4fb8e56ee8e2dda62fad3c": "06bafb5f7dc72efbe51058784bfd51c0",
".git/objects/c7/508ad6233161313b01a55a8611641d48223473": "f242077a8afc4c48ba71b8c00f171689",
".git/objects/c7/a262cb873a79fc865e6569d840c47263147287": "5d1b05555548d44350365359584a67d8",
".git/objects/d1/82dece6f24d5688a5bc5329f012f9fd4492538": "3e12e0fedd3b6e8c9362edb18dc8b748",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/615eb578f476cef71c2ab7a3f975c99cd9d176": "678c6784fff13f8b73060262901ad4e5",
".git/refs/heads/develop": "f2d11fec30d21cddd7ead9cecf0dcfb9",
".git/refs/heads/main": "0fcc5a6f5f58a5f510ab0b89abde9559",
".git/refs/remotes/origin/develop": "f2d11fec30d21cddd7ead9cecf0dcfb9",
".git/refs/remotes/origin/main": "0fcc5a6f5f58a5f510ab0b89abde9559",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a8da981d772246cccf7bf7f4f4e47f5a",
"assets/NOTICES": "6207d5532ae043725a95e0dd9eb18b99",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "aa80da49be8f2a11032e45d9c0bb8417",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "6862f4dca4bd3962fbe4615e341a0869",
"index.html": "b3c2ce1b59bbc421e12c10cf4b76b632",
"/": "b3c2ce1b59bbc421e12c10cf4b76b632",
"main.dart.js": "49950079274d903cf59869728765b06a",
"manifest.json": "af796b0244ef1adb4cb54d9f36b03906",
"node_modules/@vercel/analytics/dist/astro/component.ts": "8fd5d499310369e1ec965a51d505c4e9",
"node_modules/@vercel/analytics/dist/astro/index.astro": "71380d9e62c48d7287b8c3f2b2b53cdc",
"node_modules/@vercel/analytics/dist/index.d.mts": "dcc27256d2ccb898a21886c9d32c7c48",
"node_modules/@vercel/analytics/dist/index.d.ts": "dcc27256d2ccb898a21886c9d32c7c48",
"node_modules/@vercel/analytics/dist/index.js": "75212f6f5e7c4b205c81b6e5161d3aee",
"node_modules/@vercel/analytics/dist/index.js.map": "0d9f7e8988dc258716693515737393bf",
"node_modules/@vercel/analytics/dist/index.mjs": "faf3dd7e8c18827659a44b27593989cb",
"node_modules/@vercel/analytics/dist/index.mjs.map": "89df37fdf593c15d755663ef7de4fb33",
"node_modules/@vercel/analytics/dist/next/index.d.mts": "539090187d456f9f2095163b96a24fa2",
"node_modules/@vercel/analytics/dist/next/index.d.ts": "539090187d456f9f2095163b96a24fa2",
"node_modules/@vercel/analytics/dist/next/index.js": "9c500c4b021feab2333ab9e245a55122",
"node_modules/@vercel/analytics/dist/next/index.js.map": "8cc61f5cd446efcb34552b73722d6536",
"node_modules/@vercel/analytics/dist/next/index.mjs": "dd28e3e46fb5d59b9822a5d17b948a8b",
"node_modules/@vercel/analytics/dist/next/index.mjs.map": "fcd6e81ec8fbe934ad13d8b35d7c9465",
"node_modules/@vercel/analytics/dist/nuxt/index.d.mts": "1f8661bb56411c383bb918dfd7befbe9",
"node_modules/@vercel/analytics/dist/nuxt/index.d.ts": "1f8661bb56411c383bb918dfd7befbe9",
"node_modules/@vercel/analytics/dist/nuxt/index.js": "e0ff66b69e5713b02a1952d723ba4e2c",
"node_modules/@vercel/analytics/dist/nuxt/index.js.map": "45e17758ff7d8f6f5e64c7db6aa82650",
"node_modules/@vercel/analytics/dist/nuxt/index.mjs": "19fb8ef8c8c4ae4646c3aec7c14576cd",
"node_modules/@vercel/analytics/dist/nuxt/index.mjs.map": "6afbbb6506abbeb23c0808788250661b",
"node_modules/@vercel/analytics/dist/react/index.d.mts": "39aba1d3a248d2e7ee68754c8fb976b9",
"node_modules/@vercel/analytics/dist/react/index.d.ts": "39aba1d3a248d2e7ee68754c8fb976b9",
"node_modules/@vercel/analytics/dist/react/index.js": "5bce5a5c4dc137a5f75c28ebc33a8ea5",
"node_modules/@vercel/analytics/dist/react/index.js.map": "1b904bb033f21489435e4000d5967b76",
"node_modules/@vercel/analytics/dist/react/index.mjs": "40dcc979cd6fb27589adf032302a22bc",
"node_modules/@vercel/analytics/dist/react/index.mjs.map": "7c4c3c52039e45a3ad88a6083ae196b4",
"node_modules/@vercel/analytics/dist/remix/index.d.mts": "9d69d6f770bbec413ce9b14aca17e079",
"node_modules/@vercel/analytics/dist/remix/index.d.ts": "9d69d6f770bbec413ce9b14aca17e079",
"node_modules/@vercel/analytics/dist/remix/index.js": "d90d0e4d02435a802c30d5494e5a5db0",
"node_modules/@vercel/analytics/dist/remix/index.js.map": "616ad2c1adca08f49ca0da052300edb8",
"node_modules/@vercel/analytics/dist/remix/index.mjs": "e8c2f9def1c609475769dc16a25919c6",
"node_modules/@vercel/analytics/dist/remix/index.mjs.map": "5c4c13044b194fd8798152eb40e8c7c6",
"node_modules/@vercel/analytics/dist/server/index.d.mts": "1a7b90e721b25ebc1a04138cbb70f662",
"node_modules/@vercel/analytics/dist/server/index.d.ts": "1a7b90e721b25ebc1a04138cbb70f662",
"node_modules/@vercel/analytics/dist/server/index.js": "759044e4bac55d4aeb27007233412967",
"node_modules/@vercel/analytics/dist/server/index.js.map": "5abab189a032f6529afeb741b95f705a",
"node_modules/@vercel/analytics/dist/server/index.mjs": "6c51c4ca9013062650ee471801928c23",
"node_modules/@vercel/analytics/dist/server/index.mjs.map": "84a51fec968be9c21b399f01b76cd26b",
"node_modules/@vercel/analytics/dist/sveltekit/index.d.mts": "afa1641f6a084272e7c0d947c1a890b2",
"node_modules/@vercel/analytics/dist/sveltekit/index.d.ts": "afa1641f6a084272e7c0d947c1a890b2",
"node_modules/@vercel/analytics/dist/sveltekit/index.js": "44e62e9fdda80979f7aa7f585ac0fd9b",
"node_modules/@vercel/analytics/dist/sveltekit/index.js.map": "d72b665c1a4d38677873e13c38fa3006",
"node_modules/@vercel/analytics/dist/sveltekit/index.mjs": "98f9bbd7bc4dbcdc7e33d1ab2fbbf212",
"node_modules/@vercel/analytics/dist/sveltekit/index.mjs.map": "1e0449fcac49ee16251589ea89a31823",
"node_modules/@vercel/analytics/dist/vue/index.d.mts": "1f8661bb56411c383bb918dfd7befbe9",
"node_modules/@vercel/analytics/dist/vue/index.d.ts": "1f8661bb56411c383bb918dfd7befbe9",
"node_modules/@vercel/analytics/dist/vue/index.js": "971ed967fc1cfc84573d1951fc2dcb04",
"node_modules/@vercel/analytics/dist/vue/index.js.map": "ef2d5dfb5938d83b11cdf1bdf06419f9",
"node_modules/@vercel/analytics/dist/vue/index.mjs": "3362a39a088109ab48e8092d46b56fb1",
"node_modules/@vercel/analytics/dist/vue/index.mjs.map": "265ec774aca05e2324e0266b45c56bef",
"node_modules/@vercel/analytics/jest.config.js": "8449d8e045dbe8af0e22281462ee484d",
"node_modules/@vercel/analytics/LICENSE": "81bec2692a2a04ebc459d6dca672caf4",
"node_modules/@vercel/analytics/package.json": "6d735fc30633bd6077ea476e94aeef59",
"node_modules/@vercel/analytics/README.md": "a4f8bd8e533fa15a48b8c182cf7d183b",
"node_modules/@vercel/analytics/test.setup.ts": "1c031f33d590e1492631eb0b61c03b3f",
"node_modules/@vercel/analytics/tsconfig.json": "c7aa695a92a8b2bea7500e020c1804c1",
"node_modules/@vercel/analytics/tsup.config.js": "75797d99165654fbb2192dede0bc7eb1",
"node_modules/@vercel/analytics/vitest.config.mts": "bf94c83644d3fb10261a0c17841a686f",
"package-lock.json": "535c8142b1d2ce3d279c789151f19c7b",
"package.json": "2f36d06914534adf693a0ad09e341ede",
"privacy-policy.html": "146f6bf38d1e5efbbeab4b9faf970ee1",
"version.json": "5c8beb598734ae03a8516085535e7877"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
