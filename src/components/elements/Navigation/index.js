import React from "react";
// import { Link } from "react-router-dom";
import { Typography, Breadcrumbs, Link } from "@material-ui/core";

import "./Navigation.css";

const Index = (props) => {
  const { movieName } = props;

  return (
    <div className="rmdb-navigation">
      <div className="rmdb-navigation-content">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/react-movie-web/">
            Home
          </Link>
          <Typography color="textPrimary">{movieName}</Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Index;
