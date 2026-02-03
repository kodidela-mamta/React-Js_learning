import React from "react";

export default function HighlightItemApp() {
  const [selected, setSelected] = React.useState(false);
  const [id, setId] = React.useState(null);
  const items = [
    { id: 1, name: "Learn React" },
    { id: 2, name: "Build a React App" },
    { id: 3, name: "Deploy the App" },
    { id: 4, name: "Celebrate Success" },
  ];

  const handleItemHighlight = (i) => {
    setSelected(true);
    setId(i);
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
      <h2>Highlight Selected Item</h2>
      {items.map((item) => (
        <>
          <button
            key={item.id}
            style={{ color: selected && item.id === id ? "green" : "red" }}
            onClick={() => handleItemHighlight(item.id)}
          >
            {item.name}
          </button>
          <br />
          <br />
        </>
      ))}
      {selected ? (
        <span style={{ color: "green" }}>Item {id} is selected</span>
      ) : (
        <span style={{ color: "red" }}>No item selected</span>
      )}
    </div>
  );
}
