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
    const savedProducts: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    const productIndex = savedProducts.findIndex(
      (product) => product.id === id
    );

    if (productIndex === -1) {
      console.error(`Product with id ${id} not found in localStorage`);
      return false;
    }

    savedProducts[productIndex] = {
      ...savedProducts[productIndex],
      ...updatedFields,
    };

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
      toast.error("Failed to update product");
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
    <div
      data-testid="product-card"
      className="flex flex-col justify-between max-h-[437px] shadow bg-white rounded-lg body relative"
    >
      <div className="absolute top-2 right-2 flex space-x-1 z-20 p-2">
        <AlertDialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <AlertDialogTrigger asChild>
            <button
              aria-label="edit"
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
            </AlertDialogHeader>
            <AlertDialogDescription className="text-[#100909] font-medium ">
              <label htmlFor="productName" className="text-sm font-medium py-2">
                Product Name
              </label>
              <Input
                aria-label="Product Name"
                id="productName"
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
              />
            </AlertDialogDescription>
            <AlertDialogDescription className="text-[#100909] font-medium ">
              <label htmlFor="price" className="text-sm font-medium py-2 ">
                Price(₦){" "}
              </label>
              <Input
                aria-label="Price"
                id="price"
                value={newPrice}
                onChange={(e) => setNewPrice(Number(e.target.value))}
              />
            </AlertDialogDescription>
            <AlertDialogDescription className="text-[#100909] font-medium ">
              <label className="text-sm font-medium py-2">Vendor </label>
              <Input
                aria-label="Vendor"
                id="vendor"
                value={newVendor}
                onChange={(e) => setNewVendor(e.target.value)}
              />
            </AlertDialogDescription>
            <AlertDialogDescription className="text-[#100909] font-medium ">
              <label className="text-sm font-medium py-2">Category </label>
              <Input
                aria-label="Category"
                id="category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </AlertDialogDescription>
            <div className="border border-gray-200" />
            <AlertDialogFooter className="flex-col gap-3 mt2">
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
              aria-label="delete"
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
                id="delete"
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
          <h3
            data-testid="product-card"
            className="text-lg font-semibold text-gray-800"
          >
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
