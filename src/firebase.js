// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClNtTYww89bK-FQqgiw6OG5X-0uC-2T4g",
  authDomain: "livechat-d1046.firebaseapp.com",
  projectId: "livechat-d1046",
  storageBucket: "livechat-d1046.appspot.com",
  messagingSenderId: "366116636023",
  appId: "1:366116636023:web:8e9be4fa5db261da460d72",
  measurementId: "G-KWW84X600L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)