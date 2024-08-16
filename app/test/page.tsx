"use client"

import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import {firestore} from '@/lib/firebase'; 

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [field, setField] = useState<any>()
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        ///departments/computer science/academic year/2324/graduation type/UG/year/FY/students
        const colRef = collection( // to get a whole collection
          firestore,
          'departments',
          'computer science',
          'academic year',
          '2324',
          'graduation type',
          'UG',
          'year',
          'FY',
          'students',
        );
        const docRef = doc( // to get a particular doc
          firestore,
          'departments',
          'computer science',
          'academic year',
          '2324',
          'graduation type',
          'UG',
          'year',
          'FY',
          'students',
          'TCS2324001' // This is the document ID we want to fetch
        );
        const refDoc = doc( // This is a doc which contain's a field that references another doc
          firestore,
          'students',
          'iGgQRqIANLZD3c8zu12F',
        ) 

        // const docSnap = await getDoc(docRef); //get a single doc value
        const querySnapshot = await getDocs(colRef); //get multiple doc
        const docsData = querySnapshot.docs.map(doc => ({
          id: doc.id, // Document ID
          ...doc.data() // Document data
        }));

        setData(docsData)
        // if (docSnap.exists()) {           -
        //   const val = docSnap.data().std   |  
        //   setField(val)                    |   
        //   console.log(val)                 |-- to Get a single doc value
        //   setData(docSnap.data());     |        
        // } else {                           |              
        //   setError('No such document!');  -        
        // }
      } catch (error) {
        console.error('Error fetching document:', error);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once after the initial render

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Data from Firestore</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Nicely format JSON data */}
    </div>
  );
};

export default DataFetcher;
