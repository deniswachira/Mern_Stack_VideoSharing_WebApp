// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC6w0AcqEPBXRJiCl1gp1XTizCmNWUBkts",
  authDomain: "video-778ff.firebaseapp.com",
  projectId: "video-778ff",
  storageBucket: "video-778ff.appspot.com",
  messagingSenderId: "344651902210",
  appId: "1:344651902210:web:21bbe6be5f9744e6c7e61b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider()

export default app;