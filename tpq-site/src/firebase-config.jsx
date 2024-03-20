import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBncjm46pXgDQoSN7tuK-SWOJrzgJJUMWo",
  authDomain: "tpq-site-ced3c.firebaseapp.com",
  projectId: "tpq-site-ced3c",
  storageBucket: "tpq-site-ced3c.appspot.com",
  messagingSenderId: "771755260694",
  appId: "1:771755260694:web:90d1d2d8da912f35f06e37",
  measurementId: "G-7NJ1RQLR7Z"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
