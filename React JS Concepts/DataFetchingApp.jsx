import React, { useState } from "react";
function DataFetchingApp() {
  const [data, setData] = useState(null);
  const [fetchOn, setFetchOn] = useState(false);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/2",
      );
      const result = await response.json();
      setFetchOn(true);
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
      <h2>Data Fetching App</h2>
      {data && fetchOn ? (
        <div key={data.id}>
          <h3>Name: {data.name}</h3>
          <h3>Email: {data.email}</h3>
          <h3>Username: {data.username}</h3>
          <h3>Phone: {data.phone}</h3>
          <h3>Website: {data.website}</h3>
        </div>
      ) : (
        <p>
          <span>Data Loading......</span>
          <br />
          Please click to fetch data.
        </p>
      )}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}
export default DataFetchingApp;
