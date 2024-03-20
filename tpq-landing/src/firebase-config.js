// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_wSc8B9SpQEHub-aMnuDPxdtFVsoz_NU",
  authDomain: "tpq-server-51cd3.firebaseapp.com",
  projectId: "tpq-server-51cd3",
  storageBucket: "tpq-server-51cd3.appspot.com",
  messagingSenderId: "356831174005",
  appId: "1:356831174005:web:fdcafb234f2e705c60473c",
  measurementId: "G-CCYFHT400E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)