importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js'
);

const firebaseConfig = {
  apiKey: 'AIzaSyAoCQSTMk0XOCUmX7ytmHvSjnQPyMUmtrY',
  authDomain: 'expense-tracker-typescript.firebaseapp.com',
  databaseURL: 'https://expense-tracker-typescript.firebaseio.com',
  projectId: 'expense-tracker-typescript',
  storageBucket: 'expense-tracker-typescript.appspot.com',
  messagingSenderId: '412055693362',
  appId: '1:412055693362:web:dad0a1d58ad4151cc6742b',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
