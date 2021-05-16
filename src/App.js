import { useEffect, useState } from "react";

import "./styles/main.scss";
import PartsList from "./components/PartsList";
import { fetchParts } from "./services";

function App() {
  /**
   * Typically I'd use a router and multiple views here but since this
   * application is simple I will just manage state here.
   */
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetchParts().then((res) => setParts(res.data));
  }, []);

  return (
    <div className="App">
      <PartsList parts={parts} />
    </div>
  );
}

export default App;
