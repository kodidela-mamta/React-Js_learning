import React from "react";
import CounterApp from "./React JS Concepts/CounterApp";
import GreetingsApp from "./React JS Concepts/GreetingsApp";
import ToggleSwitchApp from "./React JS Concepts/ToggleSwitchApp";
import DynamicListApp from "./React JS Concepts/DynamicListApp";
import DataFetchingApp from "./React JS Concepts/DataFetchingApp";
import HighlightItemApp from "./React JS Concepts/HIghlightItemApp";

function HomePage() {
  return (
    <div>
      <header style={{ padding: "1rem", background: "#f5f5f5" }}>
        <h1>Welcome to My React Learning Website</h1>
        <p>
          This site is dedicated to exploring the fundamentals and advacnced
          concepts of the React Library, a poewerful tool for buildinguser
          interfaces. Dive into tutorials, examples and resources as we learn
          together.
        </p>
      </header>
      <main style={{ padding: "1rem", textAlign: "center" }}>
        <h2>My React Mini Projects</h2>
        <div
          style={{
            margin: "5px 0",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "5px",
          }}
        >
          <CounterApp />
          <GreetingsApp name="John Doe" />
          <ToggleSwitchApp />
          <DynamicListApp />
          <DataFetchingApp />
          <HighlightItemApp />
        </div>
      </main>
      <footer
        style={{ padding: "1rem", background: "#f5f5f5", textAlign: "center" }}
      >
        © 2024 My Website
      </footer>
    </div>
  );
}

export default HomePage;
