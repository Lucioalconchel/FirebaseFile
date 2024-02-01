import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAjneOJLPm84aEE0MLYKndbJ6DgTXEgpGw",
  authDomain: "react-firebase-38fbd.firebaseapp.com",
  projectId: "react-firebase-38fbd",
  storageBucket: "react-firebase-38fbd.appspot.com",
  messagingSenderId: "309404271264",
  appId: "1:309404271264:web:40015ddb910ebe7e017fc5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);