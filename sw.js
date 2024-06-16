
let sw_name="Snip_service_worker"
let files_to_add=["/","/index.html","/mainfest.json","/pwa_logo.png"]

self.addEventListener("install",async(ev)=>{
    ev.waitUntil(
        caches.open(sw_name).then((cache)=>{
            return cache.addAll(files_to_add);
        })
    )
})


self.addEventListener("fetch",async(ev)=>{
    ev.respondWith(
        caches.match(ev.request).then((response)=>{
            return response || fetch(caches.request)
        })
    )
})