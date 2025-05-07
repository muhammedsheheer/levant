import Link from "next/link";
import React from "react";

const Booking: React.FC = () => {
  return (
    <iframe
      src="https://tableagent.com/iframe/levant-restaurant/v/medium/"
      style={{
        border: "0px none",
        minWidth: "300px",
        maxWidth: "350px",
        minHeight: "636px",
      }}
      sandbox="allow-forms allow-modals allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
      width="100%"
      height="100%"
    ></iframe>
  );
};

export default Booking;
