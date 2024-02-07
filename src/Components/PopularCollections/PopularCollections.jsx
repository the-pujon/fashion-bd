import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Image from 'next/image';

const PopularCollections = () => {
  return (
    <div className="py-10">
      <MaxWidthWrapper>
        <div className="lg:text-7xl text-center py-5">
          Check Our Popular <span className="text-primary">Collections</span>
        </div>
        <div className="grid grid-rows-3 md:grid-rows-4 grid-flow-col h-screen gap-2">
          {/* man */}
          <div
            className="col-span-1 row-span-1 md:row-span-2 w-full h-full p-5 flex flex-col gap-2"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.6) , rgba(225, 29, 72, 0.1)), url('/Image/mens-Collections.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-xl text-primary">Fashion DB</div>
            <div className="text-7xl">From Casual to Formal.</div>
            <div className="text-3xl">
              Find Your Perfect Look in Our Men&apos;s Fashion Range
            </div>
            <button className="border rounded-none px-5 py-3 bg-transparent w-fit border-primary hover:bg-primary hover:text-secondary transition-all duration-300 active:scale-95">
              Shop Now
            </button>
          </div>

          {/* women */}
          <div
            className="col-span-1 row-span-1 md:row-span-2 w-full h-full p-5 flex flex-col gap-2"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.6), rgba(225, 29, 72, 0.1)), url('/Image/women-collection.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-xl text-primary">Fashion DB</div>
            <div className="text-7xl">Unleash Your Inner Goddess</div>
            <div className="text-3xl">
            Discover Chic Styles in Our Women&apos;s Collection
            </div>
            <button className="border rounded-none px-5 py-3 bg-transparent w-fit border-primary hover:bg-primary hover:text-secondary transition-all duration-300 active:scale-95">
              Shop Now
            </button>
          </div>

          {/* Kids */}
          <div
            className="col-span-1 row-span-1 md:row-span-4 w-full h-full p-5 flex flex-col gap-4"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.6), rgba(225, 29, 72, 0.1)), url('/Image/kids-collection.avif')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-xl text-primary">Fashion DB</div>
            <div className="text-7xl">Cute Comes First </div>
            <div className="text-3xl">
            Dress Your Little Ones in Our Adorable Kid&apos;s Collection
            </div>
            <button className="border rounded-none px-5 py-3 bg-transparent w-fit border-primary hover:bg-primary hover:text-secondary transition-all duration-300 active:scale-95">
              Shop Now
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default PopularCollections;
