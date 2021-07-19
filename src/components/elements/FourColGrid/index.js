import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "./FourColGrid.css";

const Index = (props) => {
  const { source, title, isLoading } = props;

  const renderElements = () => {
    const gridElements = props.children.map((el, i) => {
      return (
        <Grid item xs={3} key={`${i}-${el.id}`}>
          {el}
        </Grid>
      );
    });
    return gridElements;
  };

  return (
    <React.Fragment>
      {title ? (
        <div className="rmdb-grid">
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
        {renderElements()}
      </Grid>
    </React.Fragment>
  );
};
export default Index;
