"use server"

import { firestore } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function fetchDataFromFirestore() {
  try {
    // Reference the document at the specific path
    const docRef = doc(
      firestore,
      'departments',
      'computer science',
      'academic year',
      '2324',
      'graduation type',
      'UG',
      'year',
      'yourDocumentId' // Replace with your actual document ID
    );

    // Fetch the document
    const docSnap = await getDoc(docRef);

    // Check if the document exists and log the data
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data(); // Return the data for further use
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching document:', error);
  }
}
