import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] bg-[url('/images/home/hero/bg.png')] bg-cover bg-center bg-no-repeat px-4 pb-32 pt-32 md:px-12 md:pb-40 md:pt-14">
      <div className="flex flex-col items-center justify-center gap-6 md:items-start md:justify-start md:gap-10">
        <h1
          className="font-cinzel text-center text-4xl font-[400] uppercase md:text-start md:text-7xl md:tracking-[-2px]"
          style={{
            background: "linear-gradient(180deg, #E7F714 0%, #303129 125%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          OUR FLAVORS
        </h1>
        <p className="font-cinzel w-full max-w-[500px] text-center text-sm font-[400] text-[#fff] md:text-start md:text-base">
          Meso-Terranean: A symphony of Mediterranean and Mesopotamian culinary
          traditions, through an array of little little in the middle dishes.
        </p>
      </div>
    </section>
  );
};

export default Story;
