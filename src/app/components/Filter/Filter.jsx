import React, { useEffect } from "react";

import "./Filter.scss";

const Filter = ({ filter, setFilter, setPageNumber }) => {
  useEffect(() => {
    const search = sessionStorage.getItem("filter");

    if (search) {
      setFilter(search);
    }
  }, []);

  const filterChangeHandler = (event) => {
    setPageNumber(1);
    setFilter(event.target.value);
    sessionStorage.setItem("filter", event.target.value);
  };

  return (
    <div className="filter-container">
      <input
        className="filter-input"
        type="text"
        placeholder="Filter by name..."
        value={filter}
        onChange={filterChangeHandler}
      />
    </div>
  );
};

export default Filter;
