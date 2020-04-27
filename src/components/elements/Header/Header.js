import React from 'react';
import {
  RMDBHeader,
  RMDBHeaderContent,
  RMDBLogo,
  RMDBTmdbLogo,
} from './HeaderStyle.js';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <RMDBHeader>
        <RMDBHeaderContent>
          <RMDBLogo src="../images/reactMovie_logo.png" />
          <RMDBTmdbLogo src="../images/tmdb_logo.png" />
        </RMDBHeaderContent>
      </RMDBHeader>
    );
  }
}
