// authContext.js
import React, { useContext, useEffect, useState, createContext } from 'react';
import { auth } from '../../Firebase/Firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setUserLoggedIn(!!user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, userLoggedIn }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

// ✅ Add this custom hook:
export function useAuth() {
    return useContext(AuthContext);
}
