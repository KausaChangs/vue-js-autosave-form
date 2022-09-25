import { firebase } from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAyZKGOg1kVVY3aA7Q07I8E_KkSSelg5Jc",
  authDomain: "autoform-786c3.firebaseapp.com",
  databaseURL: "https://autoform-786c3-default-rtdb.firebaseio.com",
  projectId: "autoform-786c3",
  storageBucket: "autoform-786c3.appspot.com",
  messagingSenderId: "299314942749",
  appId: "1:299314942749:web:afb42e8f9b3a4c2dabc7f4",
  measurementId: "G-5G825XBTCF",
});

const db = firebaseApp.firestore();

export { db };
