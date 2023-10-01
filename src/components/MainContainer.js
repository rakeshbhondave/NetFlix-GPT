import React from 'react'
import BackgroundVideo from './BackgroundVideo';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

function MainContainer() {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0];
    // console.log(mainMovie)
    // console.log(mainMovie.overview)

    const {id, title, overview} = mainMovie

  return (
    <div>
        <div className='md:p-0'>
        <VideoTitle title={title} overview={overview}/>
        <BackgroundVideo movieId={id} />
        </div>
    </div>
  )
}

export default MainContainer