import React from "react";
import { useSelector} from "react-redux";
import PopularMovies from "../components/HomePage/PopularMovies";
import {useParams} from 'react-router-dom';
import PopularTvSeries from "../components/HomePage/PopularTvSeries";

const Genre=()=>{
    const {apiMovies,genreMovies} = useSelector(state => state.movie)
    const {tvSeries} = useSelector(state => state.tvSeries)
    const {id} = useParams();
    console.log(id)
    const movise=apiMovies.filter((movie)=>{
        return movie.genre_ids.filter((ids)=>{
            return ids.toString()===id}).toString()===id
    })
    const series=tvSeries.filter((seriess)=>{
        return seriess.genre_ids.filter((ids)=>{
            return ids.toString()===id}).toString()===id
    })
    console.log(genreMovies)
    const genreTitle=genreMovies.filter((genre)=> {
        return genre.id.toString()===id})
  
    console.log(genreTitle)
    return <div>
        <PopularMovies movies={movise}  title= {genreTitle[0].name} style={{paddingTop:"80px"}}/>
        <PopularTvSeries tvSeries={series} title= {genreTitle[0].name} style={{paddingTop:"80px"}}/>
    </div>
}
export default Genre