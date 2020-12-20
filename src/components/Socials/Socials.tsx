import React from 'react';

import { Container } from './styles';

const Socials: React.FC = () => {
  return (
    <Container>
      <img src="/svg/facebook-logo.svg" alt="facebook" />
      <img src="/svg/twitter-logo-silhouette.svg" alt="twitter" />
      <img src="/svg/play-button.svg" alt="youtube" />
      <img src="/svg/linkedin-logo.svg" alt="linkedin" />
      <img src="/svg/instagram.svg" alt="instagram" />
      <img src="/svg/rss.svg" alt="RSS" />
    </Container>
  );
};

export default Socials;
