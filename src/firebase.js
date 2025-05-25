import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAovbT4-4byWQpBuAdbz0wMi-oButdeFTQ",
  authDomain: "my-portfolio-contact-53cf0.firebaseapp.com",
  projectId: "my-portfolio-contact-53cf0",
  storageBucket: "my-portfolio-contact-53cf0.firebasestorage.app",
  messagingSenderId: "818936299144",
  appId: "1:818936299144:web:265631d45c11caef4ca93d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };