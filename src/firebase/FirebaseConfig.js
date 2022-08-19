import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvAtU4DKx5WfPB5SkCgPUz9IVY-XhstdY",
  authDomain: "linkedin-a20c8.firebaseapp.com",
  projectId: "linkedin-a20c8",
  storageBucket: "linkedin-a20c8.appspot.com",
  messagingSenderId: "175948369528",
  appId: "1:175948369528:web:c746c79a4c38616d62278d",
  measurementId: "G-TPF86SYEXX",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
