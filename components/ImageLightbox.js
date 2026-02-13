import React, { useCallback, useEffect, useRef, useState } from "react";

const ImageLightbox = ({ src, alt, onClose }) => {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    setScale((prev) => {
      const next = prev - e.deltaY * 0.002;
      if (next <= 1) {
        setTranslate({ x: 0, y: 0 });
        return 1;
      }
      return Math.min(next, 5);
    });
  }, []);

  const handleDoubleClick = useCallback(() => {
    if (scale > 1) {
      setScale(1);
      setTranslate({ x: 0, y: 0 });
    } else {
      setScale(2.5);
    }
  }, [scale]);

  const handlePointerDown = useCallback(
    (e) => {
      if (scale <= 1) return;
      e.preventDefault();
      setIsDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY };
      translateStart.current = { ...translate };
    },
    [scale, translate]
  );

  const handlePointerMove = useCallback(
    (e) => {
      if (!isDragging) return;
      setTranslate({
        x: translateStart.current.x + (e.clientX - dragStart.current.x),
        y: translateStart.current.y + (e.clientY - dragStart.current.y),
      });
    },
    [isDragging]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="lightbox" onClick={handleBackdropClick}>
      <div
        className="lightbox__image-wrapper"
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onDoubleClick={handleDoubleClick}
        style={{ cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || ""}
          className="lightbox__image"
          draggable={false}
          style={{
            transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
          }}
        />
      </div>
      <button className="btn lightbox__close-btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default ImageLightbox;
