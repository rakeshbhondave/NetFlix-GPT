import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

function SecondaryContainer() {

  const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black'>
      <div className='-mt-96 relative z-20 pl-12'>
      <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
  
      <MovieList title={"Tending Movies"} movies={movies.trendingMovies}/>

      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>

      <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;