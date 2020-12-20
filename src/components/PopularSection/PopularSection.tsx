import ProductCard from '@components/ProductCard';
import Title from '@components/Title';
import colors from '@styles/colors';
import React from 'react';
import { Col, Row } from 'react-awesome-styled-grid';

import * as Styled from './styles';

const PopularSection: React.FC = () => {
  return (
    <Styled.Section as="section">
      <Col>
        <Title color={colors.pink}>Popular</Title>
      </Col>
      <Row>
        {Array(10)
          .fill({ name: 'bolo de chocolate', price: 4.99, image: '/cake.jpg' })
          .map(product => (
            <Col md={8 / 5} align="center" key={product}>
              <ProductCard name={product.name} price={product.price} />
            </Col>
          ))}
      </Row>
    </Styled.Section>
  );
};

export default PopularSection;
