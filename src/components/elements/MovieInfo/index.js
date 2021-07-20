import React from "react";
import FontAwesome from "react-fontawesome";
import { withStyles } from "@material-ui/core/styles";
import { Box, LinearProgress } from "@material-ui/core";
import { MovieThumb } from "../index";
import "./MovieInfo.css";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";

const Index = (props) => {
  const { item, backdrop_path, directors } = props;

  const backgroundImage = backdrop_path
    ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`
    : "#000";
  // console.log("MovieInfo:", item, directors);

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor:
        item.vote_average > 7
          ? theme.palette.success
          : item.vote_average < 4
          ? "#FE6B8B"
          : "#FF8E53",
    },
  }))(LinearProgress);

  return (
    <Box
      className="rmdb-movieinfo"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {item && (
        <div className="rmdb-movieinfo-content">
          <div className="rmdb-movieinfo-thumb">
            <MovieThumb item={item} isClickable={false} />
          </div>
          <div className="rmdb-movieinfo-text">
            <h1>{item.title}</h1>
            <h3>PLOT</h3>
            <p>{item.overview}</p>
            <h3>IMDB RATING</h3>
            <div className="rmdb-rating">
              <BorderLinearProgress
                variant="determinate"
                value={item.vote_average * 10}
              />
              <span className="rmdb-score">{item.vote_average}</span>
            </div>
            {directors.length > 1 ? <h3>Directors</h3> : <h3>Director</h3>}
            {directors.length > 0
              ? directors.map((v, i) => {
                  return <p key={i}>{v.name}</p>;
                })
              : null}
          </div>
          <FontAwesome className="fa-film" name="film" size="4x" />
        </div>
      )}
    </Box>
  );
};
export default Index;
