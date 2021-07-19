import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/react-movie-web/">
              <img src={logo} className="rmdb-logo" alt="rmdb-logo" />
            </Link>
          </Grid>
          <Grid item xs={6}>
            <img src={tmdbLogo} className="rmdb-tmdb-logo" alt="rmdb-logo" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Index;
