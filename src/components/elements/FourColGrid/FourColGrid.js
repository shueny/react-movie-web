import React from 'react';
import {RMDBGridH1, RMDBGridContent, RMDBGridElement} from './FourColGridStyle';

const FourColGrid = (props) => {
  const {header, loading} = props;

  const renderElement = () => {
    const gridElement = props.children.map((element, i) => {
      console.log(element);
      return <RMDBGridElement key={i}>{element}</RMDBGridElement>;
    });
    return gridElement;
  };

  return (
    <div>
      {header && !loading ? <RMDBGridH1>{header}</RMDBGridH1> : null}
      <RMDBGridContent>{renderElement()}</RMDBGridContent>;
    </div>
  );
};

export default FourColGrid;
