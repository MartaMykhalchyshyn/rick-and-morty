import React, { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import CharacterCard from "../../components/Characters/CharacterCard";
import Pagination from "@mui/material/Pagination";
import { useDebounce } from "../../hooks/useDebounce";

import "./HomePage.scss";

const HomePage = () => {
  let [fetchedData, setFetchedData] = useState([]);
  let [filter, setFilter] = useState("");
  let [pageNumber, setPageNumber] = useState(1);
  let { results, info } = fetchedData;

  const debouncedSearchTerm = useDebounce(filter, 300);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=`;

  useEffect(() => {
    if (debouncedSearchTerm) {
      api = api + debouncedSearchTerm;
    }
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
      });
  }, [debouncedSearchTerm, pageNumber]);

  const paginationHandler = (event, selectedPage) => {
    setPageNumber(selectedPage);
  };

  return (
    <div className="homePage">
      <Header
        filter={filter}
        setFilter={setFilter}
        setPageNumber={setPageNumber}
      />
      <CharacterCard page="/" results={results} />
      <Pagination
        className="paginator"
        count={info?.pages}
        shape="rounded"
        showFirstButton
        showLastButton
        onChange={paginationHandler}
      />
    </div>
  );
};

export default HomePage;
