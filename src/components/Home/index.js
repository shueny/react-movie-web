import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import {
  HeroImage,
  SearchBar,
  LoadMoreBtn,
  FourColGrid,
  MovieThumb,
  Spinner,
} from "../elements";
import "./Home.css";

const Index = () => {
  return (
    <div className="rmdb-home">
      <HeroImage />
      <SearchBar />
      <Spinner />
      <FourColGrid />
      <LoadMoreBtn />
    </div>
  );
};
export default Index;
