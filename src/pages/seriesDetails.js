import React from "react";
import {useParams,Link} from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { getSimilarTvSeries,getTvSeriesDetails } from "../store/slices/tvSeriesSlice";

const SeriesDetails=()=>{
    const {similarTvSeries,seriesDetails} = useSelector((state) => state.tvSeries);
  
    
      const {id} = useParams();
      const dispatch = useDispatch();
      React.useEffect(() => {
        dispatch(getTvSeriesDetails(id));
        dispatch(getSimilarTvSeries(id));
      },[dispatch,id]);
    
      let similarTvSeriesDisplay=[]
        if(similarTvSeries.length>6){
          for(var i=0;i<6;i++){
              similarTvSeriesDisplay[i]=similarTvSeries[i];
          }
        }else{
          similarTvSeriesDisplay=similarTvSeries
        }
      
      return <div><div id="detailMovie" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${seriesDetails.poster_path})`,backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',height:'500px'}}>
           <div  style={{width:"100%",paddingTop:"100px",height:"460px",paddingLeft:"40px",display:"flex",paddingRight:"40px"}}>
              <div className="product"style={{width:"260px"}}>
                <img alt="" src={`https://image.tmdb.org/t/p/w500${seriesDetails.poster_path}`}/>
              </div>
              <div className="titlefloat"  style={{color: "white", background: "linear-gradient(rgb(0 0 0 / 95%),rgb(172 23 23 / 0%))"}}>
                <h1>{seriesDetails.name}</h1>
                <label>First air date: {seriesDetails.first_air_date}</label>
                <p>{seriesDetails.overview}</p>
                </div>
            </div>
      </div>
      <div>
    <div id="main_container" style={{}}>
    <h1>Similar Tv Series</h1>
    <div id="product_container">
        
      {similarTvSeriesDisplay.map((series) => {
        let path="https://image.tmdb.org/t/p/w500"+series.poster_path;
        let linkto="/seriesDetails/"+series.id
        return (
          <div  key={series.id} id="card" ><Link to={linkto}>
            <div className="product">
              <img alt="" src={path}/>
            </div>
            <div className="titlefloat">{series.name}</div>
            </Link>
          </div>
        );
      })}
    </div>
    </div>
  </div>
      </div>

}
export default SeriesDetails;