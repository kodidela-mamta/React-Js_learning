import React, { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
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
      <h2>Counter App</h2>
      <p>This is a simple counter app.</p>
      <span>Count: {count}</span>
      <br />
      <br />
      <button onClick={increment}>Increment</button>
      <span> </span>
      <button onClick={decrement}>Decrement</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
