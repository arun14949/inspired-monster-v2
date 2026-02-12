// @src/components/Modal.jsx

import React from "react";
import ReactModal from "react-modal";

const Modal = ({ children, open, onClose, bottomSheet = false }) => {
  return (
    <ReactModal
      isOpen={open}
      onRequestClose={onClose}
      contentLabel="Modal"
      className={{
        base: "modal-base",
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
      sd
    </ReactModal>
  );
};

export default Modal;
