import React from "react";

import "./Header.scss";
import logo from "../../../assets/logo.png";
import Filter from "../Filter/Filter";

const Header = ({ filter, setFilter, setPageNumber }) => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} className="logo" />
      </div>
      <Filter
        filter={filter}
        setFilter={setFilter}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default Header;
