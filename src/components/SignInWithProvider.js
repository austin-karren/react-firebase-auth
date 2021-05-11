import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const SignInWithProvider = () => {
   const context = useContext(AuthContext);

   return (
      <div>
         <div style={{margin: '2rem'}}/>

         <div className='continueWithProvider'>
         <button onClick={() => context.signInWithGoogle()}>
            Continue with Google
         </button>
         <button onClick={() => context.signInWithFacebook()}>
            Continue with Facebook
         </button>
         </div>
      </div>
   )
}

export default SignInWithProvider;