import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";


describe("Home Component", () => {
  test("renders welcome message and icons", () => {
    const { getByText } = render(<Home />);
    // Test for the welcome message
    const welcomeMessage = getByText("Hello World! welcome to Electro web app");
    expect(welcomeMessage).toBeInTheDocument();
  });
});
