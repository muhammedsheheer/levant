import Image from "next/image";

const Hero = ({}) => {
  return (
    // <section
    //   id="hero"
    //   className="flex w-full items-center justify-center bg-[#000] py-6 lg:py-12"
    // >
    //   <div className="relative flex min-h-[100vh] w-full items-center justify-center">
    //     <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
    //       <div className="flex w-full items-center justify-center lg:w-1/2">
    //         <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
    //           <h1 className="font-oswald text-5xl font-semibold leading-[66px] text-[#A8B40A] lg:text-6xl">
    //             Welcome to Levant
    //             <br /> A Symphony of Flavors
    //           </h1>
    //           <p className="font-manrope font-normal text-[#fff]">
    //             At Levant, every dish is a celebration of rich traditions and
    //             bold flavors. From the finest ingredients to time-honored
    //             recipes, we bring you an unforgettable dining experience
    //             inspired by the heart of Middle Eastern and Mediterranean
    //             cuisine. Whether you`re indulging in perfectly grilled kebabs,
    //             savoring aromatic spices, or treating yourself to a sweet
    //             delight, each bite tells a story of authenticity, passion, and
    //             culinary mastery.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex w-full flex-col items-center justify-center gap-6 md:mt-16 lg:w-1/2">
    //         <Image
    //           src="/images/about-us/image1.jpg"
    //           width={951}
    //           height={975}
    //           alt="hero"
    //           className="h-full max-h-[600px] w-full object-cover"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="h-full w-full bg-[url('/images/about-us/about.avif')] px-4 py-8 pt-12 md:px-12 md:py-14">
      <div className="flex flex-col gap-6 pt-56 md:gap-8 md:pt-64">
        <div className="flex flex-col gap-4 font-cinzel text-3xl text-[#A7B40A] md:text-5xl">
          <h1 className="">LEVANT: Elixir of Co-Existence is…</h1>
          <p className="max-w-[1000px] font-cinzel text-base text-[#fff] md:text-xl">
            …a realm of mystique—where time stands still and enchantment reigns
            supreme. Let your senses be serenaded at your table as you embark on
            a culinary voyage, savoring the unique interpretations of classic
            and modern flavors from Meso-Terrania. With every dish, find
            yourself whisked away to the mezze taverns along sunlit
            Mediterranean shores and the communal gardens of ancient
            Mesopotamia, where the essence of slow food culture thrives. The
            most sublime and exotic ingredients from the Meso-Terranean region
            are expertly combined with our spirit and quintessence crafted to
            elevate your dining experience to new heights of pleasure and
            delight. At LEVANT, every bite tells a story, and there is something
            to delight everyone…
          </p>
        </div>
        <div className="flex flex-col gap-4 font-cinzel text-3xl text-[#9B1A86] md:pl-[40%] md:text-5xl">
          <h1 className="">Concept</h1>
          <p className="max-w-[1000px] font-cinzel text-base text-[#fff] md:text-xl">
            Meso-Terranean ethnic cuisine emphasizing a shared dining experience
            that is paired with geo-crafted cocktails. Because we believe that
            ‘Sharing is Caring!’. In a world filled with dystopian narratives,
            LEVANT offers a refreshing reminder of a heavenly, harmonious
            existence on earth.
          </p>
        </div>
        <div className="flex flex-col gap-4 font-cinzel text-3xl text-[#A7B40A] md:text-5xl">
          <h1 className="">Philosophy</h1>
          <p className="max-w-[1000px] font-cinzel text-base text-[#fff] md:text-xl">
            LEVANT is more than just a mere dining venue; it`s a place that
            offers an all-encompassing social experience. Due to the inherent
            complexity of social interactions, an individual does not benefit
            from just one element when socializing. On the contrary, the
            individual engages in an ultimate experience that emerges from a
            fusion of various geographical, socioeconomic, and cultural factors.
            This amalgamation plays a crucial role in shaping the individual’s
            overall social experience. At LEVANT, we embody the essence of a
            utopian community where every member, despite their differences,
            lives together in harmony and peace. Hence, Levant is not merely a
            geographical reference to a region; it embodies a profound symbolic
            doctrine of love, peace, and harmony. In an era dominated by
            mainstream and pop culture’s dystopian creations, we believe the
            world needs a reminder of a utopian, almost heavenly notion—an
            earthly reflection of what’s above.
          </p>
        </div>
        <div className="flex flex-col gap-4 font-cinzel text-3xl text-[#9B1A86] md:pl-[40%] md:text-5xl">
          <h1 className="">Commitment</h1>
          <p className="max-w-[1000px] font-cinzel text-base text-[#fff] md:text-xl">
            We are committed to giving back to the community by extending care
            to charities and initiating tailored social projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
