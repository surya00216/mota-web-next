'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

type AuthContextType = {
  user: User | null;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }:{children:React.ReactNode}) => {
  const [user, setUser] = useState<User|null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Define unprotected routes
  const unprotectedRoutes = '/login';

  useEffect(() => {
    // Check if the route is protected
    const pathIsProtected = !(unprotectedRoutes) ;
    if (!loading && !user && pathIsProtected) {
      // Redirect to the login page if the user is not authenticated
      router.push('/login');
    }
  }, [user, loading, router]);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};
