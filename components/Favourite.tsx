import React from "react";
import { products } from "@/static";
import ProductCard from "./ProductCard";
import Link from "next/link";

const Favourite: React.FC = () => {
  const bestSeller = products.filter(
    (product) => product.category === "Best Seller"
  );

  return (
    <div className="py-5">
      <div className="wrapper ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 body ">
            Best Seller
          </h2>
          <Link href="/products" className="text-blue-600 hover:text-blue-800">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {bestSeller.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourite;
