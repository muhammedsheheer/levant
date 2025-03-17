import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#fff] pt-12 md:pt-24">
      <div className="relative h-full w-full">
        <div className="absolute bottom-0 right-1/2 w-full translate-x-1/2 px-4 md:w-[550px]">
          <div className="flex h-[350px] w-full flex-col items-center justify-center gap-4 rounded-t-full bg-[#fff] px-6 py-14 md:h-[550px] md:w-[550px] md:py-20">
            <h1 className="font-sofia_sans text-center text-4xl font-[600] uppercase text-[#638D39] md:text-6xl md:tracking-[-1px]">
              Reserve <br />
              Your Table
            </h1>
            <p className="w-full max-w-[500px] text-center font-inter text-sm font-[400] text-[#000] md:text-base">
              Reserve your table and experience the true flavors of Levant. Book
              now for an unforgettable dining experience
            </p>
            <div className="md:mt-4">
              <Link href={"/table-booking"}>
                <Button className="font-sofia_sans rounded-none border border-[#638D39] bg-[#638D39] px-8 py-5 text-xs font-[700] uppercase text-[#fff] hover:bg-[#7bad4a] hover:text-[#fff] md:px-10 md:py-6 md:text-sm">
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
