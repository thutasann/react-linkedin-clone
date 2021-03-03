import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyByZUrKNNzwjpPfMpJSqF6Djet3LDe9Uus",
  authDomain: "linkedin-3ea13.firebaseapp.com",
  projectId: "linkedin-3ea13",
  storageBucket: "linkedin-3ea13.appspot.com",
  messagingSenderId: "966096771689",
  appId: "1:966096771689:web:a66e0879e673fe1d6ee0f8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
