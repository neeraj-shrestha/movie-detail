import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const sliceName = "movie";
const popularMovies =
  "https://api.themoviedb.org/3/movie?api_key=68ba12927b8477ed02ce38b248c90973&language=en-US";
const movieGenre="https://api.themoviedb.org/3/genre/movie/list?api_key=68ba12927b8477ed02ce38b248c90973&language=en-US"

//const videos="https://api.themoviedb.org/3/movie/550988/videos?api_key=68ba12927b8477ed02ce38b248c90973&language=en-US"

export const getMostPopularMoviesApi = createAsyncThunk(
  `${sliceName}/getMostPopularMovies`,
  async (payload, thunkAPI) => {
    const response = await axios({
      method: "GET",
      url: popularMovies,
    });

    return response.data.results;
  }
);


export const getGenreOfMovies = createAsyncThunk(
  `${sliceName}/getGenreOfMovies`,
  async (payload, thunkAPI) => {
    const response = await axios({
      method: "GET",
      url: movieGenre,
    });
    return response.data.genres;
  }
);

export const getSimilarMovies = createAsyncThunk(
  `${sliceName}/getSimilarMovies`,
  async (payload, thunkAPI) => {
    console.log("kdkd")
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${payload}/similar?api_key=68ba12927b8477ed02ce38b248c90973&language=en-US&page=1`)
    console.log(response.data.results)
    return response.data.results;
    
  }
);
export const getMovieDetails= createAsyncThunk(
  `${sliceName}/getMovieDetails`,
  async (payload, thunkAPI) => {
    console.log("kdkd")
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${payload}?api_key=68ba12927b8477ed02ce38b248c90973&language=en-US`)
    console.log(response.data)
    return response.data;
    
  }
);

export const movieSlice = createSlice({
  name: sliceName,
  initialState: {
   
    apiMovies: [],
    movieDetails:[],
    genreMovies:[],
    similarMovies:[]
  },
  reducers: {
    addImages: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    //for popular movies
    builder.addCase(getMostPopularMoviesApi.fulfilled, (state, action) => {
      let data = action.payload.map((movie) => {
        var path = movie.backdrop_path;
        return {
          ...movie,
          image: "https://image.tmdb.org/t/p/w500" + path,
          caption: movie.original_title,
        };
      });
      console.log(data);
      state.apiMovies = data;
    })
    //for genre of movies
    builder.addCase(getGenreOfMovies.fulfilled,(state,action)=>{
      state.genreMovies=action.payload

    })
    //for similarmovies
    builder.addCase(getSimilarMovies.fulfilled,(state,action)=>{
      state.similarMovies=action.payload
      //state.apiMovies=[...state.apiMovies, ...state.similarMovies]
      console.log(state.apiMovies)
    })
    //for movies details
    builder.addCase(getMovieDetails.fulfilled,(state,action)=>{
      state.movieDetails=action.payload
    })
   
  },
});

export const { addImages } = movieSlice.actions;

export default movieSlice.reducer;
