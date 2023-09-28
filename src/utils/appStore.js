import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducers from "./movieSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducers,
        gpt: gptReducer,
        config: configReducer,
    },
});

export default appStore;
