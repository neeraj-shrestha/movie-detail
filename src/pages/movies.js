import React from "react";
import { useSelector} from "react-redux";
import PopularMovies from "../components/HomePage/PopularMovies";


const Movies=()=>{
    const {apiMovies} = useSelector(state => state.movie)
    return <div>
        <PopularMovies movies={apiMovies} title ="Popular" style={{paddingTop:"80px"}}/>
    </div>
}

export default Movies;