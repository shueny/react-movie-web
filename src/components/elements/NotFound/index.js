import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CircularProgress,
} from "@material-ui/core";
import "./NotFound.css";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";

const Index = (props) => {
  const { item, isLoading } = props;
  // console.log(item);
  return (
    <Grid item xs={3} key={`${item.id}`}>
      <Card className="rmdb-moviethumb">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <CardActionArea>
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
          </CardActionArea>
        )}
      </Card>
    </Grid>
  );
};
export default Index;
