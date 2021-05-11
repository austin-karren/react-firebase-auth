import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '@providers/AuthProvider';

const SignIn = (props) => {
   const context = useContext(AuthContext);

   const [email, setEmail] = useState(''),
   [password, setPassword] = useState(''),

   const handleSignIn = (event, email, password) => {
      context.signAccountInWithEmailAndPassword(event, email, password);
   }

   const onChangeInputs = e => {
      switch(e.target.name) {
         case 'userEmail':
            setEmail(e.target.value);
            break;
         case 'userPassword':
            setPassword(e.target.value);
            break;
         default:
            setEmail('') && setPassword('');
      }
   }

   return(
      <div>
         <div style={{margin: '2rem'}}/>
      
         <div className='signIn'>
            <h1>Sign in</h1>
            <label>
               email
            </label>
            <input 
               type='email'
               name='userEmail'
               value={email}
               placeholder='example@email.com'
               id={userEmail}
               onChange={e => onChangeInputs(e)}
            />
            <label>
               password
            </label>
            <input
               type='password'
               name='userPassword'
               value={password}
               placeholder=''
               id='userPassword'
               onChange={e => onChangeInputs(e)}
            />
            <button onClick={e => handleSignIn(e, email, password)}>
               Sign in
            </button>
            <p>
               Don't have an account?{' '}
               <Link to='/sign-up'>
                  Sign up here
               </Link>{' '}
               <br />{' '}
               <Link to='/password-reset'>
                  Forgot Password?
               </Link>
            </p>
         </div>
      </div>
   )
}

export default SignIn;