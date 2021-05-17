import { useState } from "react";
import { render, waitFor } from "@testing-library/react";
import Paginator from "../components/Paginator";

test("paginator should respect the parents current page", () => {
  const paginator = render(<Paginator numPages={4} currentPage={1} />);
  const firstPageDiv = paginator.getByTestId("page-0");
  expect(firstPageDiv).toBeInTheDocument();
  expect(firstPageDiv).toHaveClass("active");
});

/**
 * How do you mock out parent state to test a child component in isolation?
 * I'd like to test that the child updates the parent state and that the
 * child updates properly.
 */
test("clicking page updates parent state", async () => {
  const paginator = render(() => {
    // let [currentPage, setCurrentPage] = useState(1);
    let currentPage = 1;
    const setCurrentPage = (newPage) => (currentPage = newPage);
    return (
      <Paginator
        numPages={4}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );
  });
  const secondPageDiv = paginator.getByTestId("page-1");
  secondPageDiv.click();
  await waitFor(() => {
    expect(secondPageDiv).toHaveClass("active");
  });
});
