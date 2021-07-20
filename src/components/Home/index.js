import React, { useState, useEffect } from "react";
// import Container from "@material-ui/core/Container";
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";
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
  const [totalPages, setTotalPages] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async (endpoint) => {
    setIsLoading(true);
    await fetch(endpoint)
      .then((response) => response.json())
      .then((res) => {
        // console.log(res);
        setMovieList(res.results);
        setCurrentPage(res.page);
        setTotalPages(res.total_pages);
        setHeroImage(res.results[0]);
        setIsLoading(false);

        if (searchTerm === "") {
          localStorage.setItem(
            "stateDatas",
            JSON.stringify({
              movieList: res.results,
              heroImage: res.results[0],
              isLoading: false,
              currentPage: res.page,
              totalPages: res.total_pages,
            })
          );
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const reload = () => {
    if (localStorage.getItem("stateDatas")) {
      const fetchStorageData = JSON.parse(localStorage.getItem("stateDatas"));
      console.log(fetchStorageData);
      setMovieList(fetchStorageData.movieList);
      setCurrentPage(fetchStorageData.currentPage);
      setTotalPages(fetchStorageData.totalPages);
      setHeroImage(fetchStorageData.heroImage);
      setIsLoading(false);
    } else {
      const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`;
      fetchMovies(endpoint);
    }
  };

  const loadMoreItems = () => {
    // console.log("click more");
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

  const onSearchTerm = (searchText) => {
    // console.log("searchTerm:", searchText);
    setSearchTerm(searchText);
    let endpoint = "";
    setIsLoading(true);
    if (searchText === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}`;
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
            isLoading={isLoading}
          >
            {movieList.map((el, i) => {
              return (
                <MovieThumb key={`movie-${i}`} isClickable={true} item={el} />
              );
            })}
          </FourColGrid>

          {currentPage <= totalPages ? (
            <LoadMoreBtn
              onClick={loadMoreItems}
              text="Load more"
              isLoading={isLoading}
            />
          ) : null}
        </div>
      )}
    </div>
  );
};
export default Index;
