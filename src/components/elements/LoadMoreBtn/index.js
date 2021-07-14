import React from "react";
// import FontAwesome from "react-fontawesome";
import { Button } from "@material-ui/core";
import "./LoadMoreBtn.css";

const Index = (props) => {
  const { onClick, text, isLoading } = props;
  console.log("loadmore btn:", isLoading);
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
