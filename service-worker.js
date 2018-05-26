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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cf66530263ed30fb3d18933b4b6f3cee"
  },
  {
    "url": "assets/css/4.styles.8d556122.css",
    "revision": "a55dc678a003ac3d75f8c550c2eb5b5f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.c07bee68.js",
    "revision": "387f8bed38eb77c4631e4e57448ea2d9"
  },
  {
    "url": "assets/js/1.bbfdb512.js",
    "revision": "73a7df424af897f82b1cf8349b9ed862"
  },
  {
    "url": "assets/js/2.d9fb7a2e.js",
    "revision": "c6aaf73d77699c83e69b6947708c4573"
  },
  {
    "url": "assets/js/3.79f1f98e.js",
    "revision": "dcd49ba7c326380b20bd83d025ad4c50"
  },
  {
    "url": "assets/js/app.f42b58c0.js",
    "revision": "ddb16a7c75c6987d005d098f3444edee"
  },
  {
    "url": "guide/index.html",
    "revision": "4754408e4c07799ba91d25132fc14de7"
  },
  {
    "url": "guide/item-1.html",
    "revision": "5d4b20f9b067e85d2d8d13874f8f1090"
  },
  {
    "url": "guide/item-2.html",
    "revision": "d2707e8878a30e92806e546ca54c21d9"
  },
  {
    "url": "img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "52449c20a2f35b9445866de32ed2dbb4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
