import React,  { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {auth} from './firebase'

const userAuthContext = createContext();

export function UserAuthContextProvider ({children}) {

    const [user, setUser] = useState();     

    function signUp (email, password) {
        return createUserWithEmailAndPassword (auth, email, password)
    }

     async function logIn (email, password) {
        const out = await signInWithEmailAndPassword (auth, email, password)
        setUser(out.user)
        console.log(out)
    }

    function logOut (){
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged (auth, (currentUser) => {
            setUser(currentUser)
        });
        
        return () => {
            
            unsubscribe()
        }
    
    },[])
    
 
    return <userAuthContext.Provider value={{user, signUp, logIn, logOut}}>
                {children}
            </userAuthContext.Provider>
    }

    export function useUserAuth () {
        return useContext(userAuthContext)
    }