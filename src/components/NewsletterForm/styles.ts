import colors from '@styles/colors';
import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 24px;
`;

export const Form = styled.form``;

export const Input = styled.input`
  /* width: 204px; */
  width: 100%;
  height: 29px;
  border: 1px solid ${colors.white};
  background: #404040;

  color: ${colors.white};

  padding: 12px;

  & + & {
    margin-left: 14px;
  }
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  font-size: 12px;
  text-transform: uppercase;
  width: 136px;
  height: 29px;
  background-color: ${colors.white};
  border: none;
`;

export const Wrapper = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  max-width: 420px;
`;
