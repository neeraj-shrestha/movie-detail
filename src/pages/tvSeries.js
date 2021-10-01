import React from "react";
import { useSelector} from "react-redux";
//import PopularMovies from "../components/HomePage/PopularMovies";
import PopularTvSeries from "../components/HomePage/PopularTvSeries";


const TvSeries=()=>{
    const {tvSeries} = useSelector(state => state.tvSeries)
    return <div>
        <PopularTvSeries tvSeries={tvSeries}  title="Popular"style={{paddingTop:"80px"}}/>
    </div>
}

export default TvSeries;