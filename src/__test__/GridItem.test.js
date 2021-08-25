import { render } from "@testing-library/react";
import { GridItem } from "../Components/GridItem";

// The purpose of this test is to verify the grid item
// component renders correctly and includes all the
// required components.
test("renders the GridItem component", () => {
  const item = {
    position: 0,
    value: "",
    winner: false,
  };

  const updateGameState = (position) => {
    console.log(`Position = ${position}`);
  };

  const { container } = render(
    <GridItem key={0} item={item} updateGameState={updateGameState} />
  );

  const gridItemComponent = container.querySelector("div.grid_board_item");
  expect(gridItemComponent).toBeInTheDocument();
});
