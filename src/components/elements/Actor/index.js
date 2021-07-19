import React from "react";
import { Card } from "@material-ui/core";
import { IMAGE_BASE_URL } from "../../../config";
import "./Actor.css";

const POSTER_SIZE = "w154";

const Index = (props) => {
  const { actor } = props;

  const IMAGE_URL = actor.profile_path
    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
    : "./images/no_image.jpg";

  return (
    <Card className="rmdb-actor">
      <img src={IMAGE_URL} alt={actor.name} />
      <span className="rmdb-actor-name">{actor.name}</span>
      <span className="rmdb-actor-character">{actor.character}</span>
    </Card>
  );
};
export default Index;
