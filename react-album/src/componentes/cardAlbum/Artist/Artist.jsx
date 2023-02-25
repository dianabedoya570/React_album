import React from "react";
import "./artist.scss";

const Artist = ({artist, typeArtist}) => { 



  return (
    
      <div className="artist">
      <h2 className="artist__name">{artist}</h2> 
      <span className="artist__typeArtis">{ typeArtist}</span>  
      </div>
      


  )

}
export default Artist;