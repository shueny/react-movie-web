import React from "react";
import { Container, Card, CardMedia } from "@material-ui/core";
import "./NotFound.css";

const Index = () => {
  // console.log(item);
  return (
    <Container fixed>
      <Card className="rmdb-moviethumb">
        <CardMedia
          component="img"
          alt="Not Found"
          height="auto"
          image="./images/no_image.jpg"
        />
      </Card>
    </Container>
  );
};
export default Index;
