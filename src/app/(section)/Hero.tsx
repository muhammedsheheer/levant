"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/bg.mp4"
        poster="/images/levant.png"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.43)]" />
      {/* <div className="relative mt-8 flex h-full w-full items-center justify-center md:mt-12">
        <Image
          src={"/images/home/hero/logob.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-[300px] w-[300px] md:h-[450px] md:w-[450px]"
        />
      </div> */}
      <div className="relative mt-8 flex h-full w-full items-center justify-center md:mt-12">
        {showImage && (
          <Image
            src="/images/home/hero/logob.png"
            width={281}
            height={74}
            alt="logo"
            className="h-[300px] w-[300px] md:h-[450px] md:w-[450px]"
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
