import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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