import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAovbT4-4byWQpBuAdbz0wMi-oButdeFTQ",
  authDomain: "my-portfolio-contact-53cf0.firebaseapp.com",
  projectId: "my-portfolio-contact-53cf0",
  storageBucket: "my-portfolio-contact-53cf0.firebasestorage.app",
  messagingSenderId: "818936299144",
  appId: "1:818936299144:web:265631d45c11caef4ca93d"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };