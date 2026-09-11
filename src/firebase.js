// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhavjGwTC69ioVSa1o-O_720FTcDi5rZ4",
  authDomain: "chat-app-aa8b2.firebaseapp.com",
  projectId: "chat-app-aa8b2",
  storageBucket: "chat-app-aa8b2.firebasestorage.app",
  messagingSenderId: "651770669918",
  appId: "1:651770669918:web:132a95b60124c5c74f3dcf",
  measurementId: "G-4TPD3CL49G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);