// ✅ Este archivo DEBE estar en la raíz del proyecto: /firebase-messaging-sw.js

// Solo puede usarse en Service Workers
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDG_m71UlmqMJWh2fsmWruogyw4rOZzRyc",
  authDomain: "ls-conection.firebaseapp.com",
  projectId: "ls-conection",
  messagingSenderId: "355653094451",
  appId: "1:355653094451:web:6fab60e3511eaada7c6746"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./imagenes/Estella robot help.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

