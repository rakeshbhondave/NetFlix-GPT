import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
      showGptSearch : false,
      TMDBMovies:null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGPTMovieResult:(state,actions) =>{
            state.TMDBMovies = actions.payload;
        }
    }
})

export const {toggleGptSearchView , addGPTMovieResult} = gptSlice.actions;

export default gptSlice.reducer;