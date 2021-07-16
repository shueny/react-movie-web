import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CircularProgress,
} from "@material-ui/core";
import {
  Navigation,
  MovieInfo,
  Actor,
  MovieInfoBar,
  FourColGrid,
  Spinner,
} from "../elements";
import "./Movie.css";

import { IMAGE_BASE_URL, POSTER_SIZE, API_KEY, API_URL } from "../../config";

const Index = (props) => {
  const {
    id,
    title,
    match: { params },
  } = props;
  const [movie, setMovie] = useState(null);
  const [actor, setActor] = useState(null);
  const [director, setDirector] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("Movie:", id, title, params);

  const fetchDirector = async (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((res) => {
        console.log("director:", res);

        const direct = res.crew.filter((v) => v.job === "Director");
        setDirector(direct);
        setActor(res.cast);
        setLoading(false);
      });
  };

  const fetchMovieData = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.status_code) {
          setLoading(false);
        } else {
          setMovie(res);
          const creditEndpoint = `${API_URL}movie/${params.movieId}/credits?api_key=${API_KEY}&language=en-US`;
          fetchDirector(creditEndpoint);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    const endpoint = `${API_URL}movie/${params.movieId}?api_key=${API_KEY}&language=en-US`;
    fetchMovieData(endpoint);
  }, []);

  return (
    <div className="rmdb-movie">
      <Navigation movieName={(movie && movie.title) || ""} />
      <MovieInfo backdrop_path={movie && movie.backdrop_path} item={movie} />
      <MovieInfoBar />
      <FourColGrid source={[]} />
      <Spinner />
    </div>
  );
};
export default Index;
