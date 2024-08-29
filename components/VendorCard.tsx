import { VendorCardProps } from "@/interface";
import { Icons } from "@/public/assets/icon";
import Image from "next/image";

const VendorCard: React.FC<VendorCardProps> = ({
  name,
  shopName,
  rating,
  totalRatings,
  distance,
  freeDelivery,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto body">
      <div className="flex items-start gap-3 ">
        <Image
          width={100}
          height={100}
          src="/assets/images/vendor.png"
          alt={name!}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div className="">
          <div className=" body text-[#333333]">
            <h2 className="text-lg font-semibold  ">{name}</h2>
            <p className=" flex items-center gap-2 ">
              <Icons.ShopIcon />
              {shopName}
            </p>
          </div>
          <div className="flex items-center mt-1">
            <div className="flex items-center">
              <Image
                src="/assets/images/applerate.png"
                width={100}
                height={100}
                alt="test"
                className=" max-w-[83px] h-[15px] "
              />
            </div>
            <span className="text-[#FCA617] ml-1 text-sm">
              {rating.toFixed(1)}
            </span>
            <span className="text-[#FCA617] text-sm ml-2">
              ({totalRatings})
            </span>
          </div>
          <a
            href="#"
            className="text-[#333333] text-sm body underline mt-1 block"
          >
            View Vendor Information
          </a>
        </div>
      </div>

      <div className=" flex body justify-between w-full divide-x-2 divide-gray-200 items-center mt-4">
        <div className="flex body items-center text-sm">
          {freeDelivery && (
            <div className="flex items-start gap-2 ">
              <Icons.DeliveryCup />
              <div className="flex flex-col ">
                Free
                <p className="text-[#474E63] ">Delivery</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-start gap-2">
          <Icons.Location />
          <div className="flex flex-col ">
            {distance?.toFixed(2)} Km
            <p className="text-[#474E63] ">Distance</p>
          </div>
        </div>
        <div className="flex items-start gap-2 ">
          <Icons.VendorStar />
          <div className="flex flex-col ">
            {rating}
            <p className="text-[#474E63] ">({totalRatings}+ Ratings)</p>
          </div>
        </div>
      </div>

      <button className="mt-3 w-full flex items-center justify-center gap-6 body bg-[#434343] text-white py-4 px-4 rounded-md hover:bg-white hover:text-[#434343] border-2 border-[#434343] transition duration-300 font-semibold text-[18px] ">
        Follow
      </button>
    </div>
  );
};

export default VendorCard;
