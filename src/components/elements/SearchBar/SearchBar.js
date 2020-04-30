import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {
  RMDBSearchBar,
  RMDBSearchContent,
  RMDBSearchIcon,
  RMDBSearchInput,
} from './SearchBarStyle';

class SearchBar extends Component {
  state = {
    value: '',
  };

  timeout = null;

  doSearch = (event) => {
    const {value} = this.state;
    this.setState({value: event.target.value});
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.callback(value);
    }, 500);
  };

  render() {
    const {value} = this.state;
    return (
      <RMDBSearchBar>
        <RMDBSearchContent>
          <RMDBSearchIcon>
            <FontAwesome name="search" />
          </RMDBSearchIcon>
          <RMDBSearchInput
            type="text"
            placeholder="Search"
            onChange={this.doSearch}
            value={value}
          />
        </RMDBSearchContent>
      </RMDBSearchBar>
    );
  }
}

export default SearchBar;
