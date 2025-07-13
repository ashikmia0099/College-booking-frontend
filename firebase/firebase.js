// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8kRJt6HMmZ6MprjyBJ5g8wUejI3f27rg",
  authDomain: "college-booking-c7b4b.firebaseapp.com",
  projectId: "college-booking-c7b4b",
  // storageBucket: "college-booking-c7b4b.firebasestorage.app",
  storageBucket: "college-booking-c7b4b.appspot.com", // ✅ Correct

  messagingSenderId: "1029773119886",
  appId: "1:1029773119886:web:68826d860b2741346b14df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);