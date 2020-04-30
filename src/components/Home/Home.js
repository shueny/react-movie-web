import React, {Component} from 'react';
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from '../../config.js';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';
import {RMDBHome, RMDBHomeGrid} from './HomeStyle.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      heroImage: null,
      isLoading: false,
      currentPage: 0,
      totalPage: 0,
      searchTerm: '',
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=zh-TW&page=1`;
    this.fetchData(endpoint);
  }

  fetchData = (endpoint) => {
    const {movies, heroImage} = this.state;
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          movies: [...movies, ...res.results], //第一個參數為copy,第二個為append新的值
          heroImage: heroImage || res.results[0], //有值的話就使用原本的，不然就取結果中第一個
          isLoading: false,
          currentPage: res.page,
          totalPage: res.total_pages,
        });
      })
      .catch((error) => console.log('Error:', error));
  };

  loadMoreData = () => {
    const {currentPage, searchTerm} = this.state;
    let endpoint = '';
    this.setState({isLoading: true});

    if (searchTerm === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=zh-TW&page=${currentPage +
        1}`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=zh-TW&query=${searchTerm}&page=${currentPage +
        1}`;
    }
    this.fetchData(endpoint);
  };

  searchItems = (searchTerm) => {
    console.log(searchTerm);
    const {currentPage} = this.state;
    let endpoint = '';
    this.setState({
      movies: [],
      isLoading: true,
      searchTerm,
    });

    if (searchTerm === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=zh-TW&page=${currentPage +
        1}`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=zh-TW&query=${searchTerm}`;
    }
    this.fetchData(endpoint);
  };

  render() {
    const {
      heroImage,
      searchTerm,
      isLoading,
      movies,
      currentPage,
      totalPage,
    } = this.state;
    console.log(heroImage);
    if (!heroImage) return null;
    return (
      <RMDBHome>
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
        <SearchBar callback={this.searchItems} />
        <RMDBHomeGrid>
          <FourColGrid
            header={searchTerm ? 'Search Results' : 'Popular Movies'}
            loading={isLoading}>
            {movies.map((element, i) => {
              return (
                <MovieThumb
                  key={i}
                  clickable={true}
                  image={
                    element.poster_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`
                      : './images/no_image.jpg'
                  }
                  movieId={element.id}
                  movieName={element.original_title}
                />
              );
            })}
          </FourColGrid>
          {isLoading && <Spinner />}
          {currentPage <= totalPage &&
            !isLoading && (
              <LoadMoreBtn text="Load More" onClick={this.loadMoreData} />
            )}
        </RMDBHomeGrid>
      </RMDBHome>
    );
  }
}
