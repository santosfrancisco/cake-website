/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Title from '@components/Title';
import ProductCard from '@components/ProductCard';
import { Row, Col } from 'react-awesome-styled-grid';
import { Rate } from '@components/StarsRating';

import { featuredProducts } from 'data';

import * as Styled from './styles';

const FeaturedSection: React.FC = () => {
  return (
    <Styled.Section as="section">
      <Col noGutter>
        <Styled.SearchWrapper>
          <Styled.SearchInput />
          <Styled.SearchButton>find location</Styled.SearchButton>
        </Styled.SearchWrapper>
        <Styled.Content>
          <Title>FATHERS DAY SPECIAL</Title>
          <Row>
            {featuredProducts.map(product => (
              <Col md={8 / 5} align="center" key={product.id}>
                <ProductCard {...product} rate={product.rate as Rate} />
              </Col>
            ))}
          </Row>
        </Styled.Content>
      </Col>
    </Styled.Section>
  );
};

export default FeaturedSection;
