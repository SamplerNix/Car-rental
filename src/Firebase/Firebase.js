// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBRr_cvNvqSLSxG2BOSyko100VHOrOkiK0",
    authDomain: "carvilla-8777a.firebaseapp.com",
    projectId: "carvilla-8777a",
    storageBucket: "carvilla-8777a.firebasestorage.app",
    messagingSenderId: "136568252992",
    appId: "1:136568252992:web:3d0fb4de2794b16bf58da5",
    measurementId: "G-3WYTLT58KN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth =getAuth(app)
export {app,auth}