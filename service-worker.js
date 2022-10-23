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
    "revision": "f4404657e8e22df2c92121e2e61583f3"
  },
  {
    "url": "assets/css/0.styles.9c79f0a4.css",
    "revision": "5ef0bdf44f866ebd99e8a4b4f2e2770b"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.d11c8c07.js",
    "revision": "950f474159b5245e0578954b57b3a85d"
  },
  {
    "url": "assets/js/10.29aea2aa.js",
    "revision": "6f9f8da68e4d7effa37343e740c8295a"
  },
  {
    "url": "assets/js/11.a476c206.js",
    "revision": "4bb3758234c0e08f4452b31f48017163"
  },
  {
    "url": "assets/js/12.3c9b5a45.js",
    "revision": "a8823149f6c27a35da533776a35dde9f"
  },
  {
    "url": "assets/js/13.1fef92d0.js",
    "revision": "abb09a19178f081d2fabd011f8520923"
  },
  {
    "url": "assets/js/14.27d75b48.js",
    "revision": "48398495ddf4db4949cd1c958df0c38c"
  },
  {
    "url": "assets/js/15.0cb29c0e.js",
    "revision": "aa88cd47b9d2e935d0e27d196f94879e"
  },
  {
    "url": "assets/js/16.bbf3f880.js",
    "revision": "3a129ebcf6500844bd329c3d72833216"
  },
  {
    "url": "assets/js/4.af0e03a7.js",
    "revision": "896cbf7e866692edd61bb4c84676cbe6"
  },
  {
    "url": "assets/js/5.df97f0b8.js",
    "revision": "3a77a2e2887c0a7e1c9c278685ec436b"
  },
  {
    "url": "assets/js/6.77d5cdd1.js",
    "revision": "4f519235ce7954f84c9e3ed009391d86"
  },
  {
    "url": "assets/js/7.2f59456a.js",
    "revision": "b9c6cc0894ed33de2a7d050dcb5fda7a"
  },
  {
    "url": "assets/js/8.eb712547.js",
    "revision": "1b6a1c76d64b128d709a08434ed55481"
  },
  {
    "url": "assets/js/9.ab7f46d7.js",
    "revision": "7742df7d212e4a3c598a35bb3adec6fa"
  },
  {
    "url": "assets/js/app.b37eeb77.js",
    "revision": "5b1a9538022e53f33fb75b6c2b59ef19"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.4e07c609.js",
    "revision": "aa79d44b727a161d696bf72752afd1d9"
  },
  {
    "url": "avatar.jpg",
    "revision": "ce6bdc17fc9e7eb1fc666bcb6ec97c3c"
  },
  {
    "url": "categories/index.html",
    "revision": "68e3e57126d35f73c2d4e7923e28f9de"
  },
  {
    "url": "categories/javascript/index.html",
    "revision": "df29ec176893f5962e24ebbce327dd9e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "27fa197d69d36cbca9d89750e5f36a78"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "8d2aa18bc3ab3851af2a628e4b0481d5"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "fbfd2251905a2d3c22a2d8a87e9d8fdd"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.jpg",
    "revision": "30c99da8324ed11e674faf8b92b76bb2"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "cc1a89538e20f88edeeb542e24f9ad3a"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "cfb077f685f978b36f66a4a0d89080fc"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "4e07341a38a90bc1f099e76ca827c8a0"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "5cce7e1b3b3b74bf69a6e239b3e32885"
  },
  {
    "url": "tags/js/index.html",
    "revision": "98b5e3e1fbeee16895cdf6ead9a166d4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "12f7f9319fc3547dee336d58872b1a9a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "94810c22a871e8ab0f0496372e8ecdaf"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c2e9b03ac4086924fefa8346d036b3fd"
  },
  {
    "url": "timeline/index.html",
    "revision": "c35458c3d9fe8477529f20fcbb57ff0a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/JavaScript/JavaScript.html",
    "revision": "90176bd0835bf77d2bd20470cbfaea59"
  },
  {
    "url": "技术文章/vue/Vue.html",
    "revision": "b0cbb04a7c3ad994c38a58d8e53f7542"
  },
  {
    "url": "生活分享/life.html",
    "revision": "5d50f3344c4bb6ab304630b976667ad0"
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
