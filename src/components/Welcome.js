function Welcome() {
  return (
    <div data-testid="welcome" className="welcome">
      <h1>Tic-Tac-Toe</h1>
      <p>
        To play this game, each player X or Y will make a selection in an empty
        grid element. The player who succeeds in placing three of their marks in
        a diagonal, horizontal, or vertical row is the winner.{" "}
      </p>
    </div>
  );
}

export { Welcome };
