import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// zamiijeniti s vašom konfiguracijom!
const firebaseConfig = {
    apiKey: "AIzaSyCd8iWeFAYGTQ5KWC62jg4Bw_32mYPhm5E",
    authDomain: "fipugram-4bed1.firebaseapp.com",
    projectId: "fipugram-4bed1",
    storageBucket: "fipugram-4bed1.appspot.com",
    messagingSenderId: "1065339960296",
    appId: "1:1065339960296:web:6a0f8d968e7e7fde42825d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);