// import Link from "next/link";
// import React from "react";

// const Booking: React.FC = () => {
//   return (
//     <iframe
//       src="https://tableagent.com/iframe/levant-restaurant/v/medium/"
//       style={{
//         border: "0px none",
//         minWidth: "300px",
//         maxWidth: "350px",
//         minHeight: "636px",
//       }}
//       sandbox="allow-forms allow-modals allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
//       width="100%"
//       height="100%"
//     ></iframe>
//   );
// };

// export default Booking;

"use client";

const Booking = ({}) => {
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
