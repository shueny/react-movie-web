import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "./FourColGrid.css";

import { MovieThumb } from "../index";

const Index = (props) => {
  const { source, title, isLoading } = props;

  return (
    <React.Fragment>
      {title ? (
        <div className="rmdb-grid ">
          <Typography
            gutterBottom
            variant="h1"
            component="h1"
            style={{ marginTop: "0.5em" }}
          >
            {title}
          </Typography>
        </div>
      ) : null}
      <Grid container spacing={3}>
        {source.map((v) => {
          // console.log("source item:", v);
          return (
            <MovieThumb item={v} isLoading={isLoading} key={`thumb-${v.id}`} />
          );
        })}
      </Grid>
    </React.Fragment>
  );
};
export default Index;
