import colors from '@styles/colors';
import styled from 'styled-components';

const Button = styled.button<{ pink?: boolean }>`
  background: ${({ pink }) => (pink ? colors.pink : colors.text)};
  color: ${({ pink }) => (pink ? colors.text : colors.yellow)};
  border-radius: 8px;
  min-height: 33px;
  min-width: 117px;
  border: none;
  text-transform: uppercase;
`;

export default Button;
