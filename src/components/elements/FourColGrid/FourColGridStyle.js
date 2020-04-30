import styled from 'styled-components';

export const RMDBGridH1 = styled.h1 `
    font-family: 'Abel', sans-serif;
    font-size: 42px;
    @media screen and(max-width: 768px) {
      font-size: 22px;
    }
`;

export const RMDBGridContent = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
    position: relative;

    @media screen and(max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and(max-width: 375px) {
        grid-template-columns: repeat(1, 1fr);
    }
}
`;

export const RMDBGridElement = styled.div `
    animation: animateGrid 0.5s;
      
    @keyframes animateGrid {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;