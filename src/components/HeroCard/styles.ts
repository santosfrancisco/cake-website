import colors from '@styles/colors';
import styled from 'styled-components';
import { config } from 'react-awesome-styled-grid';

export const Container = styled.div`
  border-radius: 25px;
  margin-top: 60px;

  ${props => config(props).media.sm`
    height: 512px;
  `}
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  background-image: url('/cake.jpg');
  background-size: cover;
  background-position: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  ${props => config(props).media.sm`
     border-top-left-radius: 25px;
     border-bottom-left-radius: 25px;
     border-top-right-radius: 0;
  `}
`;

export const ContentWraper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.yellow};
  height: 100%;
  padding: 16px;

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  ${props => config(props).media.sm`
    padding-top: 80px;
    padding-bottom: 64px;
    padding-left: 89px;

    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 0;
  `}
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
  font-size: 12px;
  line-height: 20px;
  font-weight: 300;
  margin: 24px 0;
  max-width: 394px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
`;
