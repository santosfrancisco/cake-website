import colors from '@styles/colors';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #404040;
  color: ${colors.white};

  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);

  a {
    text-decoration: none;
    font-size: 12px;
    line-height: 24px;
    color: ${colors.white};
    &:hover {
      font-weight: bold;
    }
  }
`;

export const PrivacyWrapper = styled.div`
  height: 46px;
  color: ${colors.pink};
  font-size: 12px;
  background-color: ${colors.text};

  display: flex;
  align-items: 'center';
  /* justify-content: space-between; */
`;
