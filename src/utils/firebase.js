// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "vichaar-blog.firebaseapp.com",
  projectId: "vichaar-blog",
  storageBucket: "vichaar-blog.appspot.com",
  messagingSenderId: "1088017686992",
  appId: "1:1088017686992:web:5398ba307ba093f43459d5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
