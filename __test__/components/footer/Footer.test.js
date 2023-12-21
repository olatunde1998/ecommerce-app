import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/footer/Footer";

describe("Footer Component", () => {
  test("renders welcome message and icons", () => {
    const { getByText } = render(<Footer />);
    // Test for the welcome message
    const welcomeMessage = getByText("Footer");
    expect(welcomeMessage).toBeInTheDocument();
  });
});
