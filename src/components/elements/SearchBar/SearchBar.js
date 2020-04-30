import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
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
            <FontAwesomeIcon icon={faSearch} size="lg" />
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
