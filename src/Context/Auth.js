import React,{createContext, useEffect, useState } from 'react';
import {auth} from '../firebase/firebase';

export const Authcontext=createContext()

export const AuthProvider=({children})=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   useEffect(()=>{
      const unsbscrib = auth.onAuthStateChanged((user)=>{
           setUser(user);
           setLoading(false);
       })
       return unsbscrib
},[]);
if(loading)
return <p>Loading...</p>;
return(
    <Authcontext.Provider value={{user}}>{children}</Authcontext.Provider>
)
}