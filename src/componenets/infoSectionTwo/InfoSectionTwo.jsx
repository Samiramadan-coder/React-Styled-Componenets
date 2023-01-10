import React from 'react';
import styled from 'styled-components';
import sectionImage from "../../images/laptopDark.jpg";

const Container = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-image: url(${sectionImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-bottom: 50px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  padding: 2%;
`;

const Description = styled.div`
  color: white;
  width: 40%;
  font-size: 25px;
  margin-top: 30px;
`;

const InfoSectionTwo = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>Anywhere Workspace!</Title>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Nihil rerum itaque repellat, soluta culpa ducimus
        </Description>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Nihil rerum itaque repellat, soluta culpa ducimus
        </Description>
      </TextWrapper>
    </Container>
  )
}

export default InfoSectionTwo;