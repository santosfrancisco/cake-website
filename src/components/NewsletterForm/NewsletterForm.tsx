import Socials from '@components/Socials';
import React from 'react';

import * as Styled from './styles';

const NewsletterForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <Styled.Container>
      <Styled.Title>STAY TUNED.</Styled.Title>
      <Styled.Description>
        Do you want to get Promo Code & New update directly yo your inbox?
      </Styled.Description>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Wrapper>
          <Styled.Input placeholder="Name" />
          <Styled.Input placeholder="Email" type="email" />
        </Styled.Wrapper>
        <Styled.Wrapper>
          <Styled.SubmitButton>Submit</Styled.SubmitButton>
          <Socials />
        </Styled.Wrapper>
      </Styled.Form>
    </Styled.Container>
  );
};

export default NewsletterForm;
