import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GPTMoviesSujjestions = () => {
  const movies = useSelector((store) => store.gpt.TMDBMovies);
  if(!movies) return null;
  console.log("searched movie", movies[0]);
  return (
    <div className='p-2 md:p-4 m-2 md:m-4 bg-black text-white'>
      <MovieList title={movies.title} movies={movies}/>
    </div>
  )
}

export default GPTMoviesSujjestions