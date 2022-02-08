import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders logo", () => {
  render(<App />);
  const logo = screen.getByRole("img");
  expect(logo).toHaveAttribute("alt", "logo");
});

test("renders form", () => {
  render(<App />);
  const formHeading = screen.getByText("Goodlord Referencing Form");
  expect(formHeading).toBeInTheDocument();
});
