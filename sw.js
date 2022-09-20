// Install Service Worker
self.addEventListener('install', evt=>{
    console.log("Service Worker has been registered")
})

// Activate Event
self.addEventListener('activate', evt=>{
    console.log("Service Worker has been activated")
})