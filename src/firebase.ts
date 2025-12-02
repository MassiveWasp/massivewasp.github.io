import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDltCSqN1mE4tfpbDeKDYUgk2GJNDlmdMs",
    authDomain: "massivewasp.firebaseapp.com",
    projectId: "massivewasp",
    storageBucket: "massivewasp.firebasestorage.app",
    messagingSenderId: "45374844160",
    appId: "1:45374844160:web:cd4f4cbadb7bd89c6217e5",
    measurementId: "G-NGXCW1F91V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
