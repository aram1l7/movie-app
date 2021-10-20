import React from "react";
import { Link } from "react-router-dom";
import { OutLineButton } from "../components/button/Button";
import Heroslide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";

import { category, movieType, tvType } from "../api/tmdb";

const Home = () => {
  return (
    <>
      <Heroslide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending movies</h2>
            <Link to="/movie">
              <OutLineButton className="small">View More</OutLineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top rated movies</h2>
            <Link to="/movie">
              <OutLineButton className="small">View More</OutLineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV Series</h2>
            <Link to="/tv">
              <OutLineButton className="small">View More</OutLineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top rated TV Series</h2>
            <Link to="/tv">
              <OutLineButton className="small">View More</OutLineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
};

export default Home;
