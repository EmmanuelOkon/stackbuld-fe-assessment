"use client";

import * as React from "react";
import ProductCard from "@/components/ProductCard";
import { LuListFilter } from "react-icons/lu";
import { FiChevronDown } from "react-icons/fi";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { CgUndo } from "react-icons/cg";
import { Product } from "@/interface";

type SortOption = "default" | "ascending" | "descending";

const ProductsPage = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
   React.useEffect(() => {
     const loadProducts = () => {
       try {
         const savedProducts = JSON.parse(
           localStorage.getItem("products") || "[]"
         ) as Product[];
         console.log("Loaded products:", savedProducts); // Log the loaded products
         setProducts(savedProducts);
       } catch (error) {
         console.error("Error loading products from localStorage:", error);
         setProducts([]);
       }
     };

     loadProducts();
   }, []);

  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedCategory, setSelectedCategory] =
    React.useState("All Products");
  const [sortOption, setSortOption] = React.useState<SortOption>("default");
  // const allProducts = React.useMemo(() => products, []);

  const sortedAndFilteredProducts = React.useMemo(() => {
    let filteredProducts =
      selectedCategory === "All Products"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    switch (sortOption) {
      case "ascending":
        return [...filteredProducts].sort((a, b) => a.price - b.price);
      case "descending":
        return [...filteredProducts].sort((a, b) => b.price - a.price);
      default:
        return filteredProducts;
    }
  }, [products, selectedCategory, sortOption]);

  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
    setCurrentPage(1);
  };

  const categoriesList = React.useMemo(() => {
    const allCategories = products.map((product) => product.category);
    return ["All Products", ...Array.from(new Set(allCategories))];
  }, [products]);

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="p-4 body">
      <div className="wrapper ">
        <div className="flex justify-between items-center mb4">
          <h2 className="text-2xl font-bold text-gray-800 body ">
            {selectedCategory}
          </h2>
        </div>
        <div className="lg:max-w-7xl 2xl:max-w-[1560px] mx-auto pb-4">
          <div className="block md:flex items-center justify-between lg:px-2 py-4 border-b border-b-gray-300 ">
            <div className="w-full flex items-center gap-3 justify-between">
              <div className="text-left py-3">
                <span className="body" >
                  {startIndex + 1} - {endIndex} of {totalProducts} results
                </span>
              </div>

              <div className="flex items-center gap-2 ">
                <div
                  onClick={() => handleSortChange("default")}
                  className={`cursor-pointer flex items-center gap-2 border border-gray-200 p-2 rounded ${
                    sortOption === "default"
                      ? "font-semibold text-blue-600"
                      : ""
                  }`}
                >
                  <CgUndo className="w-5 h-5" />
                </div>

                <span className="text-sm">Price:</span>
                <div
                  onClick={() => handleSortChange("ascending")}
                  className={`cursor-pointer flex items-center gap-2 border border-gray-200 p-2 rounded ${
                    sortOption === "ascending"
                      ? "font-semibold text-blue-600"
                      : ""
                  }`}
                >
                  Asc
                  <FaArrowUp />
                </div>
                <div
                  onClick={() => handleSortChange("descending")}
                  className={`cursor-pointer flex items-center gap-2 border border-gray-200 p-2 rounded ${
                    sortOption === "descending"
                      ? "font-semibold text-blue-600"
                      : ""
                  }`}
                >
                  Dsc
                  <FaArrowDown />
                </div>
                <div className="flex items-center gap-3 border border-gray-300 p-2 rounded-md">
                  <Popover>
                    <PopoverTrigger className="flex items-center gap-2 ">
                      <LuListFilter className="cursor-pointer text-[#344054] w-4 h-4 md:h-6 md:w-6 " />
                      <span className="text-[#344054] text-sm cursor-pointer flex-shrink0 ">
                        {selectedCategory}
                      </span>
                      <FiChevronDown className="text-[#667185] cursor-pointer w-4 h-4 md:h-6 md:w-6  " />
                    </PopoverTrigger>
                    <PopoverContent
                      align="end"
                      className="bg-white p-2 border-0 right-0 rounded-md shadow-lg"
                    >
                      <ul>
                        {categoriesList.map((category) => (
                          <li
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100 ${
                              selectedCategory === category
                                ? "font-bold text-blue-600 bg-gray-200 "
                                : ""
                            }`}
                          >
                            {category}
                          </li>
                        ))}
                      </ul>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {sortedAndFilteredProducts
            .slice(startIndex, endIndex)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-1 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
