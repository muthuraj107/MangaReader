import React from "react";
import logo from "../Img/Daco_4927594.png";
import "./Nav.css";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="nav-section">
      <input id="toggler" className="checkboxs" type="checkbox" />
      <label for="toggler" className="humburger-line">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </label>
      <div className="header__nav">
        <figure className="logo">
          <img src={logo} alt="Logo" />
        </figure>
        <h2 className="Head__title">
          <Link to="/">MangaKakarot</Link>
        </h2>
      </div>
    
    </div>
  );
}
