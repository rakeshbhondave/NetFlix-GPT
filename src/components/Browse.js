import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../custom-hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../custom-hooks/usePopularMovies';
import useTrendingMovies from '../custom-hooks/useTrendingMovies';
import useUpcomingMovies from '../custom-hooks/useUpcomingMovies';


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse