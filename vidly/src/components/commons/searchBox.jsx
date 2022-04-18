import React from "react";

const SearchBox = ({query, onChange}) => {
  return (
    <input
      type="text"
      className="form-control my-3"
      placeholder={"search..."}
      value={query}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
