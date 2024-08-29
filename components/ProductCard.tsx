import React from "react";
import { Product } from "@/interface";
import { Icons } from "@/public/assets/icon";
import Image from "next/image";
import Link from "next/link";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";
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

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
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
              <AlertDialogDescription className="text-[#100909] font-medium ">
                This action cannot be undone. This will permanently delete{" "}
                <span className="font-semibold text-red-700 ">{product.name}</span>
                {` `}
                from our database.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-800 hover:bg-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(e);
                }}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <Link
        href={`/customer/product/${product.name
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
        className="overflow-hidden"
      >
        <div className="relative">
          {product.imageUrl && (
            <Image
              width={1000}
              height={1000}
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-gray-600">₦{product.price.toLocaleString()}</p>
          <div className="flex items-center mt-1">
            <Icons.Rating className="text-[#FCA617] w-4 h-4" />
            <span className="ml-1 text-gray-600">
              {product.rating.toFixed(1)}(32){" "}
            </span>
          </div>
        </div>
      </Link>
      <div className="flex border-t border-gray-300 justify-between p-4 mt-1">
        <p className="text-sm text-gray-500 flex flex-col">
          Vendor:
          <span>{product.vendor}</span>{" "}
        </p>
        <p className="text-sm text-gray-500 flex flex-col text-right">
          Category:
          <span>{product.category}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
