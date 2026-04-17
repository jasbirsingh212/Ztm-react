import React from "react";

const SearchInput = ({ handleChange }) => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="search"
        placeholder="Search monsters"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
