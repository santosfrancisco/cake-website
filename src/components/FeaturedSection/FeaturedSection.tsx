import React from 'react';
import Title from '@components/Title';
import ProductCard from '@components/ProductCard';
import { Row, Col } from 'react-awesome-styled-grid';
import { Rate } from '@components/StarsRating/StarsRating';

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
          <Title style={{ marginBottom: 38 }}>FATHERS DAY SPECIAL</Title>
          <Row>
            {[0, 1, 2, 3, 4].map((product, idx) => (
              <Col key={product}>
                <ProductCard
                  name="Bolo de chocolate"
                  price={4.99}
                  oldPrice={6.99}
                  rate={idx as Rate}
                />
              </Col>
            ))}
          </Row>
        </Styled.Content>
      </Col>
    </Styled.Section>
  );
};

export default FeaturedSection;
