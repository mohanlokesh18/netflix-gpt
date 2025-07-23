// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvE3ev9cDW7YydYGOu9W2XMyIaH_tfZFc",
  authDomain: "netflixgpt-power.firebaseapp.com",
  projectId: "netflixgpt-power",
  storageBucket: "netflixgpt-power.firebasestorage.app",
  messagingSenderId: "651766741282",
  appId: "1:651766741282:web:fe0dfc43c04b9343e78d7b",
  measurementId: "G-7HJZX6FBNB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
