import React from "react";

export default function SimpleFilterApp() {
  const [searchValue, setSearchValue] = React.useState("");
  const items = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];
  const handleFilter = (e) => {
    setSearchValue(e.target.value);
    console.log("Search Value:", e.target.value);
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
      <h2>Search Filter App</h2>
      <input
        type="text"
        value={searchValue}
        placeholder="Search..."
        onChange={(e) => handleFilter(e)}
      />
      <p>{items.join(", ")}</p>
      <p>
        Search Results:
        <b>
          {searchValue.length > 2 &&
            items.filter((item) =>
              item.toLowerCase().includes(searchValue.toLowerCase()),
            )}
        </b>
      </p>
    </div>
  );
}
