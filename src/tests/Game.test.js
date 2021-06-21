import { render } from "@testing-library/react";
import { Game } from "../Components/Game";

// The purpose of this test is to verify the game
// component renders correctly and includes all the
// required components.
test("renders the Game component", () => {
  const { container } = render(<Game />);
  const gameComponent = container.querySelector("div.grid_container");
  expect(gameComponent).toBeInTheDocument();
  const welcomeComponent = container.querySelector("div.welcome");
  expect(welcomeComponent).toBeInTheDocument();
  const gridComponent = container.querySelector("div.grid_board");
  expect(gridComponent).toBeInTheDocument();
  const statusComponent = container.querySelector("div.status");
  expect(statusComponent).toBeInTheDocument();
  const controlsComponent = container.querySelector("button");
  expect(controlsComponent).toBeInTheDocument();
});
