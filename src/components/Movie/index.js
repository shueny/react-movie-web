import React, { useState, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import {
  Navigation,
  MovieInfo,
  Actor,
  MovieInfoBar,
  FourColGrid,
  Spinner,
} from "../elements";
import "./Movie.css";

import { API_KEY, API_URL } from "../../config";

const Index = (props) => {
  const {
    match: { params },
  } = props;
  const [movie, setMovie] = useState(null);
  const [actors, setActors] = useState(null);
  const [director, setDirector] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDirector = async (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((res) => {
        const direct = res.crew.filter((v) => v.job === "Director");
        setDirector(direct);
        setActors(res.cast);
        setLoading(false);

        localStorage.setItem(
          `${movie.id}`,
          JSON.stringify({ director: direct, actors: res.cast })
        );
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

  if (!movie) return null;
  return (
    <div className="rmdb-movie">
      {movie ? (
        <React.Fragment>
          <Navigation movieName={(movie && movie.title) || ""} />
          <MovieInfo
            backdrop_path={movie && movie.backdrop_path}
            item={movie}
            directors={director}
          />
          <MovieInfoBar
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
          />
          {actors ? (
            <Container maxWidth="lg">
              <FourColGrid title="Actors" source={actors}>
                {actors.map((el, i) => {
                  return <Actor key={`actor-${i}`} actor={el} />;
                })}
              </FourColGrid>
            </Container>
          ) : null}
          {!actors && !loading ? (
            <Typography variant="h1" component="h2" gutterBottom>
              No Movie Found!
            </Typography>
          ) : null}
          {loading ? <Spinner /> : null}
        </React.Fragment>
      ) : null}
    </div>
  );
};
export default Index;
