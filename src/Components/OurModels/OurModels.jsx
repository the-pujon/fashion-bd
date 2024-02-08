import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";

const OurModels = () => {
  return (
    <div className="my-10 ">
      <MaxWidthWrapper>
        <div className="text-3xl lg:text-7xl text-center">
          Meet our famous <span className="text-primary">Models</span>
        </div>
        <div className="p-5 sm:p-8 h-screen overflow-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -z-10">
            <div className="grid gap-4">
              <div className="relative group h-fit">
                <Image
                  src="/Image/1.jpeg"
                  width={500}
                  height={500}
                  alt="model pic"
                  className="h-auto max-w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-70 rounded-lg transition duration-500 ease-in-out group-hover:opacity-0"></div>
              </div>
              <div className="relative group h-fit">
                <Image
                  src="/Image/13.jpg"
                  width={500}
                  height={500}
                  alt="model pic"
                  className="h-auto max-w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-70 rounded-lg transition duration-500 ease-in-out group-hover:opacity-0"></div>
              </div>
              <div className="relative group h-fit">
                <Image
                  src="/Image/14.jpg"
                  width={500}
                  height={500}
                  alt="model pic"
                  className="h-auto max-w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-70 rounded-lg transition duration-500 ease-in-out group-hover:opacity-0"></div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="relative group h-fit">
                <Image
                  src="/Image/4.avif"
                  width={500}
                  height={500}
                  alt="model pic"
                  className="h-auto max-w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-70 rounded-lg transition duration-500 ease-in-out group-hover:opacity-0"></div>
              </div>
              <div className="relative group h-fit">
                <Image
                  src="/Image/5.jpg"
                  width={500}
                  height={500}
                  alt="model pic"
                  className="h-auto max-w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-70 rounded-lg transition duration-500 ease-in-out group-hover:opacity-0"></div>
              </div>
              <div className="relative group h-fit">
                <Image
                  src="/Image/6.avif"
                  width={500}
                  height={500}
                  alt="model pic"
                  className="h-auto max-w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-70 rounded-lg transition duration-500 ease-in-out group-hover:opacity-0"></div>
              </div>
              <div className="relative group h-fit">
                <Image
                  src="/Image/3.jpg"
                  width={500}
                  height={500}
                  alt="model pic"
                  className="h-auto max-w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-70 rounded-lg transition duration-500 ease-in-out group-hover:opacity-0"></div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="relative group h-fit">
                <Image
                  src="/Image/7.jpg"
                  width={500}
                  height={500}
                  alt="model pic"
                  className="h-auto max-w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-70 rounded-lg transition duration-500 ease-in-out group-hover:opacity-0"></div>
              </div>
              <div className="relative group h-fit">
                <Image
                  src="/Image/8.jpg"
                  width={500}
                  height={500}
                  alt="model pic"
                  className="h-auto max-w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-70 rounded-lg transition duration-500 ease-in-out group-hover:opacity-0"></div>
              </div>
              <div className="relative group h-fit">
                <Image
                  src="/Image/9.jpg"
                  width={500}
                  height={500}
                  alt="model pic"
                  className="h-auto max-w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-70 rounded-lg transition duration-500 ease-in-out group-hover:opacity-0"></div>
              </div>
              <div className="relative group h-fit">
                <Image
                  src="/Image/2.jpg"
                  width={500}
                  height={500}
                  alt="model pic"
                  className="h-auto max-w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-70 rounded-lg transition duration-500 ease-in-out group-hover:opacity-0"></div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="relative group h-fit">
                <Image
                  src="/Image/10.avif"
                  width={500}
                  height={500}
                  alt="model pic"
                  className="h-auto max-w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-70 rounded-lg transition duration-500 ease-in-out group-hover:opacity-0"></div>
              </div>
              <div className="relative group h-fit">
                <Image
                  src="/Image/15.avif"
                  width={500}
                  height={500}
                  alt="model pic"
                  className="h-auto max-w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-70 rounded-lg transition duration-500 ease-in-out group-hover:opacity-0"></div>
              </div>
              <div className="relative group h-fit">
                <Image
                  src="/Image/16.webp"
                  width={500}
                  height={500}
                  alt="model pic"
                  className="h-auto max-w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-70 rounded-lg transition duration-500 ease-in-out group-hover:opacity-0"></div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OurModels;
