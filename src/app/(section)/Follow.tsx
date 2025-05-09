// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Follow: React.FC = () => {
//   return (
//     <section className="relative h-full w-full bg-[#000]">
//       <div className="flex flex-col gap-10 md:gap-24">
//         <div className="flex flex-col items-center justify-center gap-2 md:hidden">
//           <div></div>
//         </div>
//         <div className="flex flex-col">
//           <div className="flex w-full flex-col bg-[#000] md:flex-row">
//             <div className="grid w-full grid-cols-1 gap-4 bg-[#000] px-4 md:w-[65%] md:grid-cols-2 md:px-0">
//               <Image
//                 src={"/images/home/follow/image1.png"}
//                 width={281}
//                 height={74}
//                 alt="image"
//                 className="h-[300px] w-full object-cover md:h-[350px]"
//               />
//               <Image
//                 src={"/images/home/follow/image2.png"}
//                 width={281}
//                 height={74}
//                 alt="image"
//                 className="h-[300px] w-full object-cover md:h-[350px]"
//               />
//               <Image
//                 src={"/images/home/follow/image3.png"}
//                 width={281}
//                 height={74}
//                 alt="image"
//                 className="h-[300px] w-full object-cover md:h-[350px]"
//               />
//               <Image
//                 src={"/images/home/follow/image4.png"}
//                 width={281}
//                 height={74}
//                 alt="image"
//                 className="h-[300px] w-full object-cover md:h-[350px]"
//               />
//             </div>
//             <div className="relative flex w-full flex-col items-center justify-center gap-2 bg-[#A8B40A] py-8 md:w-[35%] md:py-0">
//               <div className="-gap-2 flex flex-col">
//                 <h1 className="font-cinzel text-5xl font-[500] uppercase text-[#fff] md:text-[120px] md:tracking-[-10px]">
//                   Follow
//                 </h1>
//                 <h1 className="font-cinzel text-5xl font-[500] uppercase text-[#fff] md:-mt-6 md:text-9xl md:tracking-[-10px]">
//                   Us
//                 </h1>
//               </div>
//               <Link
//                 href={"https://www.instagram.com/levantelixirofco/"}
//                 target="_blank"
//               >
//                 <h1 className="font-playfair text-3xl font-[500] uppercase text-[#fff] md:text-5xl md:tracking-[-5px]">
//                   @levantelixirofco
//                 </h1>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Follow;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000]">
      <div className="flex flex-col gap-10 md:gap-24">
        <div className="flex flex-col items-center justify-center gap-2 md:hidden">
          <div></div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full flex-col bg-[#000] md:flex-row">
            <div className="grid w-full grid-cols-1 gap-4 bg-[#000] px-4 md:w-[65%] md:grid-cols-2 md:px-0">
              {["image1", "image2", "image3", "image4"].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                  }}
                  viewport={{ once: false, amount: 0.4 }}
                >
                  <Image
                    src={`/images/home/follow/${img}.png`}
                    width={281}
                    height={74}
                    alt={`image-${i}`}
                    className="h-[300px] w-full object-cover md:h-[350px]"
                  />
                </motion.div>
              ))}
            </div>
            <div className="relative flex w-full flex-col items-center justify-center gap-2 bg-[#A8B40A] py-8 md:w-[35%] md:py-0">
              <div className="-gap-2 flex flex-col">
                <h1 className="font-cinzel text-5xl font-[500] uppercase text-[#fff] md:text-[120px] md:tracking-[-10px]">
                  Follow
                </h1>
                <h1 className="font-cinzel text-5xl font-[500] uppercase text-[#fff] md:-mt-6 md:text-9xl md:tracking-[-10px]">
                  Us
                </h1>
              </div>
              <Link
                href={"https://www.instagram.com/levantelixirofco/"}
                target="_blank"
              >
                <h1 className="font-playfair text-3xl font-[500] uppercase text-[#fff] md:text-5xl md:tracking-[-5px]">
                  @levantelixirofco
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
