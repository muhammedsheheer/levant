"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import Special from "./(section)/(special)/Special";
import Reviews from "./(section)/Review";
import Story from "./(section)/Story";
import Reserve from "./(section)/Reserve";
import Follow from "./(section)/Follow";
import Highlights from "./(section)/Highlights";
import Levant from "./(section)/Levant";
import Offer from "./(section)/Offer";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <Hero />
        <Reserve />
        <Story />
        <Highlights />
        <Special />
        {/* <Levant /> */}
        <Offer />
        <Reviews />
        <Follow />
        <Footer />
      </div>
      {/* <div className="fixed bottom-6 right-10 z-50 hidden md:block">
        <Link href={"/table-booking"}>
          <Image
            src={"/images/home/hero/round.png"}
            width={281}
            height={74}
            alt="logo"
            className="w-32"
          />
        </Link>
      </div> */}
    </main>
  );
}
