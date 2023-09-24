import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addTrendingMovies} from "../utils/movieSlice"
import { useEffect } from 'react'

const useTrendingMovies = () => {
    const dispatch = useDispatch();
   
  const getuseTrendingMovies = async () => {
     const data = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US" , API_OPTIONS);
     const json = await data.json();
    //  console.log("data", json.results);
     dispatch(addTrendingMovies(json.results));
  }

  useEffect(() => {
    getuseTrendingMovies();
  }, [])
}

export default useTrendingMovies;