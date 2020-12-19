import React from 'react';
import Navbar from '@components/Navbar';
import { Row, Col } from 'react-awesome-styled-grid';

import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
