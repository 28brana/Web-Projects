import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from "firebase/auth";

export const provider = new GoogleAuthProvider();
const firebaseConfig = {
    apiKey: "AIzaSyBA1lxBfRTa9Q4jXqC7_6Phrnjs-H-8jGs",
    authDomain: "chatapp-86688.firebaseapp.com",
    projectId: "chatapp-86688",
    storageBucket: "chatapp-86688.appspot.com",
    messagingSenderId: "991932005825",
    appId: "1:991932005825:web:f520f1a19bb3c31529c340"
  };
const app=initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;