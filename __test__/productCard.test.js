import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "@/components/ProductCard";
import { toast } from "sonner";
import { products } from "@/static";

const mockProduct = {
  id: 1,
  name: "Test Product",
  price: 100,
  vendor: "Test Vendor",
  category: "Test Category",
  imageUrl: "/test-image.png",
  rating: 4.5,
};

const mockSetTriggerRefresh = jest.fn();
jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
  },
}));

describe("ProductCard Component", () => {
  beforeEach(() => {
    localStorage.setItem("products", JSON.stringify([products[0]]));
  });

  afterEach(() => {
    localStorage.clear();
  });

  // Test if a product card is deleted successfully
  test("should successfully delete a product", () => {
    render(
      <ProductCard
        product={mockProduct}
        setTriggerRefresh={mockSetTriggerRefresh}
      />
    );

    const initialProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    const initialProductCount = initialProducts.length;

    const deleteButton = screen.getByLabelText("delete");
    fireEvent.click(deleteButton);

    const confirmDeleteButton = screen.getByText("Delete");
    fireEvent.click(confirmDeleteButton);

    const productsAfterDeletion = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    expect(productsAfterDeletion).toHaveLength(initialProductCount - 1);

    expect(toast.success).toHaveBeenCalledWith("One product deleted");

    expect(mockSetTriggerRefresh).toHaveBeenCalledWith(true);
  });

  // Test if the product card is rendered correctly
  test("renders product information correctly", () => {
    render(
      <ProductCard
        product={mockProduct}
        setTriggerRefresh={mockSetTriggerRefresh}
      />
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(
      screen.getByText(`₦${mockProduct.price.toLocaleString()}`)
    ).toBeInTheDocument();
    expect(screen.getByText(mockProduct.vendor)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProduct.rating.toFixed(1)}(32)`)
    ).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.name)).toHaveAttribute(
      "alt",
      mockProduct.name
    );
  });

  // Test if the edit dialog is opened when the edit button is clicked
  test("opens edit dialog when edit button is clicked", () => {
    render(
      <ProductCard
        product={mockProduct}
        setTriggerRefresh={mockSetTriggerRefresh}
      />
    );

    fireEvent.click(screen.getByLabelText("edit"));
    expect(screen.getByText(/edit product/i)).toBeInTheDocument();
  });

  // Test if the product is updated in localStorage when edited
  test("updates product in localStorage when edited", () => {
    render(
      <ProductCard
        product={mockProduct}
        setTriggerRefresh={mockSetTriggerRefresh}
      />
    );

    fireEvent.click(screen.getByLabelText("edit"));

    fireEvent.change(screen.getByRole("textbox", { name: /product name/i }), {
      target: { value: "Updated Product Name" },
    });

    fireEvent.click(screen.getByText(/update/i));

    const savedProducts = JSON.parse(localStorage.getItem("products"));
    expect(savedProducts[0].name).toBe("Updated Product Name");
  });
});
