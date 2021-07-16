import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CircularProgress,
} from "@material-ui/core";
import "./MovieThumb.css";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";

const Index = (props) => {
  const { item, isLoading, isClickable = true } = props;
  console.log(item);
  return (
    <Card className="rmdb-moviethumb">
      {isLoading ? (
        <CircularProgress />
      ) : isClickable ? (
        <CardActionArea>
          <Link
            to={{
              pathname: `/${item.id || null}`,
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
