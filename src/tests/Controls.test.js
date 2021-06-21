import { render } from "@testing-library/react";
import { Controls } from "../Components/Controls";

// The purpose of this test is to verify the controls
// component renders correctly and includes all the
// required components.
test("renders the Controls component", () => {
  const { container } = render(<Controls />);
  const controlsComponent = container.querySelector("button");
  expect(controlsComponent).toBeInTheDocument();
});
