import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD23eXPNpLcOIHYRmXKPMhfX21n33pLH14",
  authDomain: "reactlinks-e25f6.firebaseapp.com",
  projectId: "reactlinks-e25f6",
  storageBucket: "reactlinks-e25f6.appspot.com",
  messagingSenderId: "424259827854",
  appId: "1:424259827854:web:fa79402f17250eaf2ef1df",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
