import colors from '@styles/colors';
import { Row } from 'react-awesome-styled-grid';
import styled from 'styled-components';

export const Section = styled(Row)`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.29);

  margin-top: 52px;
`;

export const Content = styled.div`
  background-color: ${colors.yellow};
  padding: 42px 52px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  height: 130px;
  padding: 0 52px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 58px;
  border: none;
  background-color: #ebebeb;
`;

export const SearchButton = styled.button`
  background-color: ${colors.text};
  color: ${colors.yellow};
  height: 58px;
  width: 281px;
  border: none;
  font-size: 14px;
  text-transform: uppercase;
`;
