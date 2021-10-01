import React from "react";
//import { useSelector } from "react-redux";
import { Link} from "react-router-dom"

const PopularTvSeries = ({tvSeries,style,title}) => {
    
  return (<div id="main_container" style={style}>
      <h1>{title} Tv Series</h1>
    <div id="product_container">
        
      {tvSeries.map((series) => {
        
        let linkto="/seriesDetails/"+series.id
        return (
          <div  key={series.id} id="card" ><Link to={linkto}>
            <div className="product">
              <img alt="" src={series.image}/>
            </div>
            <div className="titlefloat">{series.name}</div>
            </Link>
          </div>
        );
      })}
    </div>
    </div>
  );
};
export default PopularTvSeries;
