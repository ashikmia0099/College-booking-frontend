"use client"

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";


const { createContext, useState, useEffect, useContext } = require("react")


// const provider = new GoogleAuthProvider();

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {


    // users state

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // home page state

    const [second_banner_image, setSecBannerImage] = useState([])

    // college us page  state
    const [college_Data, setcollege_Data] = useState([])


    // Admission college page state

    const [admissionData, set_admissionData] = useState([]);


    // contact us data

    const [contactData, setContactData] = useState([]);


    // shared state

    const [social_link, setSocial_link] = useState([])


     const SignInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)

    };



    // register with email and password

    const RegisterWithEmailPassword = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password )
    };


    // signIN with email and password

    const SignInWithEmailPassword = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Sign Out

    const LogOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    // update userprofile
    const updateUserProfile = (updatedData) =>{
        
        return updateProfile(auth.currentUser, updatedData);

    }





    const userInfo = {


        // users state

        user, setUser,


        // fire base state

        SignInWithGoogle,
        RegisterWithEmailPassword,
        SignInWithEmailPassword,
        LogOut,
        updateUserProfile,



        // home page state




        // college us page  state
        college_Data, setcollege_Data,



        // admission page and update state
        admissionData, set_admissionData,


        // contact data
        contactData, setContactData,

        // shared data

        social_link, setSocial_link




    }




    // useEffect(() => {

    //     const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
    //         if (currentuser && currentuser.emailVerified) {
    //             setUsers(currentuser);

    //         } else {
    //             setUsers(null);
    //         }
    //         setLoading(false)
    //     })
    //     return () => unsubscribe()


    // }, [])

 // On auth observer


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
          setUser(currentUser);
        //   console.log('state capture', currentUser)
          
          setLoading(false);
        })
    
        return () =>{
          unsubscribe();
        }
    
      } ,[])









    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)