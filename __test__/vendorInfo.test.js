import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import VendorInfo from "../components/VendorInfo";

jest.mock("../public/assets/icon", () => ({
  Icons: {
    VendorChat: () => <svg data-testid="vendor-chat-icon" />,
    VendorCall: () => <svg data-testid="vendor-call-icon" />,
    VendorAddress: () => <svg data-testid="vendor-address-icon" />,
  },
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

const mockProps = {
  name: "Test Vendor",
  rating: 4.5,
  numRatings: 3,
  address: "123 Test Street",
  phone: "+2340769682025",
  description: "This is a test description for the vendor.",
};

describe("VendorInfo", () => {
  test("renders vendor information correctly", () => {
    render(<VendorInfo {...mockProps} />);

    expect(screen.getByText("Test Vendor")).toBeInTheDocument();

    expect(screen.getByText("4.5 ratings (3)")).toBeInTheDocument();

    expect(screen.getByText("123 Test Street")).toBeInTheDocument();

    expect(screen.getByText("+2340769682025")).toBeInTheDocument();

    expect(
      screen.getByText("This is a test description for the vendor.")
    ).toBeInTheDocument();

    expect(screen.getByTestId("vendor-chat-icon")).toBeInTheDocument();
    expect(screen.getByTestId("vendor-call-icon")).toBeInTheDocument();
    expect(screen.getByTestId("vendor-address-icon")).toBeInTheDocument();
  });
});
