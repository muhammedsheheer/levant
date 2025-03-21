import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] py-12 md:py-24">
      <div className="hidden flex-col md:flex">
        <div className="flex flex-col items-center justify-center gap-6 px-4 md:flex-row md:px-0">
          <h1
            className="font-playfair text-center text-9xl font-[500] uppercase tracking-[-15px] md:text-[350px] md:tracking-[-40px]"
            style={{
              background:
                "linear-gradient(203deg, #A8B40A -1.01%, #090909 116.74%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            LEV
          </h1>
          <div className="flex flex-col items-center justify-center gap-6">
            <h6 className="font-playfair text-center text-2xl font-[400] uppercase text-[#CFCFCF] md:text-3xl md:tracking-[-2px]">
              Our story
            </h6>
            <p className="w-full max-w-[700px] text-center font-inter text-sm font-[400] capitalize text-[#aaa] md:text-base">
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
            className="font-playfair text-center text-9xl font-[500] uppercase tracking-[-15px] md:text-[350px] md:tracking-[-40px]"
            style={{
              background:
                "linear-gradient(203deg, #A8B40A -1.01%, #090909 116.74%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ant
          </h1>
        </div>
        <div className="mt-20">
          <Image
            src={"/images/home/hero/bg.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-[600px] w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-0 md:hidden">
        <div className="flex flex-col items-center justify-center gap-6 px-4 md:hidden md:flex-row md:px-14">
          <h1
            className="font-playfair text-center text-9xl font-[500] uppercase tracking-[-15px] md:text-[350px] md:tracking-[-40px]"
            style={{
              background:
                "linear-gradient(203deg, #A8B40A -1.01%, #090909 116.74%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            LEV
          </h1>
          <div className="flex flex-col items-center justify-center gap-6">
            <h6 className="font-playfair text-center text-2xl font-[400] uppercase text-[#CFCFCF] md:text-3xl md:tracking-[-2px]">
              Our story
            </h6>
            <p className="w-full max-w-[700px] text-center font-inter text-sm font-[400] capitalize text-[#aaa] md:text-base">
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
            className="font-playfair text-center text-9xl font-[500] uppercase tracking-[-15px] md:text-[350px] md:tracking-[-40px]"
            style={{
              background:
                "linear-gradient(203deg, #A8B40A -1.01%, #090909 116.74%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ant
          </h1>
        </div>
        <div className="mt-6">
          <Image
            src={"/images/home/hero/bg.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
