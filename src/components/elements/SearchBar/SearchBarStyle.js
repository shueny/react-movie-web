import styled from 'styled-components';

export const RMDBSearchBar = styled.div `
  width: 100%;
  height: 105px;
  background: #1c1c1c;
  position: relative;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  color: #fff;
`;
export const RMDBSearchContent = styled.div `
  max-width: 1280px;
  width: 100% ;
  height: 55px;
  background: #353535;
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  color: # fff;
`;

export const RMDBSearchIcon = styled.i `
    position: absolute;
    left: 20px;
    top: 12px;
    color: #fff;
`;

export const RMDBSearchInput = styled.input `
    font-family: 'Lucida Grande', sans-serif;
    font-size: 38px;
    position: relative;
    margin: 8px 0 0 60px;
    border: 0;
    background: transparent;
    height: 40px;
    width: 90% ;
    color: #fff;
    &: focus {
      outline: none;
    }
    @media screen and(max-width: 720px) {
      margin: 8px 0 0 60px;
      font-size: 28px;
      color: #fff;
    }
`;