function GridItem({ item, updateGameState }) {
  const updateItemValue = () => {
    if (item.value === "") {
      updateGameState(item.position);
    }
  };

  let strClass = "";
  if (item.value === "") {
    strClass = "grid_board_item use_outset";
  } else {
    strClass = "grid_board_item use_inset";
  }

  return (
    <div
      className={
        item.winner ? `${strClass} grid_board_item_winner` : `${strClass} `
      }
      onClick={updateItemValue}
    >
      {item.value}
    </div>
  );
}

export { GridItem };
