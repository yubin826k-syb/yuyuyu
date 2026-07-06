// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqU0QfMCAYMD3k7DNN2vj2A42t_tqM9PM",
  authDomain: "gogo-ac579.firebaseapp.com",
  projectId: "gogo-ac579",
  storageBucket: "gogo-ac579.firebasestorage.app",
  messagingSenderId: "89900821714",
  appId: "1:89900821714:web:bccc6cf4f148759d05910b",
  measurementId: "G-LY0QPE7N80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
