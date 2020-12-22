import { config } from 'react-awesome-styled-grid';
import styled from 'styled-components';

export const Container = styled.div`
  img + img {
    margin-left: 12px;
    ${props => config(props).media.sm`
    margin-left: 24px;
  `}
  }
`;
