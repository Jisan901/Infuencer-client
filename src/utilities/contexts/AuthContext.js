import React,{useState,createContext,useEffect} from 'react';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,updateProfile,GoogleAuthProvider,FacebookAuthProvider,signInWithPopup,sendPasswordResetEmail,sendEmailVerification} from 'firebase/auth';
import app from '../firebase/firebase.init';


const auth = getAuth(app);


export const userContext = createContext();


function AuthContext({children}) {
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);
    
    
    
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    
    
    const getIdToken = ()=>{
        return auth.currentUser.getIdToken()
    }
    
    
    const signIn = (email,password) =>
    {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
    }
    
    
    
    const signInGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,new GoogleAuthProvider())
    }
    
    
    const signInFb = ()=>{
        setLoading(true)
        return signInWithPopup(auth,new FacebookAuthProvider())
    }
    
    
    
    const logOut = () => {
    setLoading(true)
    setUser({})
     return signOut(auth);
    }
    
    
    
    const updateUser = (Cuser,data)=> {
        setLoading(true)
        return updateProfile(Cuser,data);
    }
    
    
    
    const forgetPassword=(email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }
    
    const verifyEmail=()=>{
        return sendEmailVerification(auth.currentUser)
    }
    
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
            setLoading(false)
            localStorage.setItem("access_token",currentUser?.accessToken)
        });
        return ()=>{
            unsubscribe();
        }
    },[]);
    
    
    
    const contextValue = {user,createUser,signIn,logOut,updateUser,signInGoogle,loading,forgetPassword,getIdToken,signInFb,verifyEmail};
    
    

  return (
    <userContext.Provider value={contextValue}>
        {children}
    </userContext.Provider>
  );
}

export default AuthContext;
