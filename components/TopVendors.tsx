import React from "react";
import { vendors } from "@/static";
import Link from "next/link";

interface VendorImage {
  avatarUrl: string;
  name: string;
  id: number;
}

const VendorCard: React.FC<{ vendor: VendorImage }> = ({ vendor }) => (
  <Link
    href={`/customer/vendor/${vendor.name.replace(/\s+/g, "-").toLowerCase()} `}
  >
    <div className="shadow rounded-md overflow-hidden block w-auto xl:w-[395px] h-[265px] grayscale hover:grayscale-0 transition-all ease-in-out duration-300">
      <div
        className="flex items-end rounded-md w-full h-[265px] object-cover transform transition-transform duration-300 ease-in-out"
        style={{
          backgroundImage: `url(/assets/images/topVendor${vendor.id}.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <span className="bg-white p-2 m-2 rounded-md font-semibold ">
          {vendor.name}
        </span>
      </div>
    </div>
  </Link>
);

const TopVendors: React.FC = () => {
  return (
    <div className="wrapper body py-5 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Top Vendors</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {vendors.map((vendor) => (
          <div key={vendor.name}>
            <VendorCard vendor={vendor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopVendors;
