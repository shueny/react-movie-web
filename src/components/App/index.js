import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header, NotFound } from "../elements";
import Home from "../Home";
import Movie from "../Movie/index";
import "../../index.css";

const Index = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/react-movie-web/" component={Home} exact />
          <Route path="/react-movie-web/:movieId" component={Movie} exact />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};
export default Index;
