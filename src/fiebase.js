// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpDfFEFLd3thh6rcwlRa1nL-OAFiVYQ34",
  authDomain: "valentine-3ccaf.firebaseapp.com",
  projectId: "valentine-3ccaf",
  storageBucket: "valentine-3ccaf.appspot.com",
  messagingSenderId: "727429514442",
  appId: "1:727429514442:web:f3159900351811dba82033",
  measurementId: "G-35CSKETVMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);