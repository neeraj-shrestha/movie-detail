import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const sliceName = "tvSeries";
const popularTvSeries =
  "https://api.themoviedb.org/3/tv/popular?api_key=68ba12927b8477ed02ce38b248c90973&language=en-US&page=1";

export const getMostPopularTvSeriesApi = createAsyncThunk(
  `${sliceName}/getMostPopularTvSeries`,
  async (payload, thunkAPI) => {
    const response = await axios({
      method: "GET",
      url: popularTvSeries,
    });
console.log(response)
   return response.data.results;
  }
);

export const getSimilarTvSeries = createAsyncThunk(
  `${sliceName}/getSimilarMovies`,
  async (payload, thunkAPI) => {
    console.log("kdkd")
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${payload}/similar?api_key=68ba12927b8477ed02ce38b248c90973&language=en-US&page=1`)
    console.log(response.data.results)
    return response.data.results;
    
  }
);
export const tvSeriesSlice = createSlice({
  name: sliceName,
  initialState: {
    series: [],
    tvSeries:[],
    similarTvSeries:[]

  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getMostPopularTvSeriesApi.fulfilled, (state, action) => {
      let data = action.payload.map((series) => {
        var path = series.poster_path;
        return {
          ...series,
          image: "https://image.tmdb.org/t/p/w500" + path
        };
      });
      console.log(data);
      state.tvSeries = data;
    })
    builder.addCase(getSimilarTvSeries.fulfilled,(state,action)=>{
      state.similarTvSeries=action.payload
      state.tvSeries=[...state.tvSeries, ...state.similarTvSeries]
      console.log(state.tvSeries)
    });
  },
});

//export const {} = tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;
