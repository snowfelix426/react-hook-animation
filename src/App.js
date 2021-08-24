import React, { useState, useEffect } from "react";
import Moment from "moment";
import "./style.css";

/*
Complete the challenges below, *** USING REACT HOOKS ***:

1. Clicking the ROTATE button, should rotate the 2 squares (.App__rotate-square, App__rotate-square-inner) 45 degrees clockwise, on every click. With a half second animation for the rotation. Square with class '.App__rotate-square-inner' should have a one second animation length and should be positioned on top (not above) of the larger square. Make sure the squares are in the center of the screen.

2. Cycle through the background color of the squares, on every rotation, using colors: '#6b00ff','#e301be','#ff0066','#24c5e0'. There should be a one second transition for the color change. The inside square should always be a different color from the large square.

3. Position contaner with class: '.App__stats-container' horizontally centered, 10px from the bottom of the page.

4. Add real values for `Mounted at`, `Last rotated at`, `Number of times rotated`

*/

export default function App() {
  const colors = ["#e301be", "#6b00ff", "#ff0066", "#24c5e0"];
  const [rotateCount, setRotateCount] = useState(0);
  const [mountedDate, setMountedDate] = useState(null);
  const [rotatedDate, setRotatedDate] = useState(null);

  useEffect(() => {
    setMountedDate(new Date());
  }, []);

  const rotateButton = () => {
    setRotateCount(rotateCount + 1);
    setRotatedDate(new Date());
  };

  const formatDate = (date, isMountedDate = true) => {
    const msg = `Not ${isMountedDate ? "mounted" : "rotated"} yet`;
    return date ? Moment(date)?.format("hh:mm:ss A") : msg;
  };

  const squareStyle = (isLargeSquare = true) => {
    const colorIndex =
      (isLargeSquare ? rotateCount : rotateCount + 1) % colors.length;

    return {
      transform: `rotate(${45 * rotateCount}deg)`,
      backgroundColor: `${colors[colorIndex]}`,
    };
  };

  return (
    <div className="App">
      <button className="App__rotate-button" onClick={rotateButton}>
        ROTATE SQUARE
      </button>
      <div
        className="App__rotate-square-inner"
        style={squareStyle(false)}
      ></div>
      <div className="App__rotate-square" style={squareStyle()} />
      <div className="App__stats-container">
        <div className="App__stat">
          Mounted at:{" "}
          <span className="App__stats-value">{formatDate(mountedDate)}</span>
        </div>
        <div className="App__stat">
          Last rotated at:{" "}
          <span className="App__stats-value">
            {formatDate(rotatedDate, false)}
          </span>
        </div>
        <div className="App__stat">
          Number of times rotated:{" "}
          <span className="App__stats-value">{rotateCount}</span>
        </div>
      </div>
    </div>
  );
}
