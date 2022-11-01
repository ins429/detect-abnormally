import React, { useEffect } from "react";
import Monit from "./Monit";
import "./App.css";

function App() {
  return (
    <>
      <Monit />
      <div className="App">
        <h1>Lets detect abnormal behaviors!</h1>

        <button
          onClick={() => {
            for (;;) {}
          }}
        >
          start infinite loop
        </button>
      </div>
    </>
  );
}

export default App;
