window.addEventListener('load', () => {
    navigator.serviceWorker.register('serviceworker.js');
});

Notification.requestPermission()
new Notification('Hey')