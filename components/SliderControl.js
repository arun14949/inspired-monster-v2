const SliderControl = ({
  onMoreClick,
  onNext,
  onPrev,
  disablePrev,
  disableNext,
  variant = "desktop",
}) => {
  return (
    <div className="slider-nav">
      <button className="slider-button" onClick={onMoreClick}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="5" y="5" width="13.33" height="13.33" fill="#A2A0A1" />
          <rect x="5" y="22.3301" width="13.33" height="13.33" fill="#A2A0A1" />
          <rect x="22.33" y="5" width="13.33" height="13.33" fill="#A2A0A1" />
          <rect
            x="22.33"
            y="22.3301"
            width="13.33"
            height="13.33"
            fill="#A2A0A1"
          />
        </svg>
      </button>
      <button
        className="slider-button left"
        disabled={disablePrev}
        onClick={onPrev}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.4832 28.817C25.1332 28.167 25.1332 27.117 24.4832 26.467L18.0165 20.0004L24.4832 13.5337C25.1332 12.8837 25.1332 11.8337 24.4832 11.1837C23.8332 10.5337 22.7832 10.5337 22.1332 11.1837L14.4832 18.8337C13.8332 19.4837 13.8332 20.5337 14.4832 21.1837L22.1332 28.8337C22.7665 29.467 23.8332 29.467 24.4832 28.817Z"
            fill="#BBA7A1"
          />
        </svg>
      </button>
      <button
        className="slider-button right"
        disabled={disableNext}
        onClick={onNext}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.4832 28.817C25.1332 28.167 25.1332 27.117 24.4832 26.467L18.0165 20.0004L24.4832 13.5337C25.1332 12.8837 25.1332 11.8337 24.4832 11.1837C23.8332 10.5337 22.7832 10.5337 22.1332 11.1837L14.4832 18.8337C13.8332 19.4837 13.8332 20.5337 14.4832 21.1837L22.1332 28.8337C22.7665 29.467 23.8332 29.467 24.4832 28.817Z"
            fill="#BBA7A1"
          />
        </svg>
      </button>
    </div>
  );
};

export default SliderControl;
