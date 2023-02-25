import React from "react";
import "./album.scss";

const Album = ({title,year,gender}) => { 



  return (
  
     
      <div className="album">
      <h3 className="album__title">{title}</h3>
      <span className="album__year">({year})</span>  
      <br></br>
      <button className="album__gender">{gender }</button>
      </div>
      


  )

}
export default Album;