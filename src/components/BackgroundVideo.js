import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from "../custom-hooks/useMovieTrailer"


function BackgroundVideo({movieId}) {


const trailerVideo = useSelector((store) => store.movies.trailerVideo);

//fetch trailer video
useMovieTrailer({movieId});

  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video bg-gradient-to-r from-black'
      src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&&multe=1&mute=1"} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
      </iframe>

    </div>
  )
}

export default BackgroundVideo;