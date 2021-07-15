import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CircularProgress,
} from "@material-ui/core";
import "./Movie.css";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

const Index = (props) => {
  const { id, title } = props;
  console.log("Movie:", id, title);
  return <div>Movie</div>;
};
export default Index;
