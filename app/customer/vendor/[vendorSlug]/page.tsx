"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { reviews, vendors } from "@/static";

import RatingDistribution from "@/components/RatingDistribution";
import ReviewCard from "@/components/ReviewCard";

import VendorInfo from "@/components/VendorInfo";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/interface";

const VendorDetails = () => {
  const { vendorSlug } = useParams();
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
  const vendor = vendors.find(
    (p) => p.name.replace(/\s+/g, "-").toLowerCase() === vendorSlug
  );

  const vendorProducts = vendor
    ? products.filter((product) => product.vendor === vendor.name)
    : [];

  if (!vendor) {
    return <div>Vendor not found.</div>;
  }

  const ratingsData = [
    { stars: 5, count: 10 },
    { stars: 4, count: 120 },
    { stars: 3, count: 90 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ];
  const totalReviews = 220;
  const averageRating = 4.5;

  return (
    <div className="wrapper pt-10" data-testid="vendor-info">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6  ">
        <div
          data-testid="vendor-info"
          className="  flex flex-col w-full max-w-[395px] rounded-[20px]"
        >
          {vendor.avatarUrl && (
            <Image
              width={1000}
              height={1000}
              src={vendor.avatarUrl}
              alt={vendor.name}
              className="rounded-t-[20px]"
            />
          )}

          <VendorInfo
            name={vendor.name}
            rating={4.7}
            numRatings={32}
            address="Badagry-Eko Palaentary Hotel, Victoria Island, Lagos"
            phone="+2347069682025"
            description="This shop is a proud, independent and trustworthy electronics store that strives to provide the best quality products to its customers. Today, they offer a wide range of products such as cell phones, tablets, and computers."
          />
        </div>

        <div className="w-full lg:w-[821px] ">
          <div className="flex justify-between font-semibold  body text-[#333333] pb-4 ">
            <h2 className="text-base lg:text-2xl font-bold text-gray-800">
              Products from {vendor.name}
            </h2>
            <Link href="/products" className="hover:underline hover:text-purple-600">Other products</Link>
          </div>
          <div className="gap-6 flex flex-col">
            <div className=" rounded-[15px] ">
              <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
                data-testid="product-card"
              >
                {vendorProducts.slice(0, 8).map((vendor) => (
                  <ProductCard
                    key={vendor.id}
                    product={vendor}
                    setTriggerRefresh={setTriggerRefresh}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-[15px]  ">
              <h1 className="font-semibold text-[24px] pb-2 body ">
                Customers Review
              </h1>
              <RatingDistribution
                ratings={ratingsData}
                totalReviews={totalReviews}
                averageRating={averageRating}
              />
            </div>

            <div className="w-full grd ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review, index) => (
                  <ReviewCard
                    key={index}
                    name={review.name}
                    role={review.role}
                    review={review.review}
                    rating={review.rating}
                    avatarUrl={review.avatarUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 body ">
            Products from same vendor
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {vendorProducts.slice(8).map((vendor) => (
            <ProductCard
              key={vendor.id}
              product={vendor}
              setTriggerRefresh={setTriggerRefresh}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
