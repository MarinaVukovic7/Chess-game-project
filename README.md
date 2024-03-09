# Chess Game with Multiplayer Support

## Project Overview

This project aims to create an online chess game with standard chess rules, allowing two players to engage in a game of chess in real-time. The game is implemented using the Canvas element for the board, utilizing classes and subclasses to create the chessboard and pieces.

## Features

- **Canvas Implementation:** The chessboard and pieces are rendered using the HTML5 Canvas element.
- **Server-Client Architecture:** The project includes a server that facilitates the connection between two players for a multiplayer gaming experience.
- **Player Representation:** Each player is represented by a socket connected to the server, granting them the ability to make moves with pieces of a specific color.
- **Turn-Based Gameplay:** Players take turns making moves, and the server ensures a fair and synchronized gaming experience.
- **Waiting Window:** When only one player is connected, a window appears, indicating that the system is waiting for another player to join the game.
- **Checkmate Notification:** In the event of checkmate, a window pops up to notify the winner of their victory and the loser of their defeat. The window includes a reset button.
- **Player Disconnection Handling:** If a player leaves the game or resets the window, the remaining player is automatically declared the winner, and a notification is sent.

## How to Play

1. **Clone the Repository:**
   
   git clone https://github.com/your-username/chess-multiplayer.git
   

2. **Install Dependencies:**
   
   npm install
   

3. **Run the Server:**
   
   npm start
   

4. **Access the Game:**
   Open your web browser and navigate to `http://localhost:3000` to start playing chess.

## Contributing

If you'd like to contribute to this project, please follow the [CONTRIBUTING.md](CONTRIBUTING.md) guidelines.

## License

This project is licensed under the [MIT License](LICENSE).
