import { useAuth } from "@/app/providers/auth-provider"
import { type ClassValue, clsx } from "clsx"
import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { collection, doc, getDoc, getDocs, setDoc, Timestamp } from 'firebase/firestore';
import {firestore} from '@/lib/firebase'; 

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function checkAuth(){
  const router = useRouter()
  const user = useAuth()
  if (!user?.isLoggedIn){
    router.push("/login")
  }
  if (!user?.isLoggedIn){
    return null
  }
}

export const capitalizeStr = (str:string) => {
  const newStr = str.charAt(0).toUpperCase() + str.slice(1)
  return newStr
}
export const getCollection = async(collectionName:string) => {
  try {
    const colRef = collection(firestore, collectionName)
    const querySnapshot = await getDocs(colRef)
    if(querySnapshot.empty){
      return [{id:"There is no such doc"}]
    }
    const docsData = querySnapshot.docs.map(doc=>({
      id:doc.id,
      ...doc.data()
    }));
    console.log(docsData)
    return docsData
  } catch (error) {
    console.log(`GET_COLLECTION_FUNCTION${error}`)
  }
}
export const getAcademicYear = async(depName:string) => {
  try {
    const colRef = collection(firestore, 'departments', depName.toLowerCase(), 'academic year')
    const querySnapshot = await getDocs(colRef)
    if(querySnapshot.empty){
      return [{id:"There is no such doc"}]
    }
    const docsData = querySnapshot.docs.map(doc=>({
      id:doc.id,
      ...doc.data()
    }));
    console.log(docsData)
    return docsData
  } catch (error) {
    console.log(`GET_ACADEMIC_FUNCTION ${error}`)
  }
}

export const getYear = async(depName:string, acadYear:string, gradType:string) => {
  try {
    const colRef = collection(firestore, 'departments', depName.toLowerCase() , 'academic year', `${acadYear}`, 'graduation type', `${gradType}`, 'year')
    const querySnapshot = await getDocs(colRef)
    if(querySnapshot.empty){
      return [{id:"There is no such doc"}]
    }
    const docsData = querySnapshot.docs.map(doc=>({
      id:doc.id,
      ...doc.data()
    }));
    console.log(docsData)
    return docsData
  } catch (error) {
    console.log(`GET_YEAR_FUNCTION ${error}`)
  }
}

export const saveStudent = async(
  department:string,
  emailId:string,
  mobileNo:number,
  name:string,
  password:string,
  acadYear:string,
  graduationType:string,
  year:string,
  rollNo:string

) => {
  try {
    const docData = {
      department,
      emailId,
      mobile_number:mobileNo,
      name,
      password,
      created_timestamp: Timestamp.now()
    }

    const ref = doc(
      firestore, 
      'departments',
      department.toLowerCase(),
      'academic year', 
      acadYear, 
      'graduation type',
      graduationType,
      'year',
      year,
      'students',
      rollNo
    )
    await setDoc(ref, docData)
    console.log('Document successfully written!');
  } catch (error) {
    console.error('Error writing document: ', error);
  }
}

export const getSemester = async() => {
  try {
    
  } catch (error) {
    console.log(`GET__FUNCTION${error}`)
  }
}