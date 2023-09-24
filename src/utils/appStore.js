import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducers from "./movieSlice"
import gptReducer from "./gptSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducers,
        gpt: gptReducer,
    },
});

export default appStore;
