import React from 'react';
import { Col, Container, Row } from 'react-awesome-styled-grid';
import Title from '@components/Title';
import ProductCard from '@components/ProductCard';
import colors from '@styles/colors';
import { bytesProducts } from 'data';
import * as Styled from './styles';

const BytesSection: React.FC = () => {
  return (
    <Styled.Section>
      <Container>
        <Row>
          <Col xs={4}>
            <Title color={colors.pink}>Bytes</Title>
          </Col>
          <Col>
            <Row>
              {bytesProducts.map(product => (
                <Col md={8 / 5} align="center" key={product.id}>
                  <ProductCard name={product.name} price={product.price} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Styled.Section>
  );
};

export default BytesSection;
