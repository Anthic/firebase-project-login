// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdsOh3-gQ5M9b0uhQbv3Kb80j2iUfwYlo",
  authDomain: "second-firebase-1d15d.firebaseapp.com",
  projectId: "second-firebase-1d15d",
  storageBucket: "second-firebase-1d15d.firebasestorage.app",
  messagingSenderId: "356522004308",
  appId: "1:356522004308:web:8d891ef354b0ec76bec2c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
