import ProductCard from '@components/ProductCard';
import Title from '@components/Title';
import colors from '@styles/colors';
import { recentProducts } from 'data';
import React from 'react';
import { Col, Row } from 'react-awesome-styled-grid';

import * as Styled from './styles';

const RecentSection: React.FC = () => {
  return (
    <Styled.Section as="section">
      <Col xs={4}>
        <Title color={colors.pink}>Recent</Title>
      </Col>
      <Col>
        <Row>
          {recentProducts.map(product => (
            <Col md={8 / 5} align="center" key={product.id}>
              <ProductCard name={product.name} price={product.price} />
            </Col>
          ))}
        </Row>
      </Col>
    </Styled.Section>
  );
};

export default RecentSection;
