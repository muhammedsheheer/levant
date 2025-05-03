"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#000] px-4 pt-2 lg:px-8">
      <div className="flex flex-col gap-4 pt-12 md:gap-8 lg:pt-24">
        {/* first  div */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-14 md:px-32">
          {/* sub first  div */}
          <div className="hidden flex-col gap-4 md:flex md:flex-row md:gap-36">
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-8">
              <div>
                <Link href={"/"}>
                  <Image
                    src={"/images/home/hero/logo.png"}
                    width={281}
                    height={74}
                    alt="logo"
                    className="w-28"
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center gap-2 md:items-start md:pt-4">
                <div className="flex flex-col items-center md:items-start">
                  <span>
                    <Link
                      className="flex flex-col text-center font-cinzel text-xs font-[500] uppercase text-[#fff] md:text-start"
                      target="_blank"
                      href={"https://g.co/kgs/34ojPbT"}
                    >
                      9 Barlow Moor Rd, Didsbury, Manchester
                      <br /> M20 6TN MANCHESTER
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="font-cinzel text-xs font-[500] uppercase text-[#fff]"
                      href={"tel:+01614230494"}
                    >
                      0161 423 04 94{" "}
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="font-cinzel text-xs font-[500] uppercase text-[#fff]"
                      href={"mailto:info@levant-restaurant.uk"}
                    >
                      levant-restaurant.uk
                    </Link>
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 md:gap-4">
                <Link
                  href={"https://www.instagram.com/levantelixirofco/"}
                  target="_blank"
                >
                  <Icons.instagram className="text-[#fff]" />
                </Link>
                <Link
                  href={
                    "https://www.tripadvisor.in/Restaurant_Review-g187069-d32861312-Reviews-Levant_Elixir_Of_Co_existence-Manchester_Greater_Manchester_England.html"
                  }
                  target="_blank"
                >
                  <Icons.unknown className="text-[#fff]" />
                </Link>
                <Link href={"https://g.co/kgs/kfvqUBt"} target="_blank">
                  <Icons.google className="text-[#fff]" />
                </Link>
                <Link
                  href={"https://www.facebook.com/levantelixirofco"}
                  target="_blank"
                >
                  <Icons.facebook className="text-[#fff]" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:mt-24 md:items-start md:gap-6">
              <Link
                href={"/"}
                className="font-cinzel text-xs font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Home
              </Link>
              <Link
                href={"/menu"}
                className="font-cinzel text-xs font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Menu
              </Link>

              <Link
                href={"/table-booking"}
                className="font-cinzel text-xs font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Reservation
              </Link>
              <Link
                href={"/contact"}
                className="font-cinzel text-xs font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Contact Us
              </Link>
            </div>{" "}
          </div>
          {/* mobile screen */}
          <div className="flex flex-col gap-8 md:hidden">
            <div className="flex flex-col items-start gap-4 md:items-start md:gap-8">
              <div>
                <Link href={"/"}>
                  <Image
                    src={"/images/home/hero/logo.png"}
                    width={281}
                    height={74}
                    alt="logo"
                    className="w-28"
                  />
                </Link>
              </div>
              <div className="flex flex-col items-start gap-2 md:items-start md:pt-4">
                <div className="flex flex-col items-start md:items-start">
                  <span>
                    <Link
                      className="flex flex-col text-start font-cinzel text-xs font-[500] uppercase text-[#fff] md:text-start"
                      target="_blank"
                      href={"https://g.co/kgs/34ojPbT"}
                    >
                      9 Barlow Moor Rd, Didsbury, Manchester
                      <br /> M20 6TN MANCHESTER
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="font-cinzel text-xs font-[500] uppercase text-[#fff]"
                      href={"tel:+01614230494"}
                    >
                      0161 423 04 94{" "}
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="font-cinzel text-xs font-[500] uppercase text-[#fff]"
                      href={"mailto:info@levant-restaurant.uk"}
                    >
                      levant-restaurant.uk
                    </Link>
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-2 md:gap-4">
                <Link
                  href={"https://www.instagram.com/levantelixirofco/"}
                  target="_blank"
                >
                  <Icons.instagram className="text-[#fff]" />
                </Link>
                <Link
                  href={
                    "https://www.tripadvisor.in/Restaurant_Review-g187069-d32861312-Reviews-Levant_Elixir_Of_Co_existence-Manchester_Greater_Manchester_England.html"
                  }
                  target="_blank"
                >
                  <Icons.unknown className="text-[#fff]" />
                </Link>
                <Link href={"https://g.co/kgs/kfvqUBt"} target="_blank">
                  <Icons.google className="text-[#fff]" />
                </Link>
                <Link
                  href={"https://www.facebook.com/levantelixirofco"}
                  target="_blank"
                >
                  <Icons.facebook className="text-[#fff]" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-end justify-end gap-4 pb-6 md:mt-24 md:items-start md:gap-6">
              <Link
                href={"/"}
                className="font-cinzel text-xs font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Home
              </Link>
              <Link
                href={"/menu"}
                className="font-cinzel text-xs font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Menu
              </Link>

              <Link
                href={"/table-booking"}
                className="font-cinzel text-xs font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Reservation
              </Link>
              <Link
                href={"/contact"}
                className="font-cinzel text-xs font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Contact Us
              </Link>
            </div>{" "}
          </div>
          {/* sub second  div */}
          <div className="flex w-full flex-col items-center gap-2 md:w-[400px] md:items-start md:pt-16">
            <h6 className="font-cinzel text-sm font-[700] uppercase tracking-[2.2px] text-[#fff] md:pb-4">
              Opening Hours
            </h6>
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-6">
              <div className="h-full w-full border-b-[1px] border-b-[#fff]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-cinzel text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  tuesday - Thursday{" "}
                </span>
                <span className="font-cinzel text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  12 AM - 10 PM{" "}
                </span>
              </div>
              <div className="h-full w-full border-b-[1px] border-b-[#fff]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-cinzel text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  Friday - Saturday{" "}
                </span>
                <span className="font-cinzel text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  12 AM - 10:30 PM{" "}
                </span>
              </div>
              <div className="h-full w-full border-b-[1px] border-b-[#fff]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-cinzel text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  Sunday{" "}
                </span>
                <span className="font-cinzel text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  12 AM - 10 PM{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* second  div */}
        <div className="flex flex-col gap-4">
          <div className="h-full w-full border-b-[1px] border-b-[#fff]" />
          <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:items-start md:justify-between">
            <Link href={"https://foodo.ai/"} target="_blank">
              <span className="pb-6 font-cinzel text-xs font-[400] lowercase tracking-[1px] text-[#fff]">
                Powerd by fodo{" "}
              </span>
            </Link>
            <p className="pb-6 font-cinzel text-xs font-[400] lowercase tracking-[1px] text-[#fff]">
              © 2024 lavent ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
