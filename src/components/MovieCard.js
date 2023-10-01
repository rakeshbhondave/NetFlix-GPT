import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

function MovieCard({posterpath}) {
// console.log(posterpath)
if(!posterpath) return null;
  return (
    <div className='w-52 pr-4'>
      <img src={IMG_CDN_URL + posterpath}
        alt='movie-card'
        />
    </div>
  )
}

export default MovieCard;