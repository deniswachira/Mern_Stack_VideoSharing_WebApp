// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "your api key",
  authDomain: "video-778ff.firebaseapp.com",
  projectId: "your project id",
  storageBucket: "video-778ff.appspot.com",
  messagingSenderId: "344651902210",
  appId: "your app id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider()

export default app;