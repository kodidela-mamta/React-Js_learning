import React, { useState } from "react";

export default function ToggleSwitchApp() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <div
      style={{
        width: "fit-content",
        background: "antiquewhite",
        border: "1px solid #333",
        padding: "5px",
      }}
    >
      <h2>Toggle Switch</h2>
      <button
        onClick={toggleSwitch}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: isOn ? "green" : "red",
          color: "white",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}
