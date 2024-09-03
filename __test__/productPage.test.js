import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductDetail from "../app/customer/product/[productSlug]/page";


jest.mock("next/navigation", () => ({
  useParams: () => ({ productSlug: "test-product" }),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

describe("ProductDetail", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders product details from localStorage", () => {
    const mockProduct = {
      id: "1",
      name: "Test Product",
      price: 999.99,
      category: "Electronics",
      originalPrice: 1299.99,
      rating: 4.5,
      vendor: "Test Vendor",
      imageUrl: "/test-image.jpg",
    };

    localStorage.setItem("products", JSON.stringify([mockProduct]));

    render(<ProductDetail />);
  });

  it('displays "Product not found" when product is not in localStorage', () => {
    render(<ProductDetail />);

    expect(screen.getByText("Product not found.")).toBeInTheDocument();
  });
});
