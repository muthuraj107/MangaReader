import React from "react";
import Nav from "./Nav";
import "./Head.css";
export default function Head() {
  return (
    <div className="head">
      <div className="banner">
        <h5>Unleash The Mangaverse</h5>
        <h1>MangaKakarot</h1>
        <a href="#body" className="btn">
          Explore
        </a>
      </div>
      <div className="nav-head">
        <Nav />
      </div>
    </div>
  );
}
