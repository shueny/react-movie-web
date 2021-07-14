import React from "react";
import FontAwesome from "react-fontawesome";
import { Container, Grid, Button, CircularProgress } from "@material-ui/core";
import "./LoadMoreBtn.css";

const Index = (props) => {
  const { onClick, text, isLoading } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      className="rmdb-loadmorebtn"
      style={{ marginTop: "3em" }}
      onClick={() => onClick()}
    >
      {text}
    </Button>
  );
};
export default Index;
