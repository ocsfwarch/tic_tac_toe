import { render, within } from "@testing-library/react";
import { Welcome } from "../Components/Welcome";

// The purpose of this test is to verify the welcome
// component renders correctly and includes all the
// required elements.
test("renders the Welcome component", () => {
  const { container } = render(<Welcome />);
  const testElement = container.querySelector("div.welcome");
  expect(testElement).toBeInTheDocument();
  const h1Element = within(testElement).getByText("Tic-Tac-Toe");
  expect(h1Element).toBeInTheDocument();
  const pElement = container.querySelector("p");
  expect(pElement).toBeInTheDocument();
});
