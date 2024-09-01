import * as React from "react";
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
import { toast } from "sonner";
import { Input } from "./ui/input";

export function editProductInLocalStorage(
  id: number,
  updatedFields: Partial<Product>
): boolean {
  try {
    // Retrieve the current products from localStorage
    const savedProducts: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    // Find the index of the product to edit
    const productIndex = savedProducts.findIndex(
      (product) => product.id === id
    );

    // If the product is not found, return false
    if (productIndex === -1) {
      console.error(`Product with id ${id} not found in localStorage`);
      return false;
    }

    // Update the product with the new fields
    savedProducts[productIndex] = {
      ...savedProducts[productIndex],
      ...updatedFields,
    };

    // Save the updated products back to localStorage
    localStorage.setItem("products", JSON.stringify(savedProducts));

    console.log(`Product with id ${id} updated successfully`);
    return true;
  } catch (error) {
    console.error("Error updating product in localStorage:", error);
    return false;
  }
}

const ProductCard: React.FC<{
  product: Product;
  setTriggerRefresh: (arg0: boolean) => void;
}> = ({ product, setTriggerRefresh }) => {
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const [isEditOpen, setIsEditOpen] = React.useState(false);
  const [newProductName, setNewProductName] = React.useState(product.name);
  const [newPrice, setNewPrice] = React.useState(product.price);
  const [newVendor, setNewVendor] = React.useState(product.vendor);
  const [newCategory, setNewCategory] = React.useState(product.category);

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const success = editProductInLocalStorage(product.id as number, {
      name: newProductName,
      price: newPrice,
      vendor: newVendor,
      category: newCategory,
    });

    if (success) {
      toast.success("Product updated successfully");
      setTriggerRefresh(true);
    } else {
      toast("Failed to update product");
    }
    setIsEditOpen(false);
    console.log("Edit clicked for product:", product.id);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success("One product deleted");
    const savedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    const updatedProducts = savedProducts.filter(
      (p: Product) => p.id !== product.id
    );
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    console.log("Delete clicked for product:", product.id);
    setIsDialogOpen(false);
    setTriggerRefresh(true);
  };

  return (
    <div className="flex flex-col justify-between max-h-[437px] shadow bg-white rounded-lg body relative">
      <div className="absolute top-2 right-2 flex space-x-1 z-20 p-2">
        <AlertDialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <AlertDialogTrigger asChild>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsEditOpen(true);
              }}
              className="p-1 bg-white text-[#333333] hover:text-blue-400 rounded-full shadow"
            >
              <BiEditAlt />
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent onClick={(e) => e.stopPropagation()}>
            <AlertDialogHeader>
              <AlertDialogTitle className="py-2">Edit Product</AlertDialogTitle>

              <h2 className="text-sm font-medium ">Product Name</h2>
              <Input
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
              />
            </AlertDialogHeader>
            <AlertDialogDescription className="text-[#100909] font-medium ">
              <p>Price </p>
              <Input
                value={newPrice}
                onChange={(e) => setNewPrice(Number(e.target.value))}
              />
            </AlertDialogDescription>
            <AlertDialogDescription className="text-[#100909] font-medium ">
              <p>Vendor </p>
              <Input
                value={newVendor}
                onChange={(e) => setNewVendor(e.target.value)}
              />
            </AlertDialogDescription>
            <AlertDialogDescription className="text-[#100909] font-medium ">
              <p>Category </p>
              <Input
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-green-800 hover:bg-green-500"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(e);
                }}
              >
                Update
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogTrigger asChild>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsDialogOpen(true);
              }}
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
                <span className="font-semibold text-red-700 ">
                  {product.name}
                </span>
                {` `}
                from our database.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
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
