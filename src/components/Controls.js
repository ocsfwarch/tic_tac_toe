function Controls({ resetGameState }) {
  return (
    <div>
      <button onClick={resetGameState}>Restart Game</button>
    </div>
  );
}

export { Controls };
