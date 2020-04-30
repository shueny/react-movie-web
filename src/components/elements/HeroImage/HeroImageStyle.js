import styled from 'styled-components';

export const RMDBHeroImage = styled.div `
  background-size: cover !important;
  background-position: center, center !important;
  width: 100%;
  height: 600px;
  position: relative;
  animation: animateHeroimage 1s;


@keyframes animateHeroimage {
  from {
      opacity:0;
  }
  to {
      opacity:1;
  }
}
`;

export const RMDBHeroImageContent = styled.div `
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
`;

export const RMDBHeroImageText = styled.div `
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    background: rgba(0, 0, 0, 0.0);
    color: #fff;
    
    @media screen and(max-width: 720px) {
      max-width: 100% ;
    }
`;

export const RMDBHeroImageTextH1 = styled.h1 `
    font-family: 'Lucida Grande', sans-serif;
    font-size: 48px;
    color: #fff;
    @media screen and(max-width: 720px) {
font-size: 38px;
        color: #fff;
    }
`;

export const RMDBHeroImageTextP = styled.p `
    font-size: 16px;
    line-height: 26px;
    color: #fff;
    font-weight: 200;


@media screen and(max-width: 720px) {
    font-size: 16px;
        line-height: 20px;
        color: #fff;
}
`;