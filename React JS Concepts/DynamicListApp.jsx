import React from "react";

export default function DynamicListApp() {
  const items = [
    "Learn React",
    "Build a React App",
    "Deploy the App",
    "Celebrate Success",
  ];
  return (
    <div
      style={{
        width: "fit-content",
        background: "antiquewhite",
        border: "1px solid #333",
        padding: "5px",
      }}
    >
      <h2>Dynamic List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
