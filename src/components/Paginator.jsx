const Paginator = ({ numPages, currentPage, setCurrentPage }) => {
  function previousPage() {
    let newPage = currentPage - 1;
    setCurrentPage(newPage < 0 ? 0 : newPage);
  }
  function nextPage() {
    let newPage = currentPage + 1;
    setCurrentPage(newPage > numPages - 1 ? numPages - 1 : newPage);
  }
  return (
    <div id="paginator">
      <button onClick={previousPage}>Previous</button>
      <div id="pages">
        {[...Array(numPages).keys()].map((page, i) => {
          // Usually using an index as a key is a bug due to
          // how react optimizes rendering but since this is a list of numbers
          // I believe it will suffice.
          return (
            <div
              className={`page-number ${currentPage === i ? "active" : ""}`}
              key={i}
              onClick={(e) => setCurrentPage(i)}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Paginator;

/**
 * Flex box
 * prev - pages - end
 *
 * pages
 * flex for numPages
 */
