import { GridItem } from "./GridItem";

function Grid({ items, updateGameState }) {
  const boardItems = items.map((item) => (
    <GridItem
      key={item.position}
      item={item}
      updateGameState={updateGameState}
    />
  ));
  return <div className="grid_board">{boardItems}</div>;
}

export { Grid };
