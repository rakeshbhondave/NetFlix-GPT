import React from 'react'
import MovieCard from './MovieCard';

function MovieList({title, movies}) {
    if(!movies) return;
  return (
    <div className='px-6'>
       <h1 className='text-3xl py-4 text-white font-bold'>{title}</h1>
        <div className='flex overflow-x-auto'>
            <div className='flex'>
            {movies?.map((movie) => (<MovieCard key={movie.id} posterpath={movie.poster_path} />))}
            </div>
        </div>
    </div>
  )
}

export default MovieList;