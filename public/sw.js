if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>n(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/KfvoYBY5jP1Cbkxld6mFX/_buildManifest.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/KfvoYBY5jP1Cbkxld6mFX/_middlewareManifest.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/KfvoYBY5jP1Cbkxld6mFX/_ssgManifest.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/chunks/125-7252aa687da66bf3.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/chunks/821-31996b419e8dab1f.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/chunks/ae51ba48-7695dcf9494c5135.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/chunks/main-abd46b0fcf764e93.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/chunks/pages/_app-f13fdd426bea4c4c.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/chunks/pages/blog-bda2110920f2c7ce.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-2f270cd6ae6498ce.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/chunks/pages/index-af84d57891e482be.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/chunks/pages/projects-e58eb63a45cf1182.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/chunks/pages/testimonials-28f1b26e10283052.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/chunks/webpack-5752944655d749a0.js",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/css/069ff64b07ed1af4.css",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/css/0eb260963d2730a3.css",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/css/71ebd3734796749a.css",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/_next/static/css/d9839727456a3634.css",revision:"KfvoYBY5jP1Cbkxld6mFX"},{url:"/favicon/about.txt",revision:"ccf285201cc0d49bce8f40841f6389f6"},{url:"/favicon/android-chrome-192x192.png",revision:"b5769e9a1c4349fc605d5ddc9912de4f"},{url:"/favicon/android-chrome-512x512.png",revision:"309fca7ddafca226911b2d6efbfa3c03"},{url:"/favicon/apple-touch-icon.png",revision:"c1b225120e16457574aca6e4ca97c195"},{url:"/favicon/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon/favicon-16x16.png",revision:"518a3cee85350d63128ef5791500754f"},{url:"/favicon/favicon-32x32.png",revision:"94c7ffa8a39d63acbeccc852f72480a5"},{url:"/favicon/mstile-150x150.png",revision:"ecf2445feb7c3a3d6d91357c2679abfd"},{url:"/favicon/safari-pinned-tab.svg",revision:"f491fd32b3d9d213ceb56eb01abfaa76"},{url:"/favicon/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/images/akash.png",revision:"3c5ffd4c88e5659d3cef40d31a76de48"},{url:"/images/akashh.png",revision:"32ee36231c02b08ff46be867a075c39f"},{url:"/images/blog-placeholder.png",revision:"3faff33f77e757cf42c5b66c5c0e1b4c"},{url:"/images/github.png",revision:"69b7e397e348747e802b90e5eb0bfbd4"},{url:"/images/web1.png",revision:"f9110c722d1389f1408d211e536cda82"},{url:"/images/web2.png",revision:"df3d82a27aefb781ad439ee34564ea00"},{url:"/images/web3.png",revision:"ae8e971be7957d5fbf6564b971e1f5c1"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
