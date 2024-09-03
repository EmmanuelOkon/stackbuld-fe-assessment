"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { useParams } from "next/navigation";

import { reviews } from "@/static";
import ProductInfo from "@/components/ProductInfo";

import VendorCard from "@/components/VendorCard";
import RatingDistribution from "@/components/RatingDistribution";
import ReviewCard from "@/components/ReviewCard";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/interface";

const ProductDetail = () => {
  const { productSlug } = useParams();
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

  const product = products.find(
    (p) => p.name.replace(/\s+/g, "-").toLowerCase() === productSlug
  );

  if (!product) {
    return <div>Product not found.</div>;
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
    <div className="wrapper pt-10">
      <div className="flex justify-between gap-6  ">
        <div className="w-full lg:w-[821px] ">
          <div className="gap-6 flex flex-col">
            <div className="bg-white rounded-[15px] ">
              {product.imageUrl && (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={3500}
                  height={3500}
                  className="flex items-end rounded-[14px] mx-auto my-10 max-w-[600px] max-h-[517px] object-cover"
                />
              )}
              <div className="text-[#333333] body px-8 py-3 ">
                <p className="font-semibold text-[21px] pb-2  ">
                  Product Details
                </p>
                <p className="py-4 text-[16px] text-justify ">
                  {`The system features the ${product.name}, which provides
              the power and performance needed to handle your professional
              workflows. The 16.2" Liquid Retina XDR display features a 3456 x
              2234 resolution, 1000 nits of sustained brightness, 1600 nits of
              peak brightness, P3 color gamut support, and more. With up to 32GB
              of Unified RAM and 1TB of SSD storage, you'll be able to load
              massive files and launch apps quickly, enabling you to work with
              photo and video libraries from almost anywhere.`}
                </p>
                <p className="pb-2">
                  {`The 13-inch MacBook Pro is more capable than ever. Supercharged by
              the next-generation M2 chip, it's Apple's most portable pro
              laptop, with up to 20 hours of battery life.`}
                </p>
                <p className="font-semibold text-[21px] pt-3 pb-2  ">
                  Product Specification
                </p>
                <li className="list-none font-semibold">
                  Model:{" "}
                  <span className="text-[16px] font-normal">MNWA3LL/A </span>{" "}
                </li>
                <li className="list-none font-semibold">
                  Size (L x W x H cm):{" "}
                  <span className="text-[16px] font-normal">
                    {`14 x 9.77 x 0.66" / 35.57 x 24.81 x 1.68 cm`}
                  </span>{" "}
                </li>
                <li className="list-none font-semibold">
                  Weight (kg):{" "}
                  <span className="text-[16px] font-normal">3Kg </span>{" "}
                </li>
                <li className="list-none font-semibold">
                  Color: <span className="text-[16px] font-normal">Grey </span>{" "}
                </li>
                <li className="list-none font-semibold">
                  Screen Size:{" "}
                  <span className="text-[16px] font-normal">13.3 in </span>{" "}
                </li>
                <li className="list-none font-semibold">
                  Processor Type:{" "}
                  <span className="text-[16px] font-normal">M2 </span>{" "}
                </li>
                <li className="list-none font-semibold">
                  RAM Memory:{" "}
                  <span className="text-[16px] font-normal">8 GB </span>{" "}
                </li>
                <li className="list-none font-semibold">
                  Hard Drive Capacity:{" "}
                  <span className="text-[16px] font-normal">256 GB </span>{" "}
                </li>
                <li className="list-none font-semibold">
                  Processor Speed:{" "}
                  <span className="text-[16px] font-normal">3.46 GHz </span>{" "}
                </li>
                <p className="font-semibold text-[21px] pt-3 pb-2 ">
                  Product Warranty
                </p>
                <p className="text-[16px] text-justify ">
                  This product comes with a minimum 1-year warranty direct from
                  either the Manufacturer(s), a Manufacturer-Authorized or Other
                  Qualifying Seller or Supplier.
                </p>

                <p className="font-semibold text-[21px] pt-3 pb-2 ">
                  Product Return Policy
                </p>
                <p className="text-[16px] text-justify ">
                  Free return within 7 days for ALL eligible items.
                </p>
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

        <div className="flex flex-col gap-5 max-w-[395px] rounded-[15px] space-y-4 ">
          <ProductInfo
            name={product.name}
            rating={product.rating}
            price={product.price}
            category={product.category}
            originalPrice={product.originalPrice}
          />

          <VendorCard
            name={product.vendor}
            shopName="Gadgets Shop"
            rating={4.5}
            totalRatings={3}
            distance={2.07}
            freeDelivery={true}
          />
        </div>
      </div>
      <div className="pt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 body ">
            Similar items you might like
          </h2>
          <Link href="/products" className="text-blue-600 hover:text-blue-800">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.slice(0, 10).map((product) => (
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

export default ProductDetail;
