import colors from '@styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  height: 512px;
  border-radius: 25px;
  margin-top: 60px;
`;

export const ImageWrapper = styled.div`
  width: 40%;

  img {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentWraper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.yellow};
  width: 60%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  height: 100%;

  padding-top: 80px;
  padding-bottom: 64px;
  padding-left: 89px;
`;

export const Icon = styled.img`
  width: 24px !important;
  height: 24px;
`;

export const Tag = styled.span`
  color: ${colors.green};
  text-transform: uppercase;
  margin-left: 12px;
  &:nth-child(2) {
    font-weight: bold;
  }
  & + & {
    margin-left: 6px;
    ::before {
      content: '| ';
    }
  }
`;

export const Title = styled.h1`
  color: ${colors.pink};
  font-size: 48px;
  font-weight: 900;
  line-height: 50px;
  margin: 8px 0;

  max-width: 346px;
`;

export const Description = styled.p`
  font: normal normal 300 12px/20px Montserrat;
  margin-top: 28px;
  max-width: 394px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
`;
