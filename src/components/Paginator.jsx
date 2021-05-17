const Paginator = ({ numPages, currentPage, setCurrentPage }) => {
  return (
    <div id="paginator">
      <button>Previous</button>
      <div id="pages">
        {[...Array(numPages).keys()].map((page, i) => {
          // Usually using an index as a key is a bug due to
          // how react optimizes rendering but since this is a list of numbers
          // I believe it will suffice.
          return (
            <div
              className={`page-number ${currentPage === i ? "active" : ""}`}
              key={i}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
      <button>Next</button>
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
