import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-435d0.firebaseapp.com",
  projectId: "mern-blog-435d0",
  storageBucket: "mern-blog-435d0.appspot.com",
  messagingSenderId: "175842728125",
  appId: "1:175842728125:web:025ad88ebd0df33dde3fd4",
};

const app = initializeApp(firebaseConfig);

export default app;
