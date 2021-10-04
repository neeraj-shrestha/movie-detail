import React from "react";
import { useParams,Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetails, getSimilarMovies} from "../store/slices/movieSlice";
//import { getMovieVideos } from "../store/slices/movieSlice";
import "./detail.css"
const MovieDetails = () => {
  const {similarMovies,movieDetails}  = useSelector((state) => state.movie);
  const { id } = useParams();
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(getMovieDetails(id)) 
    dispatch(getSimilarMovies(id));
   
  },[dispatch,id]);

  
  let similarMovieDisplay=[]
  if(similarMovies.length>6){
    for(var i=0;i<6;i++){
        similarMovieDisplay[i]=similarMovies[i];
    }
  }else{
    similarMovieDisplay=similarMovies
  }
  
  
  return (<div>
    <div id="detailMovie" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${ movieDetails.backdrop_path})`,
        backgroundSize: "cover",backgroundRepeat: "no-repeat",
        height: "500px",}}>
      <div style={{width: "100%", paddingTop: "100px",height: "460px",
          paddingLeft: "40px",display: "flex",paddingRight: "40px",}}>
        <div className="product" style={{ width: "260px" }}>
          <img alt="" src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} />
        </div>
        <div className="titlefloat" style={{
            color: "white",
            background: "linear-gradient(rgb(0 0 0 / 95%),rgb(172 23 23 / 0%))",}}>
          <h1>{movieDetails.title}</h1>
          <label>Release date: {movieDetails.release_date}</label><br></br>
          <label>Status: {movieDetails.status}</label><br></br>
          <label>Runtime: {movieDetails.runtime}minutes</label><br></br>
          {/* <label>Genre:{movieDetails.map((gen)=>{
            return gen.genres
          })}</label> */}
          {movieDetails.genres&& <label id="genreClick">Genre: {movieDetails.genres.map((gen)=>{
            return <span key={gen.id} >
              <Link to={`/genre/${gen.id}`} style={{textDecoration:"none"}}>{gen.name} </Link>
              </span>
          })}</label> }
          <p>{movieDetails.overview}</p>
        </div>
      </div>
    </div>
    <div>
    <div id="main_container" style={{}}>
    <h1>Similar Movies</h1>
    <div id="product_container">
        
      {similarMovieDisplay.map((movie) => {
        let path="https://image.tmdb.org/t/p/w500"+movie.poster_path;
        let linkto="/movieDetails/"+movie.id
        return (
          <div  key={movie.id} id="card" ><Link to={linkto}>
            <div className="product">
              <img alt="" src={path}/>
            </div>
            <div className="titlefloat">{movie.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
    </div>
  </div>
  </div>
  );
};

export default MovieDetails;
