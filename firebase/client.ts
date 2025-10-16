
import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyAtXk_V1zbjpKpQHyQxLLhNygckimvAZeM",
    authDomain: "prepwise-83e48.firebaseapp.com",
    projectId: "prepwise-83e48",
    storageBucket: "prepwise-83e48.firebasestorage.app",
    messagingSenderId: "219593955513",
    appId: "1:219593955513:web:a6173528fbc938ae21e368",
    measurementId: "G-T77CQ5BK0J"

};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
