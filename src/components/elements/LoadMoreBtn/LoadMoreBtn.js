import React from 'react';
import {LoadmoreBtn, LoadmoreBtnP} from './LoadMoreBtnStyle';

const LoadMoreBtn = (props) => {
  return (
    <LoadmoreBtn onClick={props.onClick}>
      <LoadmoreBtnP>{props.text}</LoadmoreBtnP>
    </LoadmoreBtn>
  );
};

export default LoadMoreBtn;
