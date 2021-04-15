import React from "react";
import { DetectNetwork as detectNetwork } from "./utils";

function App() {
  /** Detect network connection  */
  detectNetwork();

  return <div className="App"></div>;
}

export default App;
