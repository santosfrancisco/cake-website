import StarsRating from '@components/StarsRating';
import { Rate } from '@components/StarsRating/StarsRating';
import React from 'react';

import * as Styled from './styles';

interface IProductCard {
  image?: string;
  rate?: Rate;
  name: string;
  price: number;
  oldPrice?: number;
}

const ProductCard: React.FC<IProductCard> = ({ image, name, rate, price, oldPrice }) => {
  return (
    <Styled.Container>
      <Styled.FeaturedIcon />
      <Styled.CardImageWrapper imgSrc={image} />
      {rate !== undefined ? (
        <Styled.RatingWrapper>
          <StarsRating rate={rate} />
        </Styled.RatingWrapper>
      ) : null}
      <Styled.ProductInfo>
        <Styled.ProductName>{name}</Styled.ProductName>
        {oldPrice ? <Styled.OldProductPrice>R$ {oldPrice}</Styled.OldProductPrice> : null}
        <Styled.ProductPrice>R$ {price}</Styled.ProductPrice>
      </Styled.ProductInfo>
    </Styled.Container>
  );
};

export default ProductCard;