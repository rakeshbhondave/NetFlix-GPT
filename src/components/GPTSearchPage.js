import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMoviesSujjestions from './GPTMoviesSujjestions';
import {BACKGROUND_IMAGE_URL} from '../utils/constants';

function GPTSearchPage() {
  return (
    <div>
        <div className='absolute -z-20'>
         <img 
            src={BACKGROUND_IMAGE_URL}
            alt='background image logo'
         />
      </div>
        <GPTSearchBar/>
        <GPTMoviesSujjestions/>
    </div>
  )
}

export default GPTSearchPage;