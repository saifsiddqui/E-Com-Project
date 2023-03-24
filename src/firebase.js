// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
    apiKey: "AIzaSyDWMAChJQEAZqWOTdRmtQuNjjN74F1M8xM",
    authDomain: "ecom-project-4588e.firebaseapp.com",
    projectId: "ecom-project-4588e",
    storageBucket: "ecom-project-4588e.appspot.com",
    messagingSenderId: "351303348967",
    appId: "1:351303348967:web:c2e6c8ee6162c68ac3e842",
    measurementId: "G-EE81XBK9E4"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);