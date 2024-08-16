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
  apiKey: "AIzaSyCMBUO0wJBWg0XjW06Vs90KyXBVXzIZXvs",
  authDomain: "mota-318ad.firebaseapp.com",
  databaseURL: "https://mota-318ad-default-rtdb.firebaseio.com",
  projectId: "mota-318ad",
  storageBucket: "mota-318ad.appspot.com",
  messagingSenderId: "485568541914",
  appId: "1:485568541914:web:90b45a3c444002a58061e3",
  measurementId: "G-7D6RC7D31N"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const auth = getAuth(app);
