// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-435d0.firebaseapp.com",
  projectId: "mern-blog-435d0",
  storageBucket: "mern-blog-435d0.appspot.com",
  messagingSenderId: "175842728125",
  appId: "1:175842728125:web:025ad88ebd0df33dde3fd4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
