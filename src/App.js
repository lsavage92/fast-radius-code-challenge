import { useEffect, useState } from "react";

import "./styles/main.scss";
import PartsList from "./components/PartsList";

function App() {
  /**
   * Typically I'd use a router and multiple views here but since this
   * application is simple I will just manage state here.
   */
  const [parts, setParts] = useState([]);

  useEffect(() => {
    getParts();
  }, []);

  async function getParts() {
    const res = await fetch("http://localhost:5555/parts");
    const json = await res.json();
    setParts(json.data);
  }

  return (
    <div className="App">
      <PartsList parts={parts} />
    </div>
  );
}

export default App;
