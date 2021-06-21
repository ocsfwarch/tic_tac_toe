import { render } from "@testing-library/react";
import { Grid } from "../Components/Grid";

/* START - Test Items required for testing*/
const defaultState = {
  activeUser: 0,
  users: [
    { name: "Player X", display: "X" },
    { name: "Player O", display: "O" },
  ],
  gridItems: [
    { position: 0, value: "", winner: false },
    { position: 1, value: "", winner: false },
    { position: 2, value: "", winner: false },
    { position: 3, value: "", winner: false },
    { position: 4, value: "", winner: false },
    { position: 5, value: "", winner: false },
    { position: 6, value: "", winner: false },
    { position: 7, value: "", winner: false },
    { position: 8, value: "", winner: false },
  ],
};

const updateGameState = (position) => {
  console.log(`Position = ${position}`);
};
/* STOP  - Test Items required for testing*/

// The purpose of this test is to verify the grid
// component renders correctly and includes all the
// required components.
test("renders the Grid component", () => {
  const { container } = render(
    <Grid items={defaultState.gridItems} updateGameState={updateGameState} />
  );
  const gridComponent = container.querySelector("div.grid_board");
  expect(gridComponent).toBeInTheDocument();
  const gridItemComponent = container.querySelector("div.grid_board_item");
  expect(gridItemComponent).toBeInTheDocument();
});
