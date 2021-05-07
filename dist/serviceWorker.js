self.addEventListener( 'install', e => {

    console.log( 'Installing' );

    e.waitUntil(
        caches.open( 'static' ).then( cache => {
            console.log( 'Caching' );
            return cache.addAll( ['./', './main.js', './images/logo150.png'] );
        } )
    );

} );

self.addEventListener( 'fetch', e => {
    console.log( `Interception fetch request for: ${e.request.url}` );

    e.respondWith(
        caches.match( e.request ).then( response => {
            return response || fetch( e.request );
        } )
    );
} );