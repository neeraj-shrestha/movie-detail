import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import React from "react";
import Movies from "./pages/movies";
import {
  getGenreOfMovies,
  getMostPopularMoviesApi,
} from "./store/slices/movieSlice";
import MovieDetails from "./pages/movieDetails";
import TvSeries from "./pages/tvSeries";
import Genre from "./pages/genre";
import SeriesDetails from "./pages/seriesDetails";
import { getMostPopularTvSeriesApi } from "./store/slices/tvSeriesSlice";

const App = () => {
  const { genreMovies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getMostPopularMoviesApi());
    dispatch(getMostPopularTvSeriesApi());
    dispatch(getGenreOfMovies());
  }, [dispatch]);

  return (
    <Router>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img alt="" src="../images/mymov.png" />
          </Link>
        </div>
        <div style={{ display: "block", float: "left" }}>
          <ul>
            <li>
              <Link to="/home">Homes</Link>
            </li>
            <li className="genre-list">
              <Link to="/genre">Genre</Link>
              <ul className="genre">
                {genreMovies.map((genre) => {
                  return (
                    <li key={genre.id}>
                      <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/tv-series">Tv-Series</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/genre/:id">
          <Genre />
        </Route>
        <Route path="/tv-series">
          <TvSeries />
        </Route>
        <Route path="/movieDetails/:id">
          <MovieDetails />
        </Route>
        <Route path="/seriesDetails/:id">
          <SeriesDetails />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
