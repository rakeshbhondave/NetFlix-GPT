import React, { useRef, useState } from 'react'
import Header from './Header';
import { validate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { PHOTO_URL } from '../utils/constants';
import {BACKGROUND_IMAGE_URL} from '../utils/constants';

const Login = () => {
 const [isSignInForm, setIsSignInForm] = useState(true);
 const [validateMessage , setValidateMessage] = useState(null);

 const email = useRef(null);
 const password = useRef(null);
 const name = useRef(null);
 const dispatch = useDispatch();

const handleSubmitClick = () => {

   const validateMessage =  validate(email.current.value, password.current.value);
   setValidateMessage(validateMessage)
   if(validateMessage) return;

   //Sign In and Sign Up logic 
   if(!isSignInForm){
    //Sign Up logic 
    
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: PHOTO_URL
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName, photoURL} = user;
      dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL: photoURL}));
    }).catch((error) => {
      // An error occurred
      setValidateMessage(validateMessage);
    });
    
    // console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setValidateMessage(errorCode+ "-"+ errorMessage);
    // ..
  });
     
   }else{
    //Sign In logic 

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setValidateMessage(errorCode+" "+errorMessage);
  });

   }



}

 const changeToSignUpForm = () => {
     setIsSignInForm(!isSignInForm);
} 

  return (
    <div>
        <Header />
      <div className='absolute'>
         <img 
            src={BACKGROUND_IMAGE_URL}
            alt='background image logo'
         />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black bg-opacity-80 text-white'>
        <h1 className=' font-bold text-3xl'> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
        <input 
        ref={name}
        type='text' placeholder='Full Name' className='p-4 my-4 w-full rounded-lg bg-gray-700' />)}
        <input
        ref = {email}
        type='text' placeholder='Email address' className='p-4 my-4 w-full rounded-lg bg-gray-700' />
        <input
        ref={password}
        type='password' placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-gray-700' />
        
        <p className='text-red-600 font-bold'>{validateMessage}</p>
        <button className='p-3 my-3 bg-red-700 w-full rounded-lg' onClick={handleSubmitClick}> {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='p-4 my-4 text-white cursor-pointer' onClick={changeToSignUpForm}> {isSignInForm ? "New to Netflix ? Sign Up now" : "Allready Registered. Please Sign In"}</p>
      </form>
    </div>   
  )
}

export default Login;
