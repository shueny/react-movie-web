import React, {Component} from 'react';
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
    this.state = {};
  }

  render() {
    return (
      <RMDBHome>
        <HeroImage />
        <SearchBar />
        <FourColGrid />
        <Spinner />
        <LoadMoreBtn />
      </RMDBHome>
    );
  }
}
