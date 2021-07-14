import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import "./FourColGrid.css";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../../../config";
import { MovieThumb } from "../index";

const Index = (props) => {
  const { source, title } = props;

  return (
    <React.Fragment>
      {title ? (
        <div className="rmdb-grid ">
          <h1>{title}</h1>
        </div>
      ) : null}
      <Grid container spacing={3}>
        {source.map((v) => {
          console.log("source item:", v);
          return <MovieThumb item={v} />;
        })}
      </Grid>
    </React.Fragment>
  );
};
export default Index;

const Elements = (props) => {
  const { item } = props;
  console.log(item);
  return (
    <Grid item xs={3} key={`${item.id}`}>
      <Card>
        <CardMedia
          className=""
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${item.backdrop_path}`}
          title="Paella dish"
        />
        <CardContent></CardContent>
      </Card>
    </Grid>
  );
};
