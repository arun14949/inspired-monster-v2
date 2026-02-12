import React, { useEffect, useRef } from "react";

const Slider = ({ children, className }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    // Return if no element
    if (!slider) return;
    let isDown = false;
    let startX;
    let scrollLeft;
    let velX = 0;
    let momentumID;

    function mouseDown(e) {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      cancelMomentumTracking();
      e.preventDefault();
    }

    function mouseLeave() {
      isDown = false;
      slider.classList.remove("active");
    }

    function mouseUp(e) {
      isDown = false;
      slider.classList.remove("active");
      beginMomentumTracking();
      e.preventDefault();
    }
    function mouseMove(e) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      var prevScrollLeft = slider.scrollLeft;
      slider.scrollLeft = scrollLeft - walk;
      velX = slider.scrollLeft - prevScrollLeft;
    }

    function mouseWheel(e) {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        e.preventDefault();
        slider.scrollBy({
          left: e.deltaY * 0.75,
          behaviour: "smooth",
        });
      }
      cancelMomentumTracking();
    }

    // Momentum

    function beginMomentumTracking() {
      cancelMomentumTracking();
      momentumID = requestAnimationFrame(momentumLoop);
    }
    function cancelMomentumTracking() {
      cancelAnimationFrame(momentumID);
    }
    function momentumLoop() {
      slider.scrollLeft += velX;
      velX *= 0.15;
      if (Math.abs(velX) > 0.5) {
        momentumID = requestAnimationFrame(momentumLoop);
      }
    }
    // Events
    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeave);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mousemove", mouseMove);
    slider.addEventListener("wheel", mouseWheel);
    return () => {
      if (!slider) return;
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeave);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);
      slider.removeEventListener("wheel", mouseWheel);
    };
  }, [sliderRef]);

  return (
    <div className={className} ref={sliderRef}>
      {children}
    </div>
  );
};

export default Slider;
