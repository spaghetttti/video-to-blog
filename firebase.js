// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL4RUH2espy2GoPEHjacR0tyjhuRtHGP0",
  authDomain: "v2bdb-423513.firebaseapp.com",
  projectId: "v2bdb-423513",
  storageBucket: "v2bdb-423513.appspot.com",
  messagingSenderId: "193228962092",
  appId: "1:193228962092:web:e4d1b0b6d0cb01f5465489",
  measurementId: "G-TZ77B3H85X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { app, db, getDoc, doc};
