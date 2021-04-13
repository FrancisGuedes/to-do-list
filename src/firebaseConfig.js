import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAi-yQwuFZrAl9LCnL05wnUvV7yBxoTW7I",
  authDomain: "todotask-29f72.firebaseapp.com",
  projectId: "todotask-29f72",
  storageBucket: "todotask-29f72.appspot.com",
  messagingSenderId: "758958126909",
  appId: "1:758958126909:web:988b977ba80e1568713754",
  measurementId: "G-FVN75SNKD2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export { db };

/* <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAi-yQwuFZrAl9LCnL05wnUvV7yBxoTW7I",
    authDomain: "todotask-29f72.firebaseapp.com",
    projectId: "todotask-29f72",
    storageBucket: "todotask-29f72.appspot.com",
    messagingSenderId: "758958126909",
    appId: "1:758958126909:web:988b977ba80e1568713754",
    measurementId: "G-FVN75SNKD2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script> */

