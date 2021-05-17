// Ideally I'd also maintain the current page as a query param for shareable links

const Paginator = ({ numPages, currentPage, setCurrentPage }) => {
  function previousPage() {
    let newPage = currentPage - 1;
    setCurrentPage(newPage < 1 ? 1 : newPage);
  }
  function nextPage() {
    let newPage = currentPage + 1;
    setCurrentPage(newPage > numPages ? numPages : newPage);
  }
  return (
    <div id="paginator">
      <button onClick={previousPage}>Previous</button>
      <div id="pages">
        {[...Array(numPages).keys()].map((page) => {
          // Usually using an index as a key is a bug due to
          // how react optimizes rendering but since this is a list of numbers
          // I believe it will suffice.
          return (
            <div
              data-testid={`page-${page}`}
              className={`page-number ${
                currentPage === page + 1 ? "active" : ""
              }`}
              key={page}
              onClick={(e) => setCurrentPage(page + 1)}
            >
              {page + 1}
            </div>
          );
        })}
      </div>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Paginator;
