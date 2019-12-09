import React from "react";

// hooks
import { useDarkMode } from "../hooks/useDarkMode.js";

export default function Footer() {
  const [darkMode, setDarkMode] = useDarkMode(true);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="footer">
      <span id="dark-mode-text">Dark Mode</span>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </div>
  );
}
