// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB0CUE8ZFbpB49aHsk5ns0cQoJmtZa0Zc",
  authDomain: "tpq-site.firebaseapp.com",
  projectId: "tpq-site",
  storageBucket: "tpq-site.appspot.com",
  messagingSenderId: "437060106178",
  appId: "1:437060106178:web:f55e3fe9f2f640ff6a085b",
  measurementId: "G-DKKWN5VVJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };