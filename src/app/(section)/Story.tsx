

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] bg-[url('/images/home/hero/bg.png')] bg-cover bg-center bg-no-repeat px-4 pb-32 pt-32 md:px-12 md:pb-40 md:pt-14">
      <div className="flex flex-col items-center justify-center gap-6 md:items-start md:justify-start md:gap-10">
        <motion.h1
          className="text-center font-cinzel text-4xl font-[400] uppercase text-[#fff] md:text-start md:text-7xl md:tracking-[-2px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          OUR FLAVORS
        </motion.h1>

        <motion.p
          className="w-full max-w-[500px] text-center font-cinzel text-sm font-[400] text-[#fff] md:text-start md:text-base"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Meso-Terranean: A symphony of Mediterranean and Mesopotamian culinary
          traditions, through an array of little in the middle dishes.
        </motion.p>
      </div>
    </section>
  );
};

export default Story;
