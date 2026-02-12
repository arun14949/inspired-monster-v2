import React from "react";
import Image from "next/image";
import MoreIcon from "../assets/images/more.svg";

const BottomSliderControl = ({
  onMoreClick,
  onNext,
  onPrev,
  disablePrev,
  disableNext,
  variant = "desktop",
}) => {
  return (
    <div className="bottom-nav mobile-slider-nav">
      <button className="slider-button" onClick={onMoreClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M24.4 7.61354C23.88 7.09354 23.04 7.09354 22.52 7.61354L16 14.1202L9.47996 7.60021C8.95996 7.08021 8.11996 7.08021 7.59996 7.60021C7.07996 8.12021 7.07996 8.96021 7.59996 9.48021L14.12 16.0002L7.59996 22.5202C7.07996 23.0402 7.07996 23.8802 7.59996 24.4002C8.11996 24.9202 8.95996 24.9202 9.47996 24.4002L16 17.8802L22.52 24.4002C23.04 24.9202 23.88 24.9202 24.4 24.4002C24.92 23.8802 24.92 23.0402 24.4 22.5202L17.88 16.0002L24.4 9.48021C24.9066 8.97354 24.9066 8.12021 24.4 7.61354Z"
            fill="#A2A0A1"
          />
        </svg>
      </button>
      <button className="slider-button" disabled={disablePrev} onClick={onPrev}>
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
export default BottomSliderControl;
