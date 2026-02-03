import React from "react";

export default function ControlledInputApp() {
  const [inputValue, setInputValue] = React.useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div
      style={{
        width: "fit-content",
        background: "antiquewhite",
        border: "1px solid #333",
        padding: "5px",
      }}
    >
      <h2>Controlled Input App</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: "0.5rem", width: "100%", boxSizing: "border-box" }}
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}
