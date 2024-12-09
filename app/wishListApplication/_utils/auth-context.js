"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const gitHubSignIn = async () => {
    if (!auth) {
      console.error("Firebase Auth is not initialized.");
      return;
    }
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("GitHub Sign-In Error:", error.message);
    }
  };

  const firebaseSignOut = async () => {
    if (!auth) {
      console.error("Firebase Auth is not initialized.");
      return;
    }
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign-Out Error:", error.message);
    }
  };

  useEffect(() => {
    if (!auth) {
      console.error("Firebase Auth is not initialized.");
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUserAuth must be used within an AuthContextProvider");
  }
  return context;
};