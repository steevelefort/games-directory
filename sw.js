if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>s(e,c),a={module:{uri:c},exports:o,require:t};i[c]=Promise.all(n.map((e=>a[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-6c670a36"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CDY3xpge.css",revision:null},{url:"assets/index-CsIAwIJL.js",revision:null},{url:"assets/workbox-window.prod.es5-DL_hIMXg.js",revision:null},{url:"index.html",revision:"d51fc1171cf00348871ec19694a773ba"},{url:"apple-touch-icon.png",revision:"66f336973c894c26f02aa93e462de086"},{url:"favicon.ico",revision:"7cac5149641e6449139e3488c4be44d0"},{url:"mask-icon.svg",revision:"0c9ef4b4fa86e74f67d367f20b504c3f"},{url:"pwa-192x192.png",revision:"19a37445ac5ad66a06e3e9bf105305a3"},{url:"pwa-512x512.png",revision:"2760ec6670ecff93fa200b3240ac6d9f"},{url:"manifest.webmanifest",revision:"79d919583a133336d5c8cb3e6fcc0616"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/api\.rawg\.io\/api/,new e.StaleWhileRevalidate({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
