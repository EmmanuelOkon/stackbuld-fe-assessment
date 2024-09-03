import Image from "next/image";
import React from "react";

export function Hero() {
  return (
    <div className="bg-whit">
      <div className="max-w-[76rem] mx-auto py-10 flex items-center flex-col md:flex-row justify-between px4 lg:px16 px-4 ">
        <div className="w-full body text-[#1E1E1E] flex flex-col gap-3">
          <h1 className="text-[60px] lg:text-[80px] leading-none bodyTwo font-bold ">
            Unleash Your Style!
          </h1>
          <p className="font-semibold text-[18px] max-w-md ">
            Whether you’re looking for fashion, beauty, or home goods, we’ve got
            it all! Explore our extensive range and find everything you need in
            one convenient place.
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image
            src="/assets/images/heroImage3.png"
            width={500}
            height={500}
            alt="heroImage"
            className="w[300px] max- w-[400px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};


