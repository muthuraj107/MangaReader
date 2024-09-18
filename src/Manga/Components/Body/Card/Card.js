import React from "react";
import { Link } from 'react-router-dom';
import CardSlider from "./CardSlider";
import "./Card.css";
import Image from "../../../Img/Imag";
const App = () => {
  return (
    <div className="wrapper">
      <CardSlider>
        {Image.map((val) => (
          <>
            <div key={val.id} className="card">
              <div className="manga_img">
                <figure>
                  <img src={val.src} alt="" />
                </figure>
                <div className="mangadisp">
                  <p>{val.Name}</p>
                  <Link to={`/MangaPage/${val.MangaTittle}/${val.MangaID}`}>ReadNow</Link>
                </div>
              </div>
              <div className="manga_title">
                <h3>{val.Name}</h3>
              </div>
            </div>
          </>
        ))}
      </CardSlider>
    </div>
  );
};
export default App;
