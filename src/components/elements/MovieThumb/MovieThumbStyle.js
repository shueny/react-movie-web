import styled from 'styled-components';

export const MovieThumbImg = styled.img `
  width: 100%;
  height: auto;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
`;


export const Clickable = styled.div `
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;