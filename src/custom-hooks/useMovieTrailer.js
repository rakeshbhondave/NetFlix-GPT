import {addTrailerVideo} from "../utils/movieSlice";
import { API_OPTIONS } from '../utils/constants';
import  { useEffect } from 'react'
import { useDispatch } from "react-redux";

const useMovieTrailer = ({movieId}) =>{

    const dispatch = useDispatch();
    const trailer = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US" , API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
    
        const trailers = json.results.filter((e) => e.type ==="Trailer");
        const trailer = trailers.length !==0 ? trailers[0] : json.results[0];
        // console.log(trailer.key);
        dispatch(addTrailerVideo(trailer));
    }
    
    useEffect(()=> {
        trailer();
    }, []);


}

export default useMovieTrailer;