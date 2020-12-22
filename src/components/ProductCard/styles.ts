import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-width: 180px;
  width: 100%;
  position: relative;
  margin-top: 38px;
`;

export const CardImageWrapper = styled.div<{ imgSrc?: string }>`
  height: 187px;
  border-radius: 12px;

  ${({ imgSrc }) =>
    css`
      background-image: url(${imgSrc || '/cake.jpg'});
      background-size: cover;
    `}
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;

export const FeaturedIcon = styled.img.attrs({
  src: '/svg/featured.svg',
})`
  width: 21px;

  position: absolute;
  top: 0;
  right: 20px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.span`
  text-align: center;
  font-size: 18px;
  line-height: 50px;
`;

export const OldProductPrice = styled.span`
  text-align: center;
  font-size: 12px;
  text-decoration: line-through;
`;

export const ProductPrice = styled.span`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
