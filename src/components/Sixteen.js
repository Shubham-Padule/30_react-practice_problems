import React, { useState } from "react";

function Sixteen({ items, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div>Sixteen</div>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </>
  );
}

export default Sixteen;
