import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCTHr0qwnnSX1w4wSPmFokDqXAv21mMG6o",
  authDomain: "netflix-clone-5ceb8.firebaseapp.com",
  projectId: "netflix-clone-5ceb8",
  storageBucket: "netflix-clone-5ceb8.appspot.com",
  messagingSenderId: "754898160151",
  appId: "1:754898160151:web:2629802dfb9cd0c786aa52",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
