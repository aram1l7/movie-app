import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { category } from "../../api/tmdb";
import api from "../../api/config";
import "./moviecard.scss";
import 'boxicons';
const Moviecard = (props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;
  const bgImage = api.w500Image(item.poster_path || item.backdrop_path);
  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bgImage})` }}>
        <Button>
          <box-icon color="white" name="play"></box-icon>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default Moviecard;
