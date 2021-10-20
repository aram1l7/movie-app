import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/vector.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content container">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">iMovies </Link>
          </div>
        <div className="footer__content__menu">
          <Link to="/">Home</Link>
          <Link to="/movie">Movies</Link>
          <Link to="/tv">TV Series</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
