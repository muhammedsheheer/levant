import Image from "next/image";
import React from "react";

const Levant: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff]">
      <div className="left-0 right-0 top-0 hidden md:block">
        <h1
          className="font-sofia_sans w-full text-6xl text-[24vw] font-[500] uppercase tracking-[-22px] text-[#638D39]"
          style={{
            transform: "scaleX(1.8)",
            transformOrigin: "left",
            whiteSpace: "nowrap",
          }}
        >
          Levant
        </h1>
      </div>
      <div className="flex flex-col gap-10 md:gap-24">
        <div className="flex flex-col items-center justify-center gap-2 md:hidden">
          <div>
            <h1 className="font-sofia_sans text-center text-7xl font-[500] uppercase text-[#638D39] md:text-8xl">
              LEVANT{" "}
            </h1>
          </div>
        </div>
        <div className="flex w-full flex-col bg-[#fff] md:flex-row">
          <div className="grid w-full grid-cols-1 gap-4 bg-[#fff] px-4 md:w-[55%] md:grid-cols-2 md:px-0">
            <Image
              src={"/images/home/gallery/image1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full object-cover md:h-[350px]"
            />
            <Image
              src={"/images/home/gallery/image2.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full object-cover md:h-[350px]"
            />
            <Image
              src={"/images/home/gallery/image3.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full object-cover md:h-[350px]"
            />
            <Image
              src={"/images/home/gallery/image4.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full object-cover md:h-[350px]"
            />
          </div>
          <div className="relative flex w-full flex-col gap-2 md:w-[45%]">
            <div className="absolute inset-0 z-50 hidden items-center justify-center md:flex">
              <div className="flex flex-col gap-6">
                <Image
                  src={"/images/home/gallery/image5.png"}
                  width={281}
                  height={74}
                  alt="image"
                  className="h-[300px] w-[270px] object-cover md:h-[250px]"
                />
                <Image
                  src={"/images/home/gallery/image6.png"}
                  width={281}
                  height={74}
                  alt="image"
                  className="h-[300px] w-[270px] object-cover md:h-[250px]"
                />
              </div>
            </div>
            <div className="absolute -top-6 left-4 hidden md:block">
              <div className="z-0 flex flex-col">
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* second one  */}
            <div className="absolute -top-6 left-[48%] z-20 hidden md:block">
              <div className="z-0 flex flex-col">
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* tird one  */}
            <div className="absolute -top-6 left-[25%] hidden md:block">
              <div className="z-0 flex flex-col">
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVA
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* fourth one  */}
            <div className="absolute -top-6 left-[72%] z-30 hidden md:block">
              <div className="flex flex-col">
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVANT{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVANT{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVANT{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVANT{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVANT{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVANT{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVANT{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-sofia_sans text-center text-4xl font-[500] uppercase text-[rgba(99,141,57,0.53)] md:text-8xl">
                      LEVANT{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Levant;
