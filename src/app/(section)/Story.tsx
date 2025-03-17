import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] py-12 md:py-0">
      <div className="absolute left-0 right-0 top-0 z-50 hidden md:block">
        <div className="flex flex-col items-center justify-center gap-6 px-4 md:flex-row md:px-14">
          <h1
            className="font-sofia_sans text-center text-9xl font-[500] uppercase tracking-[-15px] md:text-[450px] md:tracking-[-50px]"
            style={{
              background: "linear-gradient(233deg, #FFF 4.94%, #638D39 71.62%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            LEV
          </h1>
          <div className="flex flex-col items-center justify-center gap-6">
            <h6 className="font-sofia_sans text-center text-2xl font-[500] uppercase text-[#214D2A] md:text-3xl md:tracking-[-2px]">
              Our story
            </h6>
            <p className="w-full max-w-[700px] text-center font-inter text-sm font-[400] capitalize text-[#696969] md:text-base">
              At Levant, we believe dining is more than just a meal—it’s an
              experience. Nestled in the heart of London, Levant brings the
              warmth and vibrancy of Mediterranean culture to life through
              exquisite cuisine, captivating entertainment, and an inviting
              ambiance.Our menu is a celebration of authentic Mediterranean
              flavors, crafted with the finest ingredients and a passion for
              culinary artistry. From our flavorful mezze to perfectly grilled
              specialties, every dish is designed to transport you on a sensory
              journey.
            </p>
          </div>
          <h1
            className="font-sofia_sans text-center text-9xl font-[500] uppercase tracking-[-15px] md:text-[450px] md:tracking-[-50px]"
            style={{
              background: "linear-gradient(233deg, #FFF 4.94%, #638D39 71.62%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ant
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-0">
        <div className="flex flex-col items-center justify-center gap-6 px-4 md:hidden md:flex-row md:px-14">
          <h1
            className="font-sofia_sans text-center text-9xl font-[500] uppercase tracking-[-15px] md:text-[450px] md:tracking-[-50px]"
            style={{
              background: "linear-gradient(233deg, #FFF 4.94%, #638D39 71.62%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            LEV
          </h1>
          <div className="flex flex-col items-center justify-center gap-6">
            <h6 className="font-sofia_sans text-center text-2xl font-[500] uppercase text-[#214D2A] md:text-3xl md:tracking-[-2px]">
              Our story
            </h6>
            <p className="w-full max-w-[700px] text-center font-inter text-sm font-[400] capitalize text-[#696969] md:text-base">
              At Levant, we believe dining is more than just a meal—it’s an
              experience. Nestled in the heart of London, Levant brings the
              warmth and vibrancy of Mediterranean culture to life through
              exquisite cuisine, captivating entertainment, and an inviting
              ambiance.Our menu is a celebration of authentic Mediterranean
              flavors, crafted with the finest ingredients and a passion for
              culinary artistry. From our flavorful mezze to perfectly grilled
              specialties, every dish is designed to transport you on a sensory
              journey.
            </p>
          </div>
          <h1
            className="font-sofia_sans text-center text-9xl font-[500] uppercase tracking-[-15px] md:text-[450px] md:tracking-[-50px]"
            style={{
              background: "linear-gradient(233deg, #FFF 4.94%, #638D39 71.62%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ant
          </h1>
        </div>
        <div className="relative flex flex-col">
          <div className="hidden h-[400px] w-full md:block"></div>
          <div className="absolute inset-0 mt-8 flex items-center justify-center md:mt-[22%]">
            <h1
              className="font-sofia_sans text-center text-4xl font-[500] uppercase tracking-[-2px] md:text-8xl md:tracking-[-8px]"
              style={{
                background:
                  "linear-gradient(233deg, #FFF 4.94%, #959B97 71.62%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Authentic lEVAntine <br /> cuisine
            </h1>
          </div>
          <div className="absolute -top-24 left-0 right-0 md:-top-[50px]">
            <Image
              src={"/images/home/story/top.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[200px] w-full md:h-[800px]"
            />
          </div>
          <div className="absolute -bottom-14 left-0 right-0 md:-bottom-[50px]">
            <Image
              src={"/images/home/story/bottom.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[100px] w-full md:h-[300px]"
            />
          </div>
          <Image
            src={"/images/home/story/image.png"}
            width={281}
            height={74}
            alt="image"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
