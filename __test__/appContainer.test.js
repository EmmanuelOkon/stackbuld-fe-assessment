import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppContainer from "../components/AppContainer";

// Mock the Navbar and Footer components
jest.mock("../components/Navbar", () => {
  const MockNavbar = () => <div data-testid="navbar" />;
  MockNavbar.displayName = "Navbar";
  return MockNavbar;
});
jest.mock("../components/Footer", () => {
  const MockFooter = () => <div data-testid="footer" />;
  MockFooter.displayName = "Footer";
  return MockFooter;
});


describe("AppContainer", () => {
  test("renders Navbar, children, and Footer", () => {
    const childrenText = "Test Children";
    render(
      <AppContainer>
        <div>{childrenText}</div>
      </AppContainer>
    );

    // Check that the Navbar is rendered
    expect(screen.getByTestId("navbar")).toBeInTheDocument();

    // Check that the children are rendered
    expect(screen.getByText(childrenText)).toBeInTheDocument();

    // Check that the Footer is rendered
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
