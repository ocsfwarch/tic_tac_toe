# Tic-Tac-Toe

This project was created using React. The purpose of this project was a training exercise using `functional components` and `useState`.

## Description

To play this game, each player X or Y will make a selection in an empty grid element. The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner.

## Application Image

![Component Layout](https://github.com/ocsfwarch/tic_tac_toe/blob/master/Project_Docs/app_image_1.png)

## Use Case 1 - Running the game

- This use case starts when the users access the app in the browser.
- The system will display the game board.
- The system will display the current player.
- The users make selections in the grid.
- The system displays the user selection.
- This use case ends when a player has won or if all the available grid selections have been made.

## Use Case 2 - Restarting the game

- This use case starts when the user selects the `Restart Game` button.
- The system resets the game and game board to the default settings.
- The system will display the game board.
- The system will display the current player.
- This use case ends when the game board and current player is displayed by the system.

## Use Case 3a - Ending the game

- This use case start when a user makes a selection on the game board.
- The system checks the current player entries for a winnning path.
- The system creates a WIN message for the game status display.
- The system marks the game as complete, so no other user entry is valid.
- This use case ends when the WIN message is posted to the status display.

## Use Case 3b - Ending the game

- This use case start when a user makes a selection on the game board.
- The system checks if all the valid user entries on the game board are selected.
- The system creates a NO WINNER message for the game status display.
- The system marks the game as complete, so no other user entry is valid.
- This use case ends when the NO WINNER message is posted to the status display.

## Design and Architecture

- Component Layout Diagram
  ![Component Layout](https://github.com/ocsfwarch/tic_tac_toe/blob/master/Project_Docs/component_layout.png)

| Component | Description                                                  |
| --------- | ------------------------------------------------------------ |
| Game      | This is the controlling component for the app                |
| Welcome   | This component provides the introduction user information    |
| Grid      | This component controls the display of the user selections   |
| Status    | This component displays the current game status to the users |
| Control   | This component displays the game controls                    |
| GridItem  | This component displays the user selection                   |
