import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '@providers/AuthProvider';

const SignUp = () => {
   const context = useContext(AuthContext);

   const [email, setEmail] = useState(''),
   [password, setPassword] = useState(''),

   const handleSignUp = (event, email, password) => {
      context.createAccountWithEmailAndPassword(event, email, password);
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
      
         <div className='SignUp'>
            <h1>Sign up</h1>
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
            <button onClick={e => handleSignUp(e, email, password)}>
               Sign up
            </button>
            <p>
               Already have an account?{' '}
               <Link to='/'>
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

export default SignUp;