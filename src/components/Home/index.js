import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../../config";
import {
  HeroImage,
  SearchBar,
  LoadMoreBtn,
  FourColGrid,
  MovieThumb,
  Spinner,
} from "../elements";
import "./Home.css";

const Index = () => {
  const [movieList, setMovieList] = useState([]);
  const [heroImage, setHeroImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async (endpoint) => {
    setIsLoading(true);
    await fetch(endpoint).then((response) =>
      response.json().then((res) => {
        console.log(res);
        setMovieList(res.results);
        setCurrentPage(res.page);
        setTotalPage(res.total_pages);
        setHeroImage(res.results[0]);
        setIsLoading(false);
      })
    );
  };

  const reload = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`;
    fetchMovies(endpoint);
  };

  const loadMoreItems = () => {
    let endpoint = "";
    setIsLoading(true);
    if (searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
        currentPage + 1
      }`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
        currentPage + 1
      }`;
    }
    fetchMovies(endpoint);
  };

  const onSearchTerm = (searchTerm) => {
    console.log("searchTerm:", searchTerm);
    let endpoint = "";
    setIsLoading(true);
    if (searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    fetchMovies(endpoint);
  };

  useEffect(() => {
    reload();
  }, []);

  return (
    <div className="rmdb-home">
      {heroImage ? (
        <div>
          <HeroImage
            imageUrl={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
            title={heroImage.original_title}
            text={heroImage.overview}
          />
          <SearchBar onSearch={onSearchTerm} />
        </div>
      ) : null}
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="rmdb-home-grid">
          <FourColGrid
            source={movieList}
            title={searchTerm ? "Search Results" : "Popular Movies"}
          />
          <LoadMoreBtn />
        </div>
      )}
    </div>
  );
};
export default Index;
