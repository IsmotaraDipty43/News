import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config.js';

export const Authcontext = createContext(); 
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const[loading,setloading]=useState(true);
// console.log(user);
    const createnewUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
const logOut=()=>{
    setloading(true)
    return signOut(auth)
    
}
 const userLogin=(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }

 const updateUserProfile = (updateData)=>{
      return updateProfile(auth.currentUser, updateData)
 }




    const authinfo = {
        user,
        setUser,
        createnewUser,
        loading,
        logOut,
        updateUserProfile ,
        userLogin
 
    };
 

useEffect(()=>{

const unsubscribe = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser);
    setloading(false)
})

return()=>{
    unsubscribe()
}

},[])


    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;
