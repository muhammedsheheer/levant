import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Highlights: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#fff] bg-[url('/images/home/hero/bg.png')] bg-cover bg-center bg-no-repeat px-6 py-8 md:px-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-16 md:items-end">
        <div className="flex flex-col items-center justify-center gap-4 md:mr-32 md:flex-row md:gap-32">
          <h6 className="text-center font-cinzel text-5xl font-[400] uppercase text-[#fff] md:mb-8 md:text-7xl md:tracking-[-1px]">
            Levant Highlights
          </h6>
          <Link href={"/menu"}>
            <Button className="rounded-none border border-[#A8B40A] bg-[#A8B40A] px-6 py-5 font-cinzel text-sm font-[500] uppercase text-[#fff] hover:bg-[#638D39] hover:text-[#fff] md:mb-8 md:px-8 md:py-6">
              View Menu
            </Button>
          </Link>
        </div>

        <div className="flex h-full w-full flex-col gap-16 md:flex-row">
          {/* Ambience Image */}
          <div className="flex w-full flex-col items-center justify-center gap-16 md:w-[33%]">
            <motion.div
              className="h-full w-full rounded-t-full border-4 border-[#A8B40A] p-4"
              whileInView={{ scale: 1.1 }}
              initial={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-[500px] w-full"
              >
                <Image
                  src={"/images/home/highlights/1.jpg"}
                  width={677}
                  height={503}
                  alt="Ambience"
                  className="h-full w-full rounded-t-full object-cover"
                />
              </motion.div>
            </motion.div>
            <h6 className="text-center font-cinzel text-2xl font-[500] uppercase md:text-3xl md:tracking-[-1px]">
              <span className="rounded-full bg-[#A8B40A] px-4 py-1 text-[#fff]">
                Ambience
              </span>
            </h6>
          </div>

          {/* Food Image */}
          <div className="flex w-full flex-col items-center justify-center gap-16 md:w-[33%]">
            <motion.div
              className="h-full w-full rounded-t-full border-4 border-[#A8B40A] p-4"
              whileInView={{ scale: 1.1 }}
              initial={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-[500px] w-full"
              >
                <Image
                  src={"/images/home/highlights/2.jpg"}
                  width={677}
                  height={503}
                  alt="Food"
                  className="h-full w-full rounded-t-full object-cover"
                />
              </motion.div>
            </motion.div>
            <h6 className="text-center font-cinzel text-2xl font-[500] uppercase md:text-3xl md:tracking-[-1px]">
              <span className="rounded-full bg-[#A8B40A] px-4 py-1 text-[#fff]">
                Food
              </span>
            </h6>
          </div>

          {/* Cocktail Image */}
          <div className="flex w-full flex-col items-center justify-center gap-16 md:w-[33%]">
            <motion.div
              className="h-full w-full rounded-t-full border-4 border-[#A8B40A] p-4"
              whileInView={{ scale: 1.1 }}
              initial={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-[500px] w-full"
              >
                <Image
                  src={"/images/home/highlights/4.jpg"}
                  width={677}
                  height={503}
                  alt="Cocktail"
                  className="h-full w-full rounded-t-full object-cover"
                />
              </motion.div>
            </motion.div>
            <h6 className="text-center font-cinzel text-2xl font-[500] uppercase md:text-3xl md:tracking-[-1px]">
              <span className="rounded-full bg-[#A8B40A] px-4 py-1 text-[#fff]">
                Cocktail
              </span>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
