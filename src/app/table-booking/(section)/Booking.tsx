import Link from "next/link";
import React from "react";

const Booking: React.FC = () => {
  return (
    <div className="flex h-full w-full max-w-[1300px] items-center justify-center gap-[1.2rem] py-12">
      <iframe
        src="https://tableagent.com/iframe/levant-restaurant/v/medium/"
        style={{ width: "100%", height: "620px" }}
      ></iframe>
    </div>
  );
};

export default Booking;
