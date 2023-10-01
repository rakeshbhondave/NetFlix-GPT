import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMoviesSujjestions from './GPTMoviesSujjestions';
import {BACKGROUND_IMAGE_URL} from '../utils/constants';

function GPTSearchPage() {
  return (
    <>
    <div className='absolute -z-20'>
    <img className='h-screen object-cover md:w-screen'
       src={BACKGROUND_IMAGE_URL}
       alt='background image logo'
    />
 </div>
        <GPTSearchBar/><br/><br/>
        <GPTMoviesSujjestions/>
    </>
  )
}

export default GPTSearchPage;