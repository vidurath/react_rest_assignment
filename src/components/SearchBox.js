import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="col-sm-4 offset-sm-3">
      <input
        id="txtSearch"
        name="txtSearch"
        className="form-control"
        type="search"
        placeholder="Enter Id"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
