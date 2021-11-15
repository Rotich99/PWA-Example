const CACHE_NAME ='v1';
const urlsToCache=[
	'index.html',
	'Style.css',
	'SW.js',
	'Assets/192.png',
	'Assets/icon.png',
	'main.js',
	'manifest.json'	
];
// call the install event
self.addEventListener('install', function(event) {
	console.log('SERVICE-=WORKER INSTALLED');
	self.skipWaiting();
	event.waitUntil( 
		caches.open(CACHE_NAME)
		.then(cache => {
			return cache.addAll(urlsToCache);
		})
		);
		});	
self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => { 
			return response || fetch(event.request);
		})	
	);
});		

