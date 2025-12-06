// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJN_xLI2s-xR8fysNJ-bsRE2QetaGSUPc",
  authDomain: "finalis-5a8a8.firebaseapp.com",
  projectId: "finalis-5a8a8",
  storageBucket: "finalis-5a8a8.firebasestorage.app",
  messagingSenderId: "731792202688",
  appId: "1:731792202688:web:f8d2be9006f6585bc6c625",
  measurementId: "G-V0DD67KPG7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export const auth = getAuth(app);
console.log(analytics)