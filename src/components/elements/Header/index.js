import React from "react";
import { Container, Grid } from "@material-ui/core";
import "./Header.css";

import logo from "../../../assets/images/reactMovie_logo.png";
import tmdbLogo from "../../../assets/images/tmdb_logo.png";

const Index = () => {
  return (
    <div className="rmdb-header">
      <Container className="rmdb-header-content" fixed>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={6}>
            <img src={logo} className="rmdb-logo" />
          </Grid>
          <Grid item xs={6}>
            <img src={tmdbLogo} className="rmdb-tmdb-logo" />
          </Grid>
        </Grid>
        "Header"
      </Container>
    </div>
  );
};
export default Index;