import { useState } from "react";
import { Welcome } from "./Welcome";
import { Grid } from "./Grid";
import { Status } from "./Status";
import { Controls } from "./Controls";

function Game() {
  let theWinners = [];
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
  const [gameState, setGameState] = useState(defaultState);
  const [gameStatus, setGameStatus] = useState("Player X is up");
  //const [winners, setWinners] = useState([]);
  const [gameDone, setGameDone] = useState(false);

  const updateGameState = (position) => {
    let active = gameState.activeUser;
    const current = active;
    let value = "";
    let strGameStatus = "";
    let bGameDone = false;

    if (gameDone) {
      return true;
    }

    if (active === 0) {
      value = gameState.users[active]["display"];
      active = 1;
    } else {
      value = gameState.users[active]["display"];
      active = 0;
    }
    const newGridItems = gameState.gridItems.map((item) => item);
    newGridItems[position].value = value;

    if (checkForWinner(value)) {
      bGameDone = true;
      strGameStatus = `${gameState.users[current].name} WINS!!`;
      updateGridItemWinnersDisplay();
    } else if (checkForDraw()) {
      bGameDone = true;
      strGameStatus = `Sorry, this game ended in a TIE`;
    } else {
      strGameStatus = `${gameState.users[active].name} is up`;
    }
    setGameState({ ...gameState, activeUser: active, gridItems: newGridItems });
    setGameStatus(strGameStatus);
    setGameDone(bGameDone);
  };

  const resetGameState = () => {
    theWinners = [];
    setGameState(defaultState);
    setGameDone(false);
    setGameStatus(`${gameState.users[0].name} is up`);
  };

  const checkForWinner = (value) => {
    if (checkRows(value)) {
      return true;
    } else if (checkColumns(value)) {
      return true;
    } else if (checkDiagonal(value)) {
      return true;
    }
    return false;
  };

  const checkForDraw = () => {
    let bReturn = false;
    let nCount = 0;
    for (let item of gameState.gridItems) {
      if (item.value !== "") {
        nCount++;
      }
    }
    if (nCount === gameState.gridItems.length) {
      bReturn = true;
    }
    return bReturn;
  };

  const updateGridItemWinnersDisplay = () => {
    const newGameState = gameState;
    for (let i of theWinners) {
      newGameState.gridItems[i].winner = true;
    }
    setGameState(newGameState);
  };

  const checkRows = (value) => {
    let bReturn = false;

    if (
      gameState.gridItems[0].value === value &&
      gameState.gridItems[1].value === value &&
      gameState.gridItems[2].value === value
    ) {
      theWinners = [0, 1, 2];
      bReturn = true;
    } else if (
      gameState.gridItems[3].value === value &&
      gameState.gridItems[4].value === value &&
      gameState.gridItems[5].value === value
    ) {
      theWinners = [3, 4, 5];
      bReturn = true;
    } else if (
      gameState.gridItems[6].value === value &&
      gameState.gridItems[7].value === value &&
      gameState.gridItems[8].value === value
    ) {
      theWinners = [6, 7, 8];
      bReturn = true;
    }
    return bReturn;
  };

  const checkColumns = (value) => {
    if (
      gameState.gridItems[0].value === value &&
      gameState.gridItems[3].value === value &&
      gameState.gridItems[6].value === value
    ) {
      theWinners = [0, 3, 6];
      return true;
    } else if (
      gameState.gridItems[1].value === value &&
      gameState.gridItems[4].value === value &&
      gameState.gridItems[7].value === value
    ) {
      theWinners = [1, 4, 7];
      return true;
    } else if (
      gameState.gridItems[2].value === value &&
      gameState.gridItems[5].value === value &&
      gameState.gridItems[8].value === value
    ) {
      theWinners = [2, 5, 8];
      return true;
    }
    return false;
  };

  const checkDiagonal = (value) => {
    if (
      gameState.gridItems[0].value === value &&
      gameState.gridItems[4].value === value &&
      gameState.gridItems[8].value === value
    ) {
      theWinners = [0, 4, 8];
      return true;
    } else if (
      gameState.gridItems[6].value === value &&
      gameState.gridItems[4].value === value &&
      gameState.gridItems[2].value === value
    ) {
      theWinners = [6, 4, 2];
      return true;
    }
    return false;
  };

  return (
    <div className="grid_container">
      <Welcome />
      <Grid items={gameState.gridItems} updateGameState={updateGameState} />
      <Status status={gameStatus} />
      <Controls resetGameState={resetGameState} />
    </div>
  );
}

export { Game };
