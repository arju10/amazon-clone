// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyClzAiZQuu7di7PXYUXn7SHkwQd3aEg6Ew",
    authDomain: "clone-8b5af.firebaseapp.com",
    projectId: "clone-8b5af",
    storageBucket: "clone-8b5af.appspot.com",
    messagingSenderId: "453815879037",
    appId: "1:453815879037:web:d0a1831ba834fe0950b814",
    measurementId: "G-E1035LYJK2"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db,auth} ;
