import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGMbRx41oNpiT5O97EWuSvQc261U_akOo",
  authDomain: "zaio--clone-4a018.firebaseapp.com",
  projectId: "zaio--clone-4a018",
  storageBucket: "zaio--clone-4a018.firebasestorage.app",
  messagingSenderId: "419729861877",
  appId: "1:419729861877:web:324db04ab4aa370631a9bc",
  measurementId: "G-ZEEZSCQJN4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
