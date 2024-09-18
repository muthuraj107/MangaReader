import React, { useState } from "react";
import "./CardSlider.css";
export default function CardSlider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const handleNextClick = () => {
    if (activeIndex < 5) setActiveIndex(activeIndex + 1);
  };
  return (
    <div className="cardSlider">
      <button type="button" className="prev-btn" onClick={handlePrevClick}>
        {" "}
        &#10094;
      </button>
      <div
        className="slider"
        style={{
          transform: `translateX(${activeIndex * -200}px)`,
        }}
      >
        <div className="slidercard">{children}</div>
      </div>
      <button className="next-btn" onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  );
}
