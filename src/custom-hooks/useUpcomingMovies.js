import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addUpcomingMovies} from "../utils/movieSlice"
import { useEffect } from 'react'

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
   
  const getuseUpcomingMovies = async () => {
     const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" , API_OPTIONS);
     const json = await data.json();
    //  console.log("data", json.results);
     dispatch(addUpcomingMovies(json.results));
  }

  useEffect(() => {
    getuseUpcomingMovies();
  }, [])
}

export default useUpcomingMovies;