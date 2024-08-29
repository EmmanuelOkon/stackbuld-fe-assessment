import { Icons } from "@/public/assets/icon";
import { navigation } from "@/static";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 body">
      <div className="wrapper ">
        <div className="flex flex-col md:flex-row grid-cols-1 md:grid-cols-3 justify-between ">
          <div className="mb-6 md:mb-0 text-left md:text-left md:col-span-1 ">
            <Link href="/" className="font-bold text-blue-600">
              <Icons.Logo />
            </Link>
            <div className="text-sm w-full md:w-2/3 py-4">
              <p className="pb-3">
                Crafting beautiful and functional products for your business.
              </p>
              <p>12, Ring Road, Kings Estate, Ajah, Lagos, Nigeria</p>
            </div>

            <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded">
              Register your Dispatch Company
            </button>
          </div>

          <div className="flex flex-wrap md:grid grid-col-1 md:grid-cols-3 gap-10 md:space-x-8 col-span-3 md:justify-end ">
            <div className="text-left col-span-1">
              <h2 className="font-semibold mb-2">Stackbuld</h2>

              <ul className="text-sm flex flex-col space-y-2">
                {navigation.stackbuld.map((item) => {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="hover:text-gray-800"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </ul>
            </div>

            <div className="col-span-1">
              <h2 className="font-semibold mb-2">Support</h2>
              <ul className="text-sm  flex flex-col space-y-2">
                {navigation.support.map((item) => {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="hover:text-gray-800"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Resources</h2>
              <ul className="text-sm flex flex-col space-y-2">
                {navigation.resources.map((item) => {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="hover:text-gray-800"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col-reverse md:flex-row justify-between items-center text-sm border-t pt-4">
          <div className="">
            <p className="text-left md:text-left">
              © 2024 Starkbuld. All Rights Reserved.
            </p>
          </div>
          <div className="flex w-full justify-between md:items-center md:gap-[5rem] md:justify-end mb-4 md:mb-0">
            <div className="flex justify-start itemscenter gap-2 md:gap-5 ">
              {navigation.social.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link href={item.href} key={item.name}>
                    <IconComponent className="w-5 h-5 hover:text-gray-800 " />
                  </Link>
                );
              })}
            </div>
            <div className="flex justify-center md:justify-end gap-2 md:gap-0 md:space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                $ USD
              </a>
              <Link href="#"></Link>
              <a
                href="#"
                className="flex items-center  gap-2 text-gray-600 hover:text-gray-800"
              >
                <Icons.Globe />
                English
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
