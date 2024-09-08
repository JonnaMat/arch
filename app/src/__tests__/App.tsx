import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Arch text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Arch/);
  expect(linkElement).toBeInTheDocument();
});
