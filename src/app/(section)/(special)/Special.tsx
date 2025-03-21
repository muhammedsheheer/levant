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
    <section className="relative flex h-full w-full justify-center bg-[#A8B40A] py-12">
      <div className="absolute bottom-20 right-28 hidden md:block">
        <Link href={"/menu"}>
          <Button className="rounded-none border border-[#000] bg-[#000] px-6 py-6 font-poppins text-xs font-[500] uppercase text-[#fff] hover:bg-[#1f1e1e] hover:text-[#fff] md:px-8 md:py-6 md:text-sm">
            View Menu
          </Button>
        </Link>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-0">
                <h6
                  className="font-playfair text-center text-5xl font-[400] uppercase md:text-7xl md:tracking-[-1px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #FFFFFB 0%, #FAFFBB 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SIGNATURES{" "}
                </h6>
                <Link href={"/menu"}>
                  <Button className="rounded-none border border-[#000] bg-[#000] px-6 py-6 font-poppins text-xs font-[500] uppercase text-[#fff] hover:bg-[#1f1e1e] hover:text-[#fff] md:hidden md:px-8 md:py-6 md:text-sm">
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
