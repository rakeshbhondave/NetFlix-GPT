import React, {useEffect, useState} from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {addUser , removeUser} from "../utils/userSlice";
import SignOut from "../utils/sign-out.png";
import Logo from "../utils/Netflix_Logo_PMS.png";
import { toggleGptSearchView } from '../utils/gptSlice';


const Header = () => {
   
  const navigate = useNavigate();
  const user = useSelector((store => store.user));
  const dispatch = useDispatch();

  const [searchGPT, setSearchGPT] = useState(false);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
  // Sign-out successful.
     }).catch((error) => {

      navigate("/error");
  // An error happened.
    });
  }

  const toggleEvent = () => {
     dispatch(toggleGptSearchView());
     setSearchGPT(!searchGPT);
  }
   
  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
   if (user) {
     // User is signed in, see docs for a list of available properties
     // https://firebase.google.com/docs/reference/js/auth.user
     const {uid,email,displayName, photoURL} = auth.currentUser;
     dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL: photoURL}));
     navigate("/browse");
   } else {
     // User is signed out
     dispatch(removeUser());
     navigate("/");
   }
  });

  //Unsubscribe when component unmounts
  return () => unsubscribe();
  },[])
  

  return (
    <div className='absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    <div className='' > 
        <img className='w-44'
          src={Logo}
          alt='header-logo'
        />
    </div>
    { user && <div className='py-5 px-5 text-white flex' >
    <button className='flex font-bold p-2 px-8 mt-0 mr-16 bg-purple-600 hover:bg-purple-900' onClick={toggleEvent}>{!searchGPT ? "NetflixGPT" : "Browse"} </button>
        
    
     <span className='flex'> {"Hello..  " +user.displayName} 
    <button className='flex' onClick={handleSignOut}>
        <img className='w-40'
          src= {SignOut}
          alt='sign-out'
        />
    </button></span>
    </div>
}
    </div>
  )
}

export default Header