import { Icons } from "@/public/assets/icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppShowcase: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-[70%] mx-auto lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="flex justify-center">
                <Image
                  width={1000}
                  height={1000}
                  src="/assets/images/applePhone.png"
                  alt="stackbuld App on Phone"
                  className="wfull max-wsm mxauto lg:max-h-[585px] w-[286px] "
                />
              </div>
              <div className="bg-white p-3 max-w-[280px] max-h-[67px] rounded-[14px] absolute top-24 right-0 ">
                <div className="flex gap-2 ">
                  <div className="flex items-center gap-2 ">
                    <Image
                      src="/assets/images/appletestimage1.png"
                      width={100}
                      height={100}
                      alt="test"
                      className=" w-[23px] h-[23px] rounded-full"
                    />
                    <div className="flex flex-col gap-1 text-[#333333] max-w-[166px] ">
                      <h1 className="font-bold text-[8px] ">Jonas Sua </h1>
                      <p className="text-[7px] font-normal body ">
                        Viverra ut tellus et tincidunt facilisis ac scelerisque
                        tellus eu. Risus sit tellus elit neque odio elementum
                        nulla.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col max-h-[49px] justify-between ">
                    <Image
                      src="/assets/images/applerate.png"
                      width={100}
                      height={100}
                      alt="test"
                      className=" max-w-[50px] h-[10px] "
                    />
                    <p className="text-[7px] font-normal body ">
                      04 March 2024
                    </p>
                  </div>
                </div>
              </div>

              <div className="max-w-[255px] max-h-[99px] absolute bottom-2 right-28  ">
                <Image
                  src="/assets/tesimonial.svg"
                  width={1000}
                  height={500}
                  className="bg-red-60 p-0 max-w-[255px] max-h-[99px] "
                  alt="two"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold mb-4 body text-[#333333] ">
              Stackbuld App
            </h2>

            <p className="text-gray-600 mb-6 body ">
              Provide a complete digital experience with the feature-rich
              stackbuld iOS and Android mobile apps. Enhance your web
              application powered by stackbuld to provide the distinctive
              stackbuld user experience on multiple platforms.
            </p>
            <p className="text-gray-600 mb-8 body ">
              The buyer app&apos;s flexible policies, interactive features,
              strong performance, and user-friendly UI all work together to
              attract users.
            </p>

            <div className="flex flex-wrap gap-4 poppins ">
              <Link
                href="/"
                className="bg-[#04203D] text-white px-6 py-4 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition duration-300"
              >
                <Icons.GooglePlay />
                Google Play
              </Link>
              <Link
                href="/"
                className="bg-[#04203D] text-white px-6 py-4 rounded-lg gap-3 flex items-center hover:bg-gray-800 transition duration-300"
              >
                <Icons.AppleStore />
                Apple Store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
