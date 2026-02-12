import classNames from "classnames";
import React from "react";

const NotificationBanner = ({ isOpen = false, isMobile = false }) => {
  return isOpen ? (
    <div className={classNames("notification", isMobile && "mobile")}>
      <p>
        📨 Thank you! Your submission has been received! I will be contacting
        you shortly.
      </p>
    </div>
  ) : (
    <React.Fragment />
  );
};

export default NotificationBanner;
