import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import VendorDetails from "../app/customer/vendor/[vendorSlug]/page";
import { useParams } from "next/navigation";
import { vendors } from "@/static";

// Mock the useParams hook
jest.mock("next/navigation", () => ({
  useParams: jest.fn(),
}));

// Mock the components used in VendorDetails
jest.mock("../components/RatingDistribution", () => {
  const MockRatingDistribution = (props) => (
    <div data-testid="rating-distribution">
      Rating Distribution: {props.totalReviews} reviews, Average Rating:{" "}
      {props.averageRating}
    </div>
  );
  MockRatingDistribution.displayName = "RatingDistribution";
  return MockRatingDistribution;
});

jest.mock("../components/ReviewCard", () => {
  const MockReviewCard = (props) => (
    <div data-testid="review-card">
      Review by {props.name}: {props.review}
    </div>
  );
  MockReviewCard.displayName = "ReviewCard";
  return MockReviewCard;
});

jest.mock("../components/VendorInfo", () => {
  const MockVendorInfo = (props) => (
    <div data-testid="vendor-info">
      Vendor Info: {props.name}, Rating: {props.rating}
    </div>
  );
  MockVendorInfo.displayName = "VendorInfo";
  return MockVendorInfo;
});

jest.mock("../components/ProductCard", () => {
  const MockProductCard = (props) => (
    <div data-testid="product-card">Product: {props.product.name}</div>
  );
  MockProductCard.displayName = "ProductCard";
  return MockProductCard;
});

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

describe("VendorDetails", () => {
  beforeEach(() => {
    (useParams).mockReturnValue({ vendorSlug: "test-vendor" });

    // Mock the vendors array
    vendors.push({
      name: "Test Vendor",
      avatarUrl: "/path/to/avatar.jpg",
    });

    localStorage.setItem(
      "products",
      JSON.stringify([
        { id: 1, name: "Product 1", vendor: "Test Vendor" },
        { id: 2, name: "Product 2", vendor: "Test Vendor" },
        { id: 3, name: "Product 3", vendor: "Test Vendor" },
        { id: 4, name: "Product 4", vendor: "Test Vendor" },
        { id: 5, name: "Product 5", vendor: "Test Vendor" },
        { id: 6, name: "Product 6", vendor: "Test Vendor" },
        { id: 7, name: "Product 7", vendor: "Test Vendor" },
        { id: 8, name: "Product 8", vendor: "Test Vendor" },
        { id: 9, name: "Product 9", vendor: "Test Vendor" },
        { id: 10, name: "Product 10", vendor: "Test Vendor" },
      ])
    );
  });

  afterEach(() => {
    localStorage.clear();
  });

  test("renders vendor name correctly", () => {
    render(<VendorDetails />);

    // Check that the vendor name is rendered
    expect(screen.getByText("Products from Test Vendor")).toBeInTheDocument();
  });
});