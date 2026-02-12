import React from "react";
import Modal from "react-modal";
const SpotifyModal = ({ open, onClose }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      contentLabel="Modal"
      className={{
        base: "modal-base spotify",
        afterOpen: "modal-base_after-open",
        beforeClose: "modal-base_before-close",
      }}
      overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-base_after-open",
        beforeClose: "overlay-base_before-close",
      }}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={400}
    >
      <iframe
        src="https://open.spotify.com/embed/playlist/71LsMvu7RimgBrMInifH2Y"
        width="324"
        height="360"
        allow="encrypted-media"
      />
    </Modal>
  );
};

export default SpotifyModal;
