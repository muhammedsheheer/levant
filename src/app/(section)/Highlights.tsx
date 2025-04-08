import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Highlights: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#000] bg-[url('/images/home/hero/bg.png')] bg-cover bg-center bg-no-repeat px-4 py-8 md:px-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 md:items-end md:gap-10">
        <div className="flex flex-col items-center justify-center gap-4 md:mr-32 md:flex-row md:gap-32">
          <h6
            className="text-center font-playfair text-5xl font-[400] uppercase text-[#fff] md:mb-8 md:text-7xl md:tracking-[-1px]"
            // style={{
            //   background: "linear-gradient(180deg, #E7F714 0%, #303129 100%)",
            //   backgroundClip: "text",
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            // }}
          >
            lEVANT highlights{" "}
          </h6>
          <Link href={"/menu"}>
            <Button
              className={
                "rounded-none border border-[#A8B40A] bg-[#A8B40A] px-6 py-5 font-poppins text-sm font-[500] uppercase text-[#fff] hover:bg-[#638D39] hover:text-[#fff] md:mb-8 md:px-8 md:py-6"
              }
            >
              View Menu
            </Button>
          </Link>
        </div>
        <div className="flex h-full w-full flex-col gap-8 md:flex-row">
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[33%]">
            <div className="h-full w-full rounded-t-full border-4 border-[#A8B40A] p-4">
              <Image
                src={"/images/home/highlights/1.jpg"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full md:h-full"
              />
            </div>
            <h6 className="text-center font-playfair text-2xl font-[500] uppercase text-[#fff] md:text-3xl md:tracking-[-1px]">
              Atmosphere
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[33%]">
            <div className="h-full w-full rounded-t-full border-4 border-[#A8B40A] p-4">
              <Image
                src={"/images/home/highlights/2.jpg"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full md:h-full"
              />
            </div>
            <h6 className="text-center font-playfair text-2xl font-[500] uppercase text-[#fff] md:text-3xl md:tracking-[-1px]">
              food
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[33%]">
            <div className="h-full w-full rounded-t-full border-4 border-[#A8B40A] p-4">
              <Image
                src={"/images/home/highlights/3.jpg"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full md:h-full"
              />
            </div>
            <h6 className="text-center font-playfair text-2xl font-[500] uppercase text-[#fff] md:text-3xl md:tracking-[-1px]">
              drinks
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
