import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#000]">
      <div className="relative h-full w-full">
        <div className="absolute bottom-0 right-1/2 w-full translate-x-1/2 px-4 md:w-[550px]">
          <div className="flex h-[350px] w-full flex-col items-center justify-center gap-4 rounded-t-full bg-[#000] px-6 pb-14 pt-14 md:h-[600px] md:w-[550px] md:pb-14 md:pt-40">
            <h1
              className="text-center font-playfair text-4xl font-[400] uppercase md:text-7xl md:tracking-[-2px]"
              style={{
                background: "linear-gradient(180deg, #E7F714 0%, #303129 125%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Reserve <br />
              Table
            </h1>
            <p className="w-full max-w-[500px] text-center font-inter text-sm font-[400] text-[#fff] md:text-base">
              Reserve your table and experience the true flavors of Levant. Book
              now for an unforgettable dining experience
            </p>
            <div className="md:mt-4">
              <Link href={"/table-booking"}>
                <Button
                  className={
                    "rounded-none border border-[#A8B40A] bg-[#A8B40A] px-6 py-5 font-poppins text-sm font-[500] uppercase text-[#fff] hover:bg-[#638D39] hover:text-[#fff] md:mb-8 md:px-8 md:py-6"
                  }
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={"/images/home/reserve/image.png"}
          width={281}
          height={74}
          alt="image"
          className="h-[500px] w-full object-cover md:h-full"
        />
      </div>
    </section>
  );
};

export default Reserve;
