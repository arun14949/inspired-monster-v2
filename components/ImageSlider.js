import React from "react";

const Slider = ({ slides, activeSlide, onNextSlide, onPrevSlide }) => {
  const setSliderStyles = () => {
    const transition = activeSlide * -100;
    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
    };
  };
  const renderSlides = () =>
    slides.map((item, index) => (
      <div
        className="each-slide"
        key={index}
        style={{ backgroundImage: item.eachSlide }}
      ></div>
    ));
  const renderArrows = () => (
    <React.Fragment>
      <button
        type="button"
        className="arrows prev"
        onClick={() => onPrevSlide()}
      >
        <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <button
        type="button"
        className="arrows next"
        onClick={() => onNextSlide()}
      >
        <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </React.Fragment>
  );
  return (
    <div className="slider">
      <div className="wrapper" style={setSliderStyles()}>
        {renderSlides()}
      </div>
      {renderArrows()}
    </div>
  );
};

export default Slider;
