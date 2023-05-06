import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext=createContext()
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userProfile=(profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,profile)
    }

    const loginWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const loginWithGithub=()=>{
        return signInWithPopup(auth,githubProvider)
    }

    const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const passwordReset=(email)=>{
        setLoading(true)
       return sendPasswordResetEmail(auth,email)
    }

    const emailVerification=()=>{
        return sendEmailVerification(auth.currentUser)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
     const unsubscribed=onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setUser(currentUser) 
        })
        return ()=>{
            unsubscribed()
        }

    },[])

    const authInfo={
        user,
        loading,
        createUser,
        userProfile,
        loginWithGithub,
        loginWithGoogle,
        emailVerification,
        logIn,
        logOut,
        passwordReset
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;