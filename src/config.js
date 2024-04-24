// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: test.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: test.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: test.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: test.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: test.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: test.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: test.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
