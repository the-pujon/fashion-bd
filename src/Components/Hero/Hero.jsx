import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-3 bg-primary/10">
      <MaxWidthWrapper>
        <div className="flex items-center lg:h-screen flex-col-reverse lg:flex-row ">
          <div className="flex-1 flex flex-col gap-4 items-center justify-center lg:items-start text-center lg:text-start">
            <p className="text-base tracking-wide italic">Welcome to <span className="text-primary">Fashion DB</span></p>
            <div className="text-5xl xl:text-7xl">Unleash Your Inner <span className="font-bold text-primary" >Fashionista</span></div>
            <div className="text-xl xl:text-2xl">
              Shop the Hottest Looks at <b className="text-primary" >Fashion DB</b>
            </div>
            <button className="border rounded-none px-5 py-3 bg-transparent w-fit border-primary hover:bg-primary hover:text-secondary transition-all duration-300 active:scale-95">
              Shop Now
            </button>
          </div>
        <div className=" p-3 relative ">
            <div className="rounded-t-full md:rounded-tl-full overflow-hidden p-3 border-dashed xl:border border-primary">
            <Image
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="user picture"
              width={700}
              height={700}
              className="lg:w-[27rem] lg:h-[27rem] xl:w-[37.5rem] xl:h-[37.5rem] rounded-t-full md:rounded-tl-full"
            />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
