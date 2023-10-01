import React from 'react'
import { lang } from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMovieResult } from '../utils/gptSlice';

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

     const searchMovieTMDB = async () => {
      const movieName = searchText.current.value;
      // console.log("movieName", movieName);
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movieName +"&include_adult=false&language=en-US&page=1" , API_OPTIONS);
      const json = await data.json();
      //  console.log(json.results);
      dispatch(addGPTMovieResult(json.results));
      return json.results;
     };

  return (
    <div className='pt-[8%] flex justify-center' onSubmit={(e) => e.preventDefault()}>
        <form className='w-full md:w-1/2  bg-black grid grid-cols-12 '>
            <input type='text' ref={searchText} placeholder={lang[langKey].gptSearchHolder} className="font-bold col-span-9 m-4 p-4"></input> 
            <button  onClick={searchMovieTMDB} className='bg-red-700 p-1 md:p-4 m-3 md:m-4 col-span-3 text-white font-bold text-xl'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar;