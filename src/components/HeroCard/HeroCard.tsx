import React from 'react';
import { Col, Row } from 'react-awesome-styled-grid';
import StarsRating from '@components/StarsRating';
import Button from '@components/Button';

import * as Styled from './styles';

const TAGS = ['FRESH BAKED', 'FATHERS DAY'];

const HeroCard: React.FC = () => {
  return (
    <Row>
      <Col>
        <Styled.Container>
          <div style={{ display: 'flex', height: '100%' }}>
            <Row>
              <Col noGutter xs={4} sm={3}>
                <Styled.ImageWrapper />
              </Col>
              <Col noGutter xs={4} sm={5}>
                <Styled.ContentWraper>
                  <small style={{ display: 'inline-flex', fontSize: 12, alignItems: 'center' }}>
                    <Styled.Icon src="/svg/mitten.svg" alt="" />
                    {TAGS.map(tag => (
                      <Styled.Tag key={tag}>{tag}</Styled.Tag>
                    ))}
                  </small>
                  <Styled.Title>MORNING BERRY</Styled.Title>
                  <StarsRating rate={4} reviewers={92} />
                  <Styled.Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus dui,
                    porta a enim ut, commodo commodo nulla. Cras condimentum a felis ut posuere.
                  </Styled.Description>
                  <Styled.ActionsWrapper>
                    <Button>order</Button>
                    <Button pink style={{ marginLeft: 12 }}>
                      Explore
                    </Button>
                  </Styled.ActionsWrapper>
                </Styled.ContentWraper>
              </Col>
            </Row>
          </div>
        </Styled.Container>
      </Col>
    </Row>
  );
};

export default HeroCard;
