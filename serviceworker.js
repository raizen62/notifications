self.addEventListener('install', event => console.log('Service worker is installed!'));

self.addEventListener('notificationclick', event => {

    // if (event.action === 'close') {
    //     event.notification.close();
    // } else {
    //     self.clients.openWindow('/');
    // }

});