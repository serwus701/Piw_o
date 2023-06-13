// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADqUkSz08S9tCKa5KGzB3g7t84KBQw1Dk",
    authDomain: "rental-app-3d2a5.firebaseapp.com",
    projectId: "rental-app-3d2a5",
    storageBucket: "rental-app-3d2a5.appspot.com",
    messagingSenderId: "14873353438",
    appId: "1:14873353438:web:f464ad2b896bfd8c90f64f",
    measurementId: "G-NKFF9K5BT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const fireStore = getFirestore(app);