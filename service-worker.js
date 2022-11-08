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
    "revision": "20903322f769520b2e6820256fa4ed59"
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
    "url": "assets/js/11.98f4216c.js",
    "revision": "e8c4ff5ce71ae9a1865a26869a9b9b1d"
  },
  {
    "url": "assets/js/12.e661133b.js",
    "revision": "5fd8d3fe4b338a1ea22a1dc02e519745"
  },
  {
    "url": "assets/js/13.d3edd8ce.js",
    "revision": "db43bfdd4cf476b63b74aca58c48274b"
  },
  {
    "url": "assets/js/14.8191e329.js",
    "revision": "bc96c0ce6dd06cb54321249488bdabcb"
  },
  {
    "url": "assets/js/15.55dfe66d.js",
    "revision": "d7fc1c4dcda1459735ec1dd6c2b61079"
  },
  {
    "url": "assets/js/16.9782e075.js",
    "revision": "fa4b50ee7de812bc26bca993db0d4c4e"
  },
  {
    "url": "assets/js/17.93b2f660.js",
    "revision": "c4493ed9942c4331de48d027ed60d2d4"
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
    "url": "assets/js/app.ab61940f.js",
    "revision": "30932e430911f55ea866ad1947be75f8"
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
    "revision": "ea8f76aeb9b3f9e944915e447cbdc9f1"
  },
  {
    "url": "categories/javascript/index.html",
    "revision": "5502d3ae4f3e8f5f5a2961b72868a946"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f9e46950bd2ffe6f337abf6172d4139f"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "02a61295d4a1695e28b2c1e9b163bc49"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f62141b25476858e0189ce9b3dcb2d8a"
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
    "revision": "0b69fdb5d7bf42b1cf1cc7e40c4058ee"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "d95bdbaa509ec96e77a17c6ab49a265a"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "494d8bb939460136b3181fdde7a2912b"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "1954d8371a51190f6ca2bf9e84d73458"
  },
  {
    "url": "tags/js/index.html",
    "revision": "27f8694837b415ef28b1bd460b13cdb8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "79c5504dde311a912671a0e1bb5ae9cf"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "6e42ae72a115d3c50a958090fe7d0f2a"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "5e7bbeb8925992a689f301d43ffd3dc3"
  },
  {
    "url": "timeline/index.html",
    "revision": "6ca2666dc604f38be6c6bd1d72cb319f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/JavaScript/JavaScript.html",
    "revision": "53c53fff2e0ae205fe88825b038ff0b4"
  },
  {
    "url": "技术文章/Python/爬虫.html",
    "revision": "9e40755431c22c0f9dbf502d81f8e9fe"
  },
  {
    "url": "技术文章/vue/Vue.html",
    "revision": "fb62f52eaa8ca172333352ecebcceca6"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b84b94e1f83eb8404e877c0e079c9cc4"
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
