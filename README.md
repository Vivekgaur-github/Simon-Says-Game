# Simon Says Game - User Manual

## Overview
The Simon Says Game is a memory-based challenge built with JavaScript, HTML, and CSS. The game generates a random sequence of colors which the user must repeat. As the player progresses, the sequence gets longer, increasing the challenge. The game also tracks the high score using localStorage to provide a persistent record of your best game.

## How to Play
1. **Start the Game:**  
   Open the (https://simon-says-game-nine-sigma.vercel.app/) file in your web browser. The game will display the message "Press any key to start". Simply press any key on your keyboard to begin.

2. **Game Sequence:**  
   - Once you've started the game, a random color will be highlighted.  
   - Listen to and watch out for the sequence of colors being flashed on the screen.

3. **User Interaction:**  
   - Click on the colored button (`red`, `yellow`, `blue`, or `green`) that matches the sequence shown by the game.  
   - The game records your clicks and compares them with the generated sequence.

4. **Leveling Up:**  
   - If your sequence is correct, you will advance to the next level and the game will add one more color to the sequence.
   - The current level is displayed on the screen using a heading element.

5. **Game Over:**  
   - If you make an incorrect selection, a "Game Over!" message appears along with your current score and the high score is updated if your score is higher.
   - The game background flashes red on a mistake, and then resets the game state.

6. **Restarting the Game:**  
   - After a game over, press any key to restart the game.

## Features
- **Randomized Color Sequence:** The game uses a random generator to produce sequences from an array of colors.
- **Visual Feedback:** Buttons flash when they are activated by either the game or the user.
- **High Score Tracking:** The game stores the highest level reached across sessions using localStorage.
- **Responsive User Interface:** The game scales and centers using a simple, effective CSS design.

## Technical Details
- **JavaScript ([script.js](c:\Users\VIVEK\OneDrive\Desktop\Web Dev\Simon-Says-Game\script.js)):**  
  Handles game logic, including starting the game, generating random sequences, processing user input, and updating game levels.
  
- **HTML ([index.html](c:\Users\VIVEK\OneDrive\Desktop\Web Dev\Simon-Says-Game\index.html)):**  
  Structures the game layout including buttons and message areas.
  
- **CSS ([style.css](c:\Users\VIVEK\OneDrive\Desktop\Web Dev\Simon-Says-Game\style.css)):**  
  Provides styling for the game interface, buttons, flashing effects, and message displays.

## Troubleshooting
- **Game Does Not Start:**  
  Ensure that you have focused the browser window and pressed a key to start. Check the browser console for any JavaScript errors.
  
- **No Visual Effects:**  
  Confirm that the CSS file is correctly linked in the HTML. Also, check the network tab to ensure that all assets are loading.

- **High Score Not Updating:**  
  Make sure your browser allows localStorage usage. Try clearing the browser cache if issues persist.

Enjoy the game, and challenge yourself to beat your high score!

