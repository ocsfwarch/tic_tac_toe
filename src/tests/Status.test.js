import { render, within } from "@testing-library/react";
import { Status } from "../Components/Status";

// The purpose of this test is to verify the status
// component renders correctly and includes all the
// required components.
test("renders the Status component", () => {
  const testStatus = "TESTING";
  const { container } = render(<Status status={testStatus} />);
  const statusComponent = container.querySelector("div.status");
  expect(statusComponent).toBeInTheDocument();
  const textElement = within(statusComponent).getByText("TESTING");
  expect(textElement).toBeInTheDocument();
});
