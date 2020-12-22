import React from 'react';

import { Container, StarIcon } from './styles';

export type Rate = 0 | 1 | 2 | 3 | 4 | 5;

interface IStarsRating {
  rate: Rate;
  reviewers?: number;
}

const StarsRating: React.FC<IStarsRating> = ({ rate, reviewers }) => {
  return (
    <Container>
      {[1, 2, 3, 4, 5].map(value => (
        <StarIcon key={value} src={value > rate ? '/svg/star.svg' : '/svg/filled-star.svg'} />
      ))}
      {reviewers !== undefined ? (
        <span style={{ marginLeft: 16 }}>{`${reviewers} Review`}</span>
      ) : null}
    </Container>
  );
};

export default StarsRating;
