import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CircularProgress,
} from "@material-ui/core";
import { MovieThumb } from "../index";
import "./MovieInfo.css";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";

const Index = (props) => {
  const { item, backdrop_path } = props;

  const backgroundImage = backdrop_path
    ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`
    : "#000";
  console.log("MovieInfo:", item);
  return (
    <Box
      className="rmdb-movieinfo"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="rmdb-movieinfo-content">
        {item && (
          <div className="rmdb-movieinfo-thumb">
            <MovieThumb item={item} isClickable={false} />
          </div>
        )}
        MovieInfo
      </div>
    </Box>
  );
};
export default Index;
