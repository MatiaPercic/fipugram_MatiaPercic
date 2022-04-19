import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

 var firebaseConfig = {
    apiKey: "AIzaSyAsgo1V7xUW25hpPPEvKeSY5XV5ZCQbOU8",
    authDomain: "fipugram-b2a1c.firebaseapp.com",
    projectId: "fipugram-b2a1c",
    storageBucket: "fipugram-b2a1c.appspot.com",
    messagingSenderId: "473484789020",
    appId: "1:473484789020:web:1e22e88243c47cd022a6d9"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export {
      firebase
  }