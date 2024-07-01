// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGhsr3nNO5OCsDzMZriB0JuIraglHRXK0",
    authDomain: "contact-app-cd8f6.firebaseapp.com",
    projectId: "contact-app-cd8f6",
    storageBucket: "contact-app-cd8f6.appspot.com",
    messagingSenderId: "1051692169471",
    appId: "1:1051692169471:web:ee48ac2e24c218a323f4ca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)