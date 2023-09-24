import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducers from "./movieSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducers,
    },
});

export default appStore;
