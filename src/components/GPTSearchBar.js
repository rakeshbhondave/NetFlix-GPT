import React from 'react'
import { lang } from '../utils/languageConstants';
import { useSelector } from 'react-redux';

function GPTSearchBar() {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='w-1/2  bg-black grid grid-cols-12 '>
            <input type='text' placeholder={lang[langKey].gptSearchHolder} className='text-white font-bold col-span-9 m-4 p-4'></input> 
            <button className='bg-red-700 p-4 m-4 col-span-3 text-white font-bold text-xl'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar;