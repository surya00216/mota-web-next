"use client"

import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Protect = ({children}:{children:React.ReactNode}) => {
  const router = useRouter();
  const [isUserValid, setIsUserValid] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setIsUserValid(true);
          console.log("This is the logged in user", user);
        } else {
          console.log("no user found");
          router.push("/login");
        }
      });
    };

    checkAuth();
  }, []);
  if (!isUserValid){
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Protect
