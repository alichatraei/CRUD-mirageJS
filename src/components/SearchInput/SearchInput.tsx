import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const SearchInput = () => {
  return (
    <div className="searchInput">
      <InputGroup>
        <FormControl type="text" placeholder="Search here" />
      </InputGroup>
    </div>
  );
};

export default SearchInput;
