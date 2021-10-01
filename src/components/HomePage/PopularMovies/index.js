import React from "react";
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./popularMovie.css";
const PopularMovies = ({ movies, style, title }) => {
  // const history = useHistory()

  // const handleclick=(id)=>{
  //   history.push('/movieDetails/'+id)
  // }

  return (
    <div id="main_container" style={style}>
      <h1>{title} Movies</h1>
      <div id="product_container">
        {movies.map((movie) => {
          let path = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
          let linkto = "/movieDetails/" + movie.id;
          return (
            <div key={movie.id} id="card">
              <Link to={linkto}>
                <div className="product">
                  <img alt="" src={path} />
                </div>
                <div className="titlefloat">{movie.title}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PopularMovies;
