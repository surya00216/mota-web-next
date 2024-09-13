import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCIGWPqOo2uq0Ps4Rcx6EgnDejJoBhQGdY",
  authDomain: "test-504c5.firebaseapp.com",
  projectId: "test-504c5",
  storageBucket: "test-504c5.appspot.com",
  messagingSenderId: "839506147195",
  appId: "1:839506147195:web:6175fc4cbbba70b99b6fde",
  measurementId: "G-VNRCGB346L"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const auth = getAuth(app);
