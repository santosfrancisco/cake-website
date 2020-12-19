import React from 'react';

import { Container, StarIcon } from './styles';

interface IStarsRating {
  rate: 1 | 2 | 3 | 4 | 5;
  reviewers: number;
}

const StarsRating: React.FC<IStarsRating> = ({ rate, reviewers }) => {
  return (
    <Container>
      {[1, 2, 3, 4, 5].map(value => (
        <StarIcon key={rate} src={value > rate ? '/svg/star.svg' : '/svg/filled-star.svg'} />
      ))}
      <span style={{ marginLeft: 16 }}>{`${reviewers} Review`}</span>
    </Container>
  );
};

export default StarsRating;
