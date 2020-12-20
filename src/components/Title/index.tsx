import colors from '@styles/colors';
import styled from 'styled-components';

const Title = styled.h2<{ color?: string }>`
  font-weight: 900;
  line-height: 50px;
  font-size: 24px;
  color: ${({ color }) => color || colors.green};
  letter-spacing: 0px;
`;

export default Title;
