import React from 'react';
import {
  RMDBHeroImage,
  RMDBHeroImageContent,
  RMDBHeroImageText,
  RMDBHeroImageTextH1,
  RMDBHeroImageTextP,
} from './HeroImageStyle';

// Funtional component
const HeroImage = (props) => {
  const {image, title, text} = props;
  return (
    <RMDBHeroImage style={{backgroundImage: `url(${image})`}}>
      <RMDBHeroImageContent>
        <RMDBHeroImageText>
          <RMDBHeroImageTextH1>{title}</RMDBHeroImageTextH1>
          <RMDBHeroImageTextP>{text}</RMDBHeroImageTextP>
        </RMDBHeroImageText>
      </RMDBHeroImageContent>
    </RMDBHeroImage>
  );
};

export default HeroImage;
