// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXuMR0WfOnwLi9Z9gz_V2iZhetdLZlJJk",
  authDomain: "it-sysarch32-store-quimque.firebaseapp.com",
  projectId: "it-sysarch32-store-quimque",
  storageBucket: "it-sysarch32-store-quimque.appspot.com",
  messagingSenderId: "635965557363",
  appId: "1:635965557363:web:65627ac036883c60903806",
  measurementId: "G-9SZKNZ1S05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
