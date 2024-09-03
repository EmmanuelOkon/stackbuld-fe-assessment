import Link from "next/link";
import Image from "next/image";
import { Product } from "@/interface";
import { Icons } from "@/public/assets/icon";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";

const VendorProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add your edit logic here
    console.log("Edit clicked for product:", product.id);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add your delete logic here
    console.log("Delete clicked for product:", product.id);
  };

  return (
    <div className="flex flex-col justify-between max-h-[437px] shadow bg-white rounded-lg body relative">
      <div className="absolute top-2 right-2 flex space-x-1 z-20 bg-orange-600 p-2">
        <button
          onClick={handleEdit}
          className="p-1 bg-white text-[#333333] hover:text-blue-400 rounded-full shadow"
        >
          <BiEditAlt />
        </button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button
              onClick={(e) => e.stopPropagation()}
              className="p-1 bg-white text-red-600 hover:text-red-900 rounded-full shadow"
            >
              <MdOutlineDeleteForever />
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent onClick={(e) => e.stopPropagation()}>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(e);
                }}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <Link
        href={`/customer/product/${product.name
          .replace(/\s+/g, "-")
          .toLowerCase()} `}
        className="bg-white shadow rounded-lg overflow-hidden body"
      >
        <div className="relative">
          {product.imageUrl && (
            <Image
              width={1000}
              height={1000}
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
          )}

          <div className="absolute top-2 right-2 flex space-x-1">
            <button className="p-1 bg-white rounded-full shadow">
              <Image
                src="/assets/heartIcon.svg"
                className="w-4 h-4"
                alt="heart icon"
                width={100}
                height={100}
              />
            </button>
            <button className="p-1 bg-white rounded-full shadow">
              <Icons.Cart className="text-[#333333] hover:text-black " />
            </button>
          </div>
        </div>
        <div className="p-2">
          <h3 className="text-[11px] font-bold text-gray-800 body ">
            {product.name}
          </h3>
          <p className="text-gray-600 body font-bold ">
            ₦{product.price.toLocaleString()}
          </p>
          <div className="flex items-center mt-1">
            <Icons.Rating className="text-[#FCA617] w-4 h-4  " />
            <span className="ml-1 text-gray-600">
              {product.rating.toFixed(1)}(32){" "}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            <span className="font-semibold">Vendor:</span>
            {` `}
            {product.vendor}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default VendorProductCard;
