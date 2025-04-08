import React from "react";

const Offer: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#000] bg-[url('/images/home/hero/bg.png')] bg-cover bg-center bg-no-repeat px-4 pb-8 pt-12 md:pb-10 md:pt-24">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center font-cinzel text-4xl font-[400] uppercase text-[#fff] md:text-6xl md:tracking-[-2px]">
            Special offer
          </h1>
        </div>
        <div
          className="flex h-[400px] w-full flex-col items-center justify-center gap-6 px-4 md:h-[450px] md:w-[40%]"
          style={{
            background: "linear-gradient(180deg, #A8B40A 0%, #FEFFF0 100%)",
          }}
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-center font-racing text-5xl font-[400] uppercase text-[#fff] md:text-8xl md:tracking-[-10px]">
              FIZZY FRIDAYS
            </h1>
            <h1 className="text-center font-quicksand text-3xl font-[400] uppercase text-[#638D39] md:text-5xl md:tracking-[-5px]">
              PROSECCO BOTTLE
            </h1>
            <h1 className="text-center font-quicksand text-3xl font-[400] uppercase text-[#638D39] md:text-5xl md:tracking-[-5px]">
              Only <span className="text-[#C33D51]">£18.5</span>
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-rozha text-3xl font-[400] uppercase text-[#DB44F9] md:text-5xl md:tracking-[-5px]">
              every friday
            </h1>
            <h1 className="text-center font-rozha text-2xl font-[400] uppercase text-[#DB44F9] md:text-5xl md:tracking-[-5px]">
              12:00pm - 5:00pm{" "}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
