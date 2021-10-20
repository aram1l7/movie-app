import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./movielist.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import tmdbApi, { category } from "../../api/tmdb";
import Button from "../button/Button";
import api from "../../api/config";
import Moviecard from "../movie-card/MovieCard";
const MovieList = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getList = async () => {
      let params = {};
      let response = null;

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }

      setItems(response.results);
    };
    getList();
  }, []);
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <Moviecard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
