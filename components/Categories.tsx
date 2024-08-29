// "use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { categories } from "@/static";
import Link from "next/link";

export function Categories() {
  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 1,
      }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 body
       "
    >
      <div className="flex items-center justify-between w-full py-3 ">
        <p className=" text-2xl font-bold text-gray-800 body ">Categories</p>

        <div className="text-[#333333] flex items-center gap-4 ">
          <CarouselPrevious className=" border-0 " />
          <CarouselNext className="border-0 bg-white" />
        </div>
      </div>
      <CarouselContent>
        {categories.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-1/1 md:basis-1/2 lg:basis-1/4 rounded-none border-0"
          >
            <Link href="/products" className="p-1 ">
              <Card
                className="flex items-end rounded-[14px] w-[288px] h-[190px] object-cover transform transition-all ease-in-out duration-300 hover:scale-105"
                style={{
                  backgroundImage: `url(/assets/images/categories${item.id}.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <CardContent className="p-2">
                  <span className="body flex text-[18px] p-2 font-semibold bg-white rounded-[5px] ">
                    {item.name}
                  </span>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
