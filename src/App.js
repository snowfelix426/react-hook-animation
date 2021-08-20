import React from 'react';
import './style.css';

/*
Complete the challenges below, *** USING REACT HOOKS ***:

1. Clicking the ROTATE button, should rotate the 2 squares (.App__rotate-square, App__rotate-square-inner) 45 degrees clockwise, on every click. With a half second animation for the rotation. Square with class '.App__rotate-square-inner' should have a one second animation length and should be positioned on top (not above) of the larger square. Make sure the squares are in the center of the screen.

2. Cycle through the background color of the squares, on every rotation, using colors: '#6b00ff','#e301be','#ff0066','#24c5e0'. There should be a one second transition for the color change. The inside square should always be a different color from the large square.

3. Position contaner with class: '.App__stats-container' horizontally centered, 10px from the bottom of the page.

4. Add real values for `Mounted at`, `Last rotated at`, `Number of times rotated`

*/

export default function App() {
  return (
    <div className="App">
      <button className="App__rotate-button">ROTATE SQUARE</button>
      <div className="App__rotate-square-inner" />
      <div className="App__rotate-square" />
      <div className="App__stats-container">
        <div className="App__stat">
          Mounted at: <span className="App__stats-value">HH:MM:SS AM/PM</span>
        </div>
        <div className="App__stat">
          Last rotated at:
          <span className="App__stats-value">HH:MM:SS AM/PM</span>
        </div>
        <div className="App__stat">
          Number of times rotated: <span className="App__stats-value">X</span>
        </div>
      </div>
    </div>
  );
}
