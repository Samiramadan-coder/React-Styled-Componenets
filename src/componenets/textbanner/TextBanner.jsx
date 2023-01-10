import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: tomato;
`;

const SubTitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  margin: 5px;
  color: darkblue;
`;

const TextBanner = ({title, subTitle}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  )
}

export default TextBanner;