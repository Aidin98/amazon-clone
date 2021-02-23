import firebase from "firebase";

const firebaseConfig = {
 apiKey: "AIzaSyDU3HziMM5eW3FvoNPTG4siss-vRm01zcI",
  authDomain: "clone-9c49e.firebaseapp.com",
  projectId: "clone-9c49e",
  storageBucket: "clone-9c49e.appspot.com",
  messagingSenderId: "861162337610",
  appId: "1:861162337610:web:05659e7f1731b1742cfdb3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };