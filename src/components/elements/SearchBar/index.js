import React, { useState, createRef } from "react";
import FontAwesome from "react-fontawesome";
// import { Container, Grid, TextField } from "@material-ui/core";
import "./SearchBar.css";

const Index = (props) => {
  const { onSearch } = props;
  const [value, setValue] = useState();

  const inputRef = createRef();

  const handleSearch = (text) => {
    console.log("handleSearch:", text);
    // setValue(text);
    onSearch(text);
    // if (this.timeout) clearTimeout(this.timeout);
    // this.timeout = setTimeout(() => {
    //   console.log(value, text);
    //   onSearch(value);
    // }, 5000);
  };

  return (
    <div className="rmdb-searchbar">
      <div className="rmdb-searchbar-content">
        <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
        <input
          ref={inputRef}
          type="text"
          className="rmdb-searchbar-input"
          placeholder="Search"
          // onChange={(e) => handleSearch(e.target.value)}
          onBlur={(e) => handleSearch(e.target.value)}
          value={value}
        />
      </div>
    </div>
  );
};
export default Index;
