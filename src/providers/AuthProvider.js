import React, { useState, useEffect, createContext } from 'react';
import Axios from 'axios';
import { setAuthHeader, deleteAuthHeader } from '../utils/headers';
import {
   auth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   sendPasswordResetEmail,
   signInWithGoogle,
   signInWithFacebook
} from '../utils/firebase';
import axios from 'axios';

export const AuthContext = createContext({
   user: null,
   signOut: () => {},
   signInWithGoogle: () => {},
   signInWithFacebook: () => {},
   createAccountWithEmailAndPassword: () => {},
   signAccountInWithEmailAndPassword: () => {},
   sendPasswordResetEmail: () => {},
});

const AuthProvider = ({ children }) => {
   const [provider, setProvider] = useState({ user: null });

   const signOut = () => {
      auth.signOut();
      setProvider({ user: null });
      deleteAuthHeader();
   }

   const createAccountWithEmailAndPassword = async (e, email, password, otherAccountData) => {
      e.preventDefault();
      createUserWithEmailAndPassword(email, password)
      .then((result) => {
         const user = result.user;

         // normally you would set user with the response data from your server
         setProvider({ user });

         setAuthHeader();

         // post to your server here with user data

         /*
         Axios.post('api/your-server', {
            data: user
         }).then().catch();
         */
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         switch(errorCode) {
            case 'auth/weak-password':
               alert('Please use a stronger password.')
            break;
            case 'auth/invalid-email':
               alert('Please use a valid email.')
            break;
            case 'auth/email-already-in-use':
               alert('This email is already in use.')
            break;
            default:
               alert(errorMessage);
         }
      })
   }
   
   const signAccountInWithEmailAndPassword = async (e, email, password) => {
      e.preventDefault();
      signInWithEmailAndPassword(email, password)
      .then((result) => {
         const user = result.user;

         // normally you would set user with the response data from your server
         setProvider({ user });

         setAuthHeader();

         // post to your server here with auth token

         // Axios.post('api/your-server', {}).then().catch();

      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         switch(errorCode) {
            case 'auth/wrong-password':
               alert('Password was incorrect.')
            break;
            case 'auth/invalid-email':
               alert('Please use a valid email.')
            break;
            case 'auth/user-not-found':
               alert('There was no user found with this email.')
            break;
            default:
               alert(errorMessage);
         }
      })
   }

   const googleSignInRedirectResult = async() => {
      return auth.getRedirectResult()
      .then(result => {
         if(result.credential) {
            const { profile, isNewUser } = result.additionalUserInfo;
            // post to your server here with profile information

            /*
            Axios.post('api/your-server', {
               profile: profile.data
            }).then().catch();
            */
            return true;
         }
         return false;
      })
      .catch(error => {
         const { code, status, message, credential } = error;
         console.error(code, status, message, credential);
      });
   }

   useEffect(() => {
      // onAuthStateChanged() is only necessary for signInWithRedirect because signInWithPopup can be used with promises.
      auth.onAuthStateChanged(async authUser => {
         if(authUser) {
            const redirectResult = await googleSignInRedirectResult();

            const user = authUser;
            // normally you would set user with the response data from your server
            setProvider({ user });

            if(!redirectResult) {
               await setAuthHeader();
               
               // post to your server with auth header

               // Axios.post('api/your-server', {}).then().catch();
               // retrieve data from your server about your user
            }
         } else {
            signOut();
         }
      })
   },[])

   return(
      <AuthContext.Provider value={{
         user: provider.user,
         signOut,
         signInWithGoogle,
         signInWithFacebook,
         createAccountWithEmailAndPassword,
         signAccountInWithEmailAndPassword,
         sendPasswordResetEmail,
      }} >
         { children }
      </AuthContext.Provider>
   )
}

export default AuthProvider;