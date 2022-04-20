import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAsgo1V7xUW25hpPPEvKeSY5XV5ZCQbOU8",
    authDomain: "fipugram-b2a1c.firebaseapp.com",
    projectId: "fipugram-b2a1c",
    storageBucket: "fipugram-b2a1c.appspot.com",
    messagingSenderId: "473484789020",
    appId: "1:473484789020:web:1e22e88243c47cd022a6d9"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app);

export { app, db, storage };