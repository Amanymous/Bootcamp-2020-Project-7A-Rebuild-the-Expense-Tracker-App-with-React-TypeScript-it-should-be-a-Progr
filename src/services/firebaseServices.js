import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDf59TCYGX2zfmhpy5tr08ZGfDBI_lBOKY',
  authDomain: 'quiz-app-6efb5.firebaseapp.com',
  databaseURL: 'https://quiz-app-6efb5.firebaseio.com',
  projectId: 'quiz-app-6efb5',
  storageBucket: 'quiz-app-6efb5.appspot.com',
  messagingSenderId: '230531173080',
  appId: '1:230531173080:web:29a258495320107702e5ad',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function configureNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(Permissions);
    if (permission === 'granted') {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log('TOKEN');
            console.log(currentToken);
          } else {
            console.log(
              'No Instance ID token available. Request permission to generate one.'
            );
          }
        })
        .catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
    }
  });
}
