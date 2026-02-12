import React from "react";
import Modal from "react-modal";

const Credits = ({ open, onClose }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      contentLabel="Modal"
      className={{
        base: "modal-credit-base",
        afterOpen: "modal-credit-base_after-open",
        beforeClose: "modal-credit-base_before-close",
      }}
      overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-base_after-open",
        beforeClose: "overlay-base_before-close",
      }}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={400}
    >
      <div className="credits">
        <button className="close-button" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M24.4 7.61354C23.88 7.09354 23.04 7.09354 22.52 7.61354L16 14.1202L9.47996 7.60021C8.95996 7.08021 8.11996 7.08021 7.59996 7.60021C7.07996 8.12021 7.07996 8.96021 7.59996 9.48021L14.12 16.0002L7.59996 22.5202C7.07996 23.0402 7.07996 23.8802 7.59996 24.4002C8.11996 24.9202 8.95996 24.9202 9.47996 24.4002L16 17.8802L22.52 24.4002C23.04 24.9202 23.88 24.9202 24.4 24.4002C24.92 23.8802 24.92 23.0402 24.4 22.5202L17.88 16.0002L24.4 9.48021C24.9066 8.97354 24.9066 8.12021 24.4 7.61354Z"
              fill="#A2A0A1"
            />
          </svg>
        </button>
        <div className="content">
          <h5>Credits</h5>
          <h6 className="title">Special Thanks to</h6>
          <div className="list">
            <div className="list-item">
              <span className="icon">💻</span>
              <p className="text">
                <a
                  href="https://www.linkedin.com/in/raison-joseph/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Raison Joseph
                </a>
                &nbsp;&&nbsp;
                <a
                  href="https://www.athulantony.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Athul Antony
                </a>
                &nbsp; for developing this website pixel perfectly
              </p>
            </div>
            <div className="list-item">
              <span className="icon">🎧</span>
              <p className="text">
                <a
                  href="https://www.spotify.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spotify
                </a>
                &nbsp;for the music playlist widget
              </p>
            </div>
            <div className="list-item">
              <span className="icon">😀</span>
              <p className="text">
                <a
                  href="https://emojipedia.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Emojipedia
                </a>
                &nbsp;for beautiful, free emoji’s
              </p>
            </div>
            <div className="list-item">
              <span className="icon">🏀</span>
              <p className="text">
                <a
                  href="https://dribbble.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dribbble
                </a>
                &nbsp;for the shots listing API
              </p>
            </div>
          </div>
          <h6 className="title">Featured in</h6>
          <div className="list">
            <div className="list-item">
              <span className="icon">🌐</span>
              <p className="text">
                <a
                  href="https://itsallwidgets.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Itsallwidgets
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>All other content © {new Date().getFullYear()} Inspired Monster</p>
        </div>
      </div>
    </Modal>
  );
};

export default Credits;
