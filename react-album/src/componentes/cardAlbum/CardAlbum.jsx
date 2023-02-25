import React from "react";
import { Album } from "./Album";
import { Artist } from "./Artist";

import "./card_album.scss";

const CardAlbum = ({image, title,typeArtist, artistname,year, gender}) => { 



  return (
    <div className="card" >
      <div className="card__img">
        <img src={image} alt={title} />
      </div>      
      <div className="card__Info">
      <Artist  
          artist={artistname}
          typeArtist={typeArtist}
          
        ></Artist> 
        <Album
        title={title}
        gender={gender}
        year={year}
        ></Album>
        </div>
        <div className="card__heard">
        <img src="https://cdn.icon-icons.com/icons2/2716/PNG/512/heart_icon_173090.png" alt="corazon" ></img>
        </div>
       
      
      
  </div>

  )

}
export default CardAlbum;