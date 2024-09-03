import React from "react";

import ProductCard from "./ProductCard";
import Link from "next/link";
import { Product } from "@/interface";

const TopDeals: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [triggerRefresh, setTriggerRefresh] = React.useState<boolean>(false);

  React.useEffect(() => {
    const loadProducts = () => {
      try {
        const savedProducts = JSON.parse(
          localStorage.getItem("products") || "[]"
        ) as Product[];
        setProducts(savedProducts);
      } catch (error) {
        console.error("Error loading products from localStorage:", error);
        setProducts([]);
      }
    };

    loadProducts();
  }, [triggerRefresh]);
  const topDeals = products.filter(
    (product) => product.category === "Top Deals"
  );

  return (
    <div className="p-4 py-10 body">
      <div className="wrapper ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 body ">Top Deals</h2>
          <Link href="/products" className="text-blue-600 hover:text-blue-800">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {topDeals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setTriggerRefresh={setTriggerRefresh}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDeals;
