import React from "react";
import { VendorInfoProps } from "@/interface";
import Image from "next/image";
import { Icons } from "@/public/assets/icon";

const VendorInfo: React.FC<VendorInfoProps> = ({
  name,
  rating,
  numRatings,
  address,
  phone,
  description,
}) => {
  return (
    <div
      data-testid="vendor-info"
      className="bg-white p-6 rounded-b-[20px] shadow-md max-w-md mx-auto body"
    >
      <h2 className="text-xl body font-semibold text-[#333333]">{name}</h2>
      <p className="text-[16px] body ">Laptop & Tablet</p>
      <div className="flex items-center justify-between body">
        <div className="flex items-center gap-2  ">
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
        <p className="underline">See all reviews</p>
      </div>

      <div className="space-y-3 py-2 ">
        <p className="text-[#333333] text-[16px] font-semibold mb-4 flex items-center gap-4 ">
          <span className="h-[44px] w-[44px] rounded-[5px] bg-[#E4F5E9] flex items-center justify-center ">
            <Icons.VendorChat className="text-5xl w-[18px] h-[17px] " />
          </span>
          Contact Vendor
        </p>
        <p className="text-[#333333] text-[16px] font-semibold mb-4 flex items-center gap-4 ">
          <span className="h-[44px] w-[44px] rounded-[5px] bg-[#E4F5E9] flex items-center justify-center ">
            <Icons.VendorCall className="text-5xl w-[18px] h-[17px] " />
          </span>
          +2340769682025
        </p>
        <p className="text-[#333333] text-[16px] font-semibold mb-4 flex items-center gap-4 ">
          <span className="h-[44px] w-[44px] rounded-[5px] bg-[#E4F5E9] flex items-center justify-center ">
            <Icons.VendorAddress className="w-[18px] h-[24px] " />
          </span>
          <span className="w-[254px] ">{address}</span>
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-bold">About Shop</p>
        {description}

        <p>View Vendor Information</p>
      </div>
    </div>
  );
};

export default VendorInfo;
