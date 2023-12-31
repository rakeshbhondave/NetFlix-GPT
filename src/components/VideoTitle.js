import React from 'react'

function VideoTitle({title, overview}) {
  return (
    <div className='absolute md:pt-0 px-10 md:px-32 w-screen aspect-video bg-gradient-to-r from-black'>
        <div className='my-40 md:my-80'>
        <p className='text-white text-2xl md:text-4xl font-bold hover:text-red-500'>{title}</p>
        <p className='text-white w-[100%] md:w-[35%] mb-6 mt-3 text-1xl  hover:text-red-500'>{overview}</p>
        <button className='bg-white text-black font-bold w-26 md:w-36 p-2 md:p-3 my-3 opacity-100 rounded-lg hover:opacity-70'>▶️ Play</button>
        <button className='bg-gray-700 text-white w-26 md:w-36 p-2 md:p-3 my-3 mx-3 opacity-100 rounded-lg hover:opacity-80'> ♾️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;