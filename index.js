window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('serviceworker.js');
    }
});

document.querySelector('#show-simple-notification').onclick = async () => {
    const reg = await navigator.serviceWorker.getRegistration();

    Notification.requestPermission().then(permission => {
        if (permission !== 'granted') {
            alert('Hi. In order to use the notifications we need to accept this!');
        } else {
            const timestamp = new Date().getTime() + 6 * 1000;
            reg.showNotification(
                'Hello Netcentricos',
                {
                    tag: timestamp, // a unique ID
                    body: "You should see this!", // content of the notification
                    // showTrigger: new TimestampTrigger(timestamp), // set the time for the push notification
                    // data: {
                    //     url: window.location.href, // pass the current url to the notification
                    // },
                    // badge: './assets/badge.png',
                    icon: 'ella.png',
                    actions: [
                        {
                            action: 'open',
                            title: 'Open app'
                        },
                        {
                            action: 'close',
                            title: 'Close notification',
                        }
                    ],
                }
            );
        }
    });
};
