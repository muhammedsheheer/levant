"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#638D39] py-12">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex flex-col items-center justify-center gap-4 md:ml-64 md:flex-row md:gap-40">
                <h6 className="font-sofia_sans text-center text-5xl font-[500] uppercase text-[#fff] md:text-7xl md:tracking-[-1px]">
                  lEVANT highlights{" "}
                </h6>
                <Link href={"/menu"}>
                  <Button className="font-sofia_sans rounded-none border border-[#fff] bg-[#fff] px-8 py-5 text-xs font-[700] uppercase text-[#638D39] hover:bg-[#638D39] hover:text-[#fff] md:px-10 md:py-6 md:text-sm">
                    View Menu
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
