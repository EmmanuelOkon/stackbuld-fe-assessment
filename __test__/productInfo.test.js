
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductInfo from "../components/ProductInfo";

// Mock the Icons component
jest.mock("../public/assets/icon", () => ({
  Icons: {
    Cart: () => <svg data-testid="cart-icon" />,
    Truck: () => <svg data-testid="truck-icon" />,
    Return: () => <svg data-testid="return-icon" />,
  },
}));

// Mock the Image component from next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

const mockProduct = {
  name: "Test Product",
  rating: 4.5,
  price: 1000,
  originalPrice: 1200,
};

describe("ProductInfo", () => {
  test("renders product information correctly", () => {
    render(<ProductInfo {...mockProduct} />);

    // Check that the product name is rendered
    expect(screen.getByText("Test Product")).toBeInTheDocument();

    // Check that the rating is rendered correctly
    expect(screen.getByText("4.5 ratings (3)")).toBeInTheDocument();

    // Check that the price is rendered correctly
    expect(screen.getByText("₦1,000")).toBeInTheDocument();

    // Check that the original price is rendered correctly
    expect(screen.getByText("₦1,200")).toBeInTheDocument();

    // Check that the "Add to cart" button is rendered
    expect(screen.getByText("Add to cart")).toBeInTheDocument();

    // Check that the "Buy Now" button is rendered
    expect(screen.getByText("Buy Now")).toBeInTheDocument();

    // Check that the delivery information is rendered
    expect(screen.getByText("Free Delivery")).toBeInTheDocument();
    expect(
      screen.getByText("Enter your postal code for Delivery Availability")
    ).toBeInTheDocument();

    // Check that the return information is rendered
    expect(screen.getByText("Return Delivery")).toBeInTheDocument();
    expect(
      screen.getByText("Free 30 Days Delivery Returns. Details")
    ).toBeInTheDocument();

    // Check that the icons are rendered
    expect(screen.getByTestId("cart-icon")).toBeInTheDocument();
    expect(screen.getByTestId("truck-icon")).toBeInTheDocument();
    expect(screen.getByTestId("return-icon")).toBeInTheDocument();
  });
});
