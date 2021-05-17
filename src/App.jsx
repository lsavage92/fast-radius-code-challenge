import { useEffect, useState } from "react";

import "./styles/main.scss";
import Paginator from "./components/Paginator";
import PartsList from "./components/PartsList";
import { fetchParts } from "./services";

function App() {
  /**
   * Typically I'd use a router and multiple views here but since this
   * application is simple I will just manage state here.
   */
  const [parts, setParts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(0);

  // Fetch new page whenever currentPage updates
  useEffect(() => {
    fetchParts(currentPage).then((res) => {
      setNumPages(res.totalPages);
      setParts(res.result);
    });
  }, [currentPage]);

  return (
    <div className="App">
      <PartsList parts={parts} />
      <Paginator
        numPages={numPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
