// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNhEfbLpUWbug8oiOBkaRiMxkyxfnnzrY",
  authDomain: "netflixgpt-efe44.firebaseapp.com",
  projectId: "netflixgpt-efe44",
  storageBucket: "netflixgpt-efe44.appspot.com",
  messagingSenderId: "422829843668",
  appId: "1:422829843668:web:e21ee4c596a92405e94741",
  measurementId: "G-C8FP2B2NG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();