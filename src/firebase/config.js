// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANtMVhtLbJ0kLkt3rvkzfC0agCfMDlhMg",
  authDomain: "onlinecinema-ee241.firebaseapp.com",
  projectId: "onlinecinema-ee241",
  storageBucket: "onlinecinema-ee241.firebasestorage.app",
  messagingSenderId: "531301720525",
  appId: "1:531301720525:web:aaf174fb494bffbaf7e484",
  measurementId: "G-WD6VEG7824",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
