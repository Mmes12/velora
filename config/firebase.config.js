// Import the functions you need from the SDKs you need
 
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getstorage} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: "velora-d13ab.firebaseapp.com",
  projectId: "velora-d13ab",
  storageBucket: "velora-d13ab.firebasestorage.app",
  messagingSenderId: "19942730229",
  appId: "1:19942730229:web:2efce279e4e89ef025d8bc"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
//const storage = getStorage(app);

export{db}