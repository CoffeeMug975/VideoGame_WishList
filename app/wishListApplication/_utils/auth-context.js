"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

// Create the context
const AuthContext = createContext();

// Provide the context
export const AuthContextProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    // Sign in with GitHub
    const gitHubSignIn = async () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    };

    // Sign out
    const firebaseSignOut = async () => {
        return signOut(auth);
    };

    // Subscribe to auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        });
        return () => unsubscribe(); // Clean up subscription on unmount
    }, []);

    // Return the context value
    return (
        <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the auth context
export const useUserAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useUserAuth must be used within an AuthContextProvider");
    }
    return context;
};
