import React, { useState } from "react";
import "../stylenavbar.css";

function Navbar() {
  const [isLight, setIsLight] = useState(false);

  function handleSwitch() {
    setIsLight((prev) => !prev);
  }

  return (
    <div className={`container ${isLight ? "light-theme" : ""}`}>
      <div className="theme-switch" onClick={handleSwitch}>
        <div className="switch"></div>
      </div>
      <div className="navigation">
        <ul>
          <a
            href="http://www.sashatran.com/"
            className="active"
            target="_blank"
          >
            Home
          </a>
          <a href="https://codepen.io/sashatran/" target="_blank">
            Attendance
          </a>
          <a href="https://instagram.com/sasha.codes/" target="_blank">
            Marks
          </a>
          <a href="https://twitter.com/sa_sha26" target="_blank">
            Fee
          </a>
          <a href="https://twitter.com/sa_sha26" target="_blank">
            TimeTable
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
