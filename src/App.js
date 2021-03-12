import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";

function App() {
  const [pack, setPack] = useState(Data);

  const removeTour = (id) => {
    setPack(pack.filter((item) => item.id !== id));
  };

  if (pack.length !== 0) {
    return (
      <div className="App">
        <h1 className="heading"> Our Tours</h1>
        <Card pack={pack} removeTour={removeTour} />
      </div>
    );
  } else if (pack.length === 0) {
    return (
      <div className="heading">
        <h1>No Tours Available</h1>
        <button
          className="refresh-btn"
          onClick={() => {
            setPack(Data);
          }}
        >
          Refresh
        </button>
      </div>
    );
  }
}

export default App;
