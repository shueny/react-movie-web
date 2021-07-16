import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import { calcTime, convertMoney } from "../../../helpers";
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CircularProgress,
} from "@material-ui/core";
import "./MovieInfoBar.css";

const Index = (props) => {
  const { item } = props;
  console.log(item);
  return <div>MovieInfoBar</div>;
};
export default Index;
