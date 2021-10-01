import React from "react";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom"
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./slider.css"
const SliderImage = () => {
  const {  apiMovies } = useSelector((state) => state.movie);
  console.log(apiMovies)
  
  
  return (
    <div style={{ textAlign: "center" }}>
      <Carousel>
      {apiMovies.map((movie)=>{
      return <Carousel.Item key={movie.id} style={{backgroundImage:`url(${apiMovies.image})`,backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',height:'500px'}}><Link to={`/movieDetails/${movie.id}`}>
          <img
            className="d-block w-100"
            src={movie.image}
            alt="First slide" style={{width:"100%"}}
          />
          <Carousel.Caption>
            <h3>{movie.caption}</h3>
            <p>{movie.overview}</p>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
     })} 
     </Carousel>
    </div>
  );
};
export default SliderImage;
