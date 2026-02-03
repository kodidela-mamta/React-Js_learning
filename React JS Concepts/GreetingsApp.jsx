import React from "react";

export default function GreetingsApp({ name }) {
  return (
    <div
      style={{
        width: "fit-content",
        background: "antiquewhite",
        border: "1px solid #333",
        padding: "5px",
      }}
    >
      <h2>Greetings App!</h2>
      <p>This is a simple React component that displays a greeting message.</p>
      <span>
        Hi <b>{name}</b>, Welcome to learning world
      </span>
    </div>
  );
}
