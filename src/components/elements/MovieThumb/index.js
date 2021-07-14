import React from "react";
import FontAwesome from "react-fontawesome";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import "./MovieThumb.css";

import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../../../config";

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
              image={`${IMAGE_BASE_URL}${POSTER_SIZE}${item.poster_path}`}
              title={item.original_title}
            />
          </CardActionArea>
        )}
      </Card>
    </Grid>
  );
};
export default Index;
