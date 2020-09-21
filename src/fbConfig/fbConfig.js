import firebase from 'firebase/app';
import auth from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDEt9XqE3Rqgbr4k1JyZx88x9B2nMpyH_s",
  authDomain: "netflix-clone-f369b.firebaseapp.com",
  databaseURL: "https://netflix-clone-f369b.firebaseio.com",
  projectId: "netflix-clone-f369b",
  storageBucket: "netflix-clone-f369b.appspot.com",
  messagingSenderId: "309428778163",
  appId: "1:309428778163:web:b871a4ba72a0aea7b06cc6",
  measurementId: "G-X1X8Y081C9"
};

firebase.initializeApp(firebaseConfig)

export default firebase;