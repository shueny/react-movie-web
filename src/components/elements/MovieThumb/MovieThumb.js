import React from 'react';
import {MovieThumbImg, Clickable} from './MovieThumbStyle';

const MovieThumb = (props) => {
  return <MovieThumbImg src={props.image} alt="moviethunb" />;
};

export default MovieThumb;
