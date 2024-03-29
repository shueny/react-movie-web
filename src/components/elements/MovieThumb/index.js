import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import {
  Card,
  CardMedia,
  CardActionArea,
  CircularProgress,
} from "@material-ui/core";
import "./MovieThumb.css";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";
import "./MovieThumb.css";

const Index = (props) => {
  // const propsTypes = {
  //   item: PropTypes.object,
  //   isLoading: PropTypes.bool,
  //   isClickable: PropTypes.bool,
  // };

  const { item, isLoading, isClickable = true } = props;

  return (
    <Card className="rmdb-moviethumb">
      {isLoading ? (
        <CircularProgress />
      ) : isClickable ? (
        <CardActionArea>
          <Link
            to={{
              pathname: `/react-movie-web/${item.id || null}`,
              moviename: `${item.title}`,
            }}
          >
            <CardMedia
              component="img"
              alt={item.original_title}
              height="auto"
              image={
                item.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${item.poster_path}`
                  : "./images/no_image.jpg"
              }
              title={item.original_title}
            />
          </Link>
        </CardActionArea>
      ) : (
        <CardMedia
          component="img"
          alt={item.original_title}
          height="auto"
          image={
            item.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${item.poster_path}`
              : "./images/no_image.jpg"
          }
          title={item.original_title}
        />
      )}
    </Card>
  );
};

export default Index;
