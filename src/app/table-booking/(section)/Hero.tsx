const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="relative flex h-full min-h-[400px] w-full flex-col items-center justify-center gap-[1.38rem] bg-[url('/images/about-us/image2.jpg')] bg-cover bg-center bg-no-repeat text-[1.5rem] leading-[110%]"
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <h1 className="relative z-10 w-full text-center font-cinzel text-[4.75rem] leading-[80%] text-[#A8B40A]">
        Table Booking
      </h1>
    </section>
  );
};

export default Hero;
