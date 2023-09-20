import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
 const [isSignInForm, setIsSignInForm] = useState(true);

 const changeToSignUpForm = () => {
     setIsSignInForm(!isSignInForm);
} 

  return (
    <div>
        <Header/>
      <div className='absolute'>
         <img 
            src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg'
            alt='background image logo'
         />
      </div>
      <form className='absolute w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black bg-opacity-80 text-white'>
        <h1 className=' font-bold text-3xl'> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
        <input type='text' placeholder='Full Name' className='p-4 my-4 w-full rounded-lg bg-gray-700' />)}
        <input type='text' placeholder='Email address' className='p-4 my-4 w-full rounded-lg bg-gray-700' />
        <input type='password' placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-gray-700' />
        <button className='p-3 my-3 bg-red-700 w-full rounded-lg'> {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='p-4 my-4 text-white cursor-pointer' onClick={changeToSignUpForm}> {isSignInForm ? "New to Netflix ? Sign Up now" : "Allready Registered. Please Sign In"}</p>
      </form>
    </div>   
  )
}

export default Login;
