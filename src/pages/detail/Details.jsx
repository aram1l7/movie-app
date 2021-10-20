import React, { useState, useEffect, useRef } from "react";
import tmdbApi from "../../api/tmdb";
import { useParams } from "react-router";
import "./details.scss";
import api from "../../api/config";
import CastList from "./CastList";
import VideoList from "./VideoList";
import MovieList from '../../components/movie-list/MovieList'
const Details = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    const getDetail = async () => {
      let response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);
  return (
    <>
      {item && (
        <>
          <div className="banner" style={{ backgroundImage: `url(${api.originalImage(item.backdrop_path || item.poster_path)})` }}></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div className="movie-content__poster__img" style={{ backgroundImage: `url(${api.originalImage(item.poster_path || item.backdrop_path)})` }}></div>
            </div>
            <div className="movie-content__info">
              <div className="title">
                <h3>{item.title || item.name}</h3>
              </div>
              <div className="genres">
                   {
                    item.genres && item.genres.slice(0,5).map((genre,i)=>(
                        <span className="genres__list" key={i}>{genre.name}</span>
                    ))
                   
                   }
              </div>
              <p className="overview">
                   {item.overview}
              </p>
              <div className="cast">
                   <div className="section__header">
                        <h3>Cast list</h3>
                   </div>
                   <CastList id={item.id}/>
              </div>
            </div>
          </div>
          <div className="container">
               <div className="section mb-3">
                    <VideoList id={item.id} />
               </div>
               <div className="section mb-3">
                    <h2>Similar</h2>
               </div>
               <MovieList id={item.id} type="similar" category={category} />

          </div>
        </>
      )}
    </>
  );
};

export default Details;
