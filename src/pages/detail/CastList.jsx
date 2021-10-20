import React, { useState, useEffect, useRef } from "react";
import tmdbApi from "../../api/tmdb";
import { useParams } from "react-router";
import api from "../../api/config";

const CastList = (props) => {
     const {category} = useParams();
     const [castList,setCastList] = useState([])
     useEffect(() => {
          const getCastList = async () => {
               let response = await tmdbApi.credits(category,props.id);
               setCastList(response.cast.slice(0,5));
          }
          getCastList();
     },[category,props.id])
     return (
          <div className="casts">
              {
                castList.map((item,i) => (
                     <div className="casts__item" key={i}>
                          <div className="casts__item__img"
                          style={{ backgroundImage: `url(${api.w500Image(item.profile_path)})`}}>
                          </div>
                          <p className="casts__item__name">{item.name}</p>
                     </div>
                ))
              } 
          </div>
     )
}

export default CastList
