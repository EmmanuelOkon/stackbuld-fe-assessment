import React from "react";
import { Product } from "@/interface";
import Image from "next/image";
import { Icons } from "@/public/assets/icon";

const ProductInfo: React.FC<Product> = ({
  name,
  rating,
  price,
  originalPrice,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto body">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <div className="flex items-center gap-2 body ">
        <Image
          src="/assets/images/applerate.png"
          width={100}
          height={100}
          alt="test"
          className=" max-w-[83px] h-[15px] "
        />
        <span className="text-sm text-[#FCA617]">
          {rating.toFixed(1)} ratings&nbsp;(3){" "}
        </span>
      </div>

      <div className="mb-4">
        <span className="text-[28px] font-semibold text-[#434343] bodyTwo ">
          ₦{price.toLocaleString()}
        </span>
        {originalPrice && (
          <span className="ml-2 text-sm text-[#333333] line-through">
            ₦{originalPrice.toLocaleString()}
          </span>
        )}
      </div>

      <button className="w-full flex items-center justify-center gap-6 body bg-[#434343] text-white py-4 px-4 rounded-md hover:bg-white hover:text-[#434343] border-2 border-[#434343] transition duration-300 mb-5 font-semibold text-[18px] ">
        <Icons.Cart />
        Add to cart
      </button>

      <button className="w-full flex items-center justify-center gap-6 body bg-white text-[#434343] py-4 px-4 rounded-md hover:bg-[#434343] hover:text-white border-2 border-[#434343] transition duration-300 mb-3 font-semibold text-[18px]">
        Buy Now
      </button>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Icons.Truck className="w-[40px] p-[2px] h-[40px] " />
          <div className="flex flex-col gap-2 body">
            <p>Free Delivery</p>
            <p>Enter your postal code for Delivery Availability</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Icons.Return className="w-[40px] p-[2px] h-[40px] " />
          <div className="flex flex-col gap-2 body">
            <p>Return Delivery</p>
            <p>Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
