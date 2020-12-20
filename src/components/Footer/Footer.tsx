import React from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-awesome-styled-grid';
import NewsletterForm from '@components/NewsletterForm';

import * as Styled from './styles';

const LINKS_1 = [
  { text: 'About', href: '#' },
  { text: 'Blog', href: '#' },
  { text: 'FAQ', href: '#' },
  { text: 'Contact', href: '#' },
];
const LINKS_2 = [
  { text: 'Shop', href: '#' },
  { text: 'Mershandising', href: '#' },
  { text: 'Delivery Information', href: '#' },
  { text: 'Bakers Centre', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <Styled.FooterContainer>
      <Container>
        <Row style={{ paddingTop: 38, paddingBottom: 36 }}>
          <Col md={2} align="start">
            <img src="/svg/logo_white.svg" alt="logo" />
            <p style={{ font: 'normal normal normal 12px/24px Montserrat', marginTop: 16 }}>
              Renault Building, Lot 1A,
              <br /> Jalan Kemajuan, Seksyen 13,
              <br /> 46200, Petaling Jaya,
              <br /> Malaysia.
            </p>
          </Col>
          <Col md={3}>
            <Col xs={4} noGutter>
              <p style={{ font: 'normal normal bold 16px/24px Montserrat' }}>Zeecraft</p>
            </Col>
            <Row style={{ marginTop: 16 }}>
              <Col xs={2}>
                {LINKS_1.map(link => (
                  <Link key={link.text} href={link.href}>
                    {link.text}
                  </Link>
                ))}
              </Col>
              <Col xs={2}>
                {LINKS_2.map(link => (
                  <Link key={link.text} href={link.href}>
                    {link.text}
                  </Link>
                ))}
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <NewsletterForm />
          </Col>
        </Row>
      </Container>
      <Styled.PrivacyWrapper align="center" justify="space-between">
        <Col align="center" sm={2}>
          {`All Right Reserved Makerhub.my | ${new Date().getFullYear()}`}
        </Col>
        <Col align="center" sm={2}>
          Term of Services • Privacy Policy
        </Col>
      </Styled.PrivacyWrapper>
    </Styled.FooterContainer>
  );
};

export default Footer;
