import ProductCard from '@components/ProductCard';
import Title from '@components/Title';
import colors from '@styles/colors';
import { popularProducts } from 'data';
import React from 'react';
import { Col, Row } from 'react-awesome-styled-grid';

import * as Styled from './styles';

const PopularSection: React.FC = () => {
  return (
    <Styled.Section as="section">
      <Col xs={4}>
        <Title color={colors.pink}>Popular</Title>
      </Col>
      <Col>
        <Row>
          {popularProducts.map(product => (
            <Col md={8 / 5} align="center" key={product.id}>
              <ProductCard name={product.name} price={product.price} />
            </Col>
          ))}
        </Row>
      </Col>
    </Styled.Section>
  );
};

export default PopularSection;
