import PopularMovies from "../components/HomePage/PopularMovies";
import SliderImage from "../components/HomePage/Slider";
import React from "react";
import { useSelector } from "react-redux";

import PopularTvSeries from "../components/HomePage/PopularTvSeries";



const Home = () => {
  const { apiMovies } = useSelector((state) => state.movie);
  const { tvSeries } = useSelector((state) => state.tvSeries);
 
  let data = [{}];
  if (apiMovies.length > 12) {
    for (var i = 0; i < 12; i++) {
      data[i] = apiMovies[i];
    }
  }else{
      data=apiMovies;
  }
  let series = [{}];
  if (tvSeries.length > 12) {
    for (var j = 0; j < 12; j++) {
      series[j] = tvSeries[j];
    }
    console.log(series)
  }else{
      series=tvSeries;
  }
  return (
    <div>
      <SliderImage />
      <PopularMovies movies={data} title="Popular" movienum = "8"/>
      <PopularTvSeries tvSeries={series} title="Popular"/>
    </div>
  );
};

export default Home;
