import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/bg.mp4"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.43)]" />
      <div className="relative flex h-full w-full items-center justify-center">
        <h1 className="font-sofia_sans text-center text-9xl font-[500] uppercase text-[#638D39] md:text-[350px] md:tracking-[-40px]">
          LEVANT
        </h1>
      </div>
    </section>
  );
};

export default Hero;
