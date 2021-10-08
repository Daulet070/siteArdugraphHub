/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2644cb9f1c662f1ce6cc18d4e9fbd61e"
  },
  {
    "url": "assets/css/0.styles.ea848571.css",
    "revision": "0702982cb2dfc87fd6e970bc3809fb61"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e4408cf3.js",
    "revision": "9905c40a58f6b6a1a5108a99cf3dafff"
  },
  {
    "url": "assets/js/11.74616cf7.js",
    "revision": "20057ff1a25c08083451387b78796264"
  },
  {
    "url": "assets/js/12.c3c11eca.js",
    "revision": "3d6f45929fa3786c5a64f4f41a10fa80"
  },
  {
    "url": "assets/js/13.c1e03f8f.js",
    "revision": "aed900f0ce173f4ece9412bba8e7bede"
  },
  {
    "url": "assets/js/14.bbd72f05.js",
    "revision": "92a1aab86da205d218a1755c9930dd7b"
  },
  {
    "url": "assets/js/15.537dc20e.js",
    "revision": "e528d36b05b238784299b60904bd310d"
  },
  {
    "url": "assets/js/16.583fa440.js",
    "revision": "6e88fb4696267be681e6232224045ebd"
  },
  {
    "url": "assets/js/17.034a26a0.js",
    "revision": "13b78b2db459c05f1ca82c33742da291"
  },
  {
    "url": "assets/js/18.2a16d15c.js",
    "revision": "aa4a5d8902c063f9eed18020f48823c9"
  },
  {
    "url": "assets/js/19.a62a09c9.js",
    "revision": "7d49a993a4a0ffa7cc0e3f295b9b7aa6"
  },
  {
    "url": "assets/js/2.b179fc1e.js",
    "revision": "33aa6ee96019f0276dfc26d80e30e41e"
  },
  {
    "url": "assets/js/20.c978fb96.js",
    "revision": "c49e55ee7cff4c75e9e3424fd580c2b9"
  },
  {
    "url": "assets/js/21.dc8bff17.js",
    "revision": "8ed926d193c0aefd0b1d51dc9c3c3775"
  },
  {
    "url": "assets/js/22.d045daef.js",
    "revision": "285339300fcf8602621ee179f24983ee"
  },
  {
    "url": "assets/js/23.32ab6519.js",
    "revision": "c78112e4937aa96f638b72363f37b857"
  },
  {
    "url": "assets/js/3.d98ed4bb.js",
    "revision": "5edd00b9499b233f649b84be46fba8f0"
  },
  {
    "url": "assets/js/4.1e45849b.js",
    "revision": "e12e37e5b110c3c475a130104e8bbddd"
  },
  {
    "url": "assets/js/5.bef4e931.js",
    "revision": "0d517d9f772bf2d023cd2976d5ca27a8"
  },
  {
    "url": "assets/js/6.7d84088c.js",
    "revision": "b5b927d8b2983b25ec7dd53d900703d4"
  },
  {
    "url": "assets/js/7.90bd40d7.js",
    "revision": "5ad7c5a41323e16c971bf5fb0ba25ab5"
  },
  {
    "url": "assets/js/8.b87b8428.js",
    "revision": "297b4594a7bdb4e7519af79f165f078b"
  },
  {
    "url": "assets/js/9.9fdf4adc.js",
    "revision": "4d9181d81717dd29b13ab86c2a816077"
  },
  {
    "url": "assets/js/app.9fb89a5d.js",
    "revision": "b3eedaf0f59b83fd9c56bfe6d75c38f3"
  },
  {
    "url": "files/arduinobg.jpg",
    "revision": "3b93aeb13bb9d6faafb10dee0d253f5e"
  },
  {
    "url": "files/head2.jpg",
    "revision": "0a9aec7644124498e00b7f7f36012873"
  },
  {
    "url": "files/head4.jpg",
    "revision": "b4979ec30d210e3fd732afcc511bb3cf"
  },
  {
    "url": "files/head5.jpg",
    "revision": "ef59fe601edb5981c4d32b7d2968bf64"
  },
  {
    "url": "img/ardu_1024.png",
    "revision": "60164dadd80cd975973fec60c7909120"
  },
  {
    "url": "img/ardu_192.png",
    "revision": "cf26a46bc6d71ac7231460107a5d988a"
  },
  {
    "url": "img/ardu_512.png",
    "revision": "805cf0a4e81eda90cc366b26f36300fe"
  },
  {
    "url": "img/fgtt-min.jpg",
    "revision": "75bded04776e6bc05f6ee4c9eaf233b7"
  },
  {
    "url": "img/head1.png",
    "revision": "fdc2103c576a1b8bed21d93b769954a3"
  },
  {
    "url": "img/icons/apple-logo.svg",
    "revision": "776185f79159636b068d8e7735c9722e"
  },
  {
    "url": "img/icons/download-black.svg",
    "revision": "86478a1858a9c606f0471eb561801bc7"
  },
  {
    "url": "img/icons/download-white.svg",
    "revision": "a3e00aecfc28eae63d68b42668600f92"
  },
  {
    "url": "img/icons/facebook.svg",
    "revision": "740388cbdd184b6daecce9af50fbbcd7"
  },
  {
    "url": "img/icons/instagram.svg",
    "revision": "2e05b63ed24af6f899f65bc4766d11a2"
  },
  {
    "url": "img/icons/telegram.svg",
    "revision": "bd5649b01dbbf63eb80d73c5c2974f98"
  },
  {
    "url": "img/icons/twitter.svg",
    "revision": "41a5e3e353cb1888ae4002d2480d29c8"
  },
  {
    "url": "img/icons/vkontakte.svg",
    "revision": "ddedf2c87763dc8a14f1912b96cda362"
  },
  {
    "url": "img/icons/wave1.svg",
    "revision": "9ad08806804a5651c913d6142bd13bd0"
  },
  {
    "url": "img/icons/waveHigh.svg",
    "revision": "aade3b1ee2228ab753fedbd8c4f1c269"
  },
  {
    "url": "img/icons/waveLow.svg",
    "revision": "9f51fe4924de089d431810ae7b973972"
  },
  {
    "url": "img/icons/youtube.svg",
    "revision": "1ed345163e73921c1464f8af11686f9d"
  },
  {
    "url": "img/img1.png",
    "revision": "f11da6dd010c7af3e8ccb1a3388664f2"
  },
  {
    "url": "img/img2.png",
    "revision": "12e1da29fdec94b7cb2abd453ce77961"
  },
  {
    "url": "img/img3.png",
    "revision": "9f146248e195dfe4f3c5aa035b0f53df"
  },
  {
    "url": "img/img4.png",
    "revision": "289cc155ba263f3f614b4d39442716d7"
  },
  {
    "url": "img/linux-logo.png",
    "revision": "b789e2a262e8b1b2af89a3d070f99243"
  },
  {
    "url": "img/maskable_icon_x192.png",
    "revision": "8e0467959619c390d7a1dbf2b619f1ed"
  },
  {
    "url": "img/maskable_icon_x512.png",
    "revision": "eef7eecc3b5ab14a2f027a82c00c4ccd"
  },
  {
    "url": "img/maskable_icon.png",
    "revision": "4a716cfcccd0f9365d515f291f9cdfc1"
  },
  {
    "url": "img/windows-logo.png",
    "revision": "dba1fba7a6f972fb7dc27d2a91edf749"
  },
  {
    "url": "img2.png",
    "revision": "12e1da29fdec94b7cb2abd453ce77961"
  },
  {
    "url": "index.html",
    "revision": "dc3d4c3229e30d5f9b99421cde5c0110"
  },
  {
    "url": "maskable_icon_x192.png",
    "revision": "8e0467959619c390d7a1dbf2b619f1ed"
  },
  {
    "url": "maskable_icon_x512.png",
    "revision": "eef7eecc3b5ab14a2f027a82c00c4ccd"
  },
  {
    "url": "maskable_icon.png",
    "revision": "4a716cfcccd0f9365d515f291f9cdfc1"
  },
  {
    "url": "pages/about/ardugraph.html",
    "revision": "2a609e5a1cb368369fc66af9dc071813"
  },
  {
    "url": "pages/about/index.html",
    "revision": "c04d76f9727c0ca3aab9f8305526f937"
  },
  {
    "url": "pages/about/newgcorp.html",
    "revision": "8b574fa543709d06d7cfad84dbefcf1a"
  },
  {
    "url": "pages/blog/index.html",
    "revision": "eb00fe3f667e6ca82624261e0ec5fea4"
  },
  {
    "url": "pages/contacts/index.html",
    "revision": "dd57f519183779b6918102e7aaac803d"
  },
  {
    "url": "pages/doc/index.html",
    "revision": "32166285b4c6dcab6b2d310952956d70"
  },
  {
    "url": "pages/doc/interface.html",
    "revision": "f36a047fcd8d72cbb7e2651afe555018"
  },
  {
    "url": "pages/doc/introdutions.html",
    "revision": "ad4fe48604f49462c238e8e2c5620d63"
  },
  {
    "url": "pages/faq/index.html",
    "revision": "2cc745ed988de4082dd1a688010cae22"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
