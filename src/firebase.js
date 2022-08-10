// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDp11Cr7dOhRTk7cpS8HJ306u48dAeVCQ",
  authDomain: "dream-cature-studio.firebaseapp.com",
  projectId: "dream-cature-studio",
  storageBucket: "dream-cature-studio.appspot.com",
  messagingSenderId: "1069043819362",
  appId: "1:1069043819362:web:574d2085ee67a745d2023b",
  measurementId: "G-LBK7W059ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;
// const analytics = getAnalytics(app);