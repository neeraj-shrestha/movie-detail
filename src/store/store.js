import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices/movieSlice";
import tvSeriesSlice from "./slices/tvSeriesSlice";


export default configureStore({
    reducer:{
        movie: movieSlice,
        tvSeries: tvSeriesSlice
    },
})