import React from 'react';
import { Container as AwesomeContainer, Row, Col } from 'react-awesome-styled-grid';

import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <AwesomeContainer>
        <Row>
          <Col align="flex-start" justify="center" style={{ height: 70 }}>
            <img src="/svg/logo.svg" alt="logo" />
          </Col>
        </Row>
      </AwesomeContainer>
    </Container>
  );
};

export default Navbar;
