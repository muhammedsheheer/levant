"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 h-[10vh] w-full pt-4 md:pt-10`,
        pathname === "/" ? "bg-transparent" : "pt-4 md:pt-5",
      )}
    >
      {/*big screen */}
      <div className="hidden px-4 md:block md:px-12">
        <div className="flex flex-row items-center justify-between">
          <div></div>
          <div className="flex flex-row items-center justify-center gap-20">
            <Link
              href={"/"}
              className={
                pathname === "/"
                  ? "font-manrope text-center text-xs font-[600] uppercase tracking-[0.96px] text-[#fff]"
                  : "font-manrope text-center text-xs font-[600] uppercase tracking-[0.96px] text-[#000]"
              }
            >
              Home
            </Link>
            <Link
              href={"/table-booking"}
              className={
                pathname === "/"
                  ? "font-manrope text-center text-xs font-[600] uppercase tracking-[0.96px] text-[#fff]"
                  : "font-manrope text-center text-xs font-[600] uppercase tracking-[0.96px] text-[#000]"
              }
            >
              Booking
            </Link>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-20"
              />
            </Link>
            <Link
              href={"/about-us"}
              className={
                pathname === "/"
                  ? "font-manrope text-center text-xs font-[600] uppercase tracking-[0.96px] text-[#fff]"
                  : "font-manrope text-center text-xs font-[600] uppercase tracking-[0.96px] text-[#000]"
              }
            >
              About
            </Link>

            <Link
              href={"/contact"}
              className={
                pathname === "/"
                  ? "font-manrope text-center text-xs font-[600] uppercase tracking-[0.96px] text-[#fff]"
                  : "font-manrope text-center text-xs font-[600] uppercase tracking-[0.96px] text-[#000]"
              }
            >
              Contact
            </Link>
            <div className="ml-24 mr-24">
              <Link href={"/menu"}>
                <Button
                  className={
                    pathname === "/"
                      ? "font-sofia_sans rounded-none border border-[#fff] bg-[#fff] px-8 py-5 text-xs font-[700] uppercase text-[#000] hover:bg-[#638D39] hover:text-[#fff]"
                      : "font-sofia_sans rounded-none border border-[#000] bg-[#000] px-8 py-5 text-xs font-[700] uppercase text-[#fff] hover:bg-[#638D39] hover:text-[#fff]"
                  }
                >
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block px-4 md:hidden md:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-14"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate text-[#C0A58A]">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
