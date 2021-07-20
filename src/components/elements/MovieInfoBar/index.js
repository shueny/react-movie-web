import React from "react";
import FontAwesome from "react-fontawesome";
import { calcTime, convertMoney } from "../../../helpers";
import { Grid } from "@material-ui/core";
import "./MovieInfoBar.css";

const Index = (props) => {
  const { time = null, budget = 0, revenue = 0 } = props;

  return (
    <div className="rmdb-movieinfobar">
      <div className="rmdb-movieinfobar-content">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={3}>
            <FontAwesome className="fa-time" name="clock-o" size="2x" />
            <span className="rmdb-movieinfobar-info">
              Time: {calcTime(time)}
            </span>
          </Grid>
          <Grid item xs={3}>
            <FontAwesome className="fa-budget" name="money" size="2x" />
            <span className="rmdb-movieinfobar-info">
              Budget: {convertMoney(budget)}
            </span>
          </Grid>
          <Grid item xs={3}>
            <FontAwesome className="fa-revenue" name="ticket" size="2x" />
            <span className="rmdb-movieinfobar-info">
              Revenue: {convertMoney(revenue)}
            </span>
          </Grid>
        </Grid>
      </div>
      MovieInfoBar
    </div>
  );
};
export default Index;
