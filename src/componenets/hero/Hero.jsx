import React from 'react';
import styled from 'styled-components';
import heroImage from "../../images/hero.png";

const Container = styled.div`
  display: flex;
  height: 90%;
`;

const Left = styled.div`
  width: 60%;
  background-color: ${props => props.theme.colors.bgDefault};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  width: 40%;
  background-color: ${props => props.theme.colors.bgDefault};
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  width: 60%;
  font-size: 40px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  text-align: center;
`;

const Description = styled.p`
  width: 70%;
  font-size: 20px;
  color: ${props => props.theme.colors.textDark};
`;

const Image = styled.img`
  width: 500px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  font-weight: bold;
  color: ${props => props.theme.colors.bgDefault};
  margin-left: 5px;
  background-color: ${props => props.theme.colors.primary};
  padding: 15px 30px;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
  background: linear-gradient(to right, ${props => props.theme.colors.bgLight} 50%, ${props => props.theme.colors.primary} 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  &:hover {
    color: ${props => props.theme.colors.primary};
    border: 2px solid ${props => props.theme.colors.primary};
    background-position: left bottom;
  }
`;

function Hero() {
  return (
    <Container>
      <Left>
        <Title>IT-Management - IT Support and IT Services for everyone</Title>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          In tempora necessitatibus alias ab itaque quidem dolorem 
          reiciendis facilis ipsa amet iusto eveniet, asperiores nulla 
          exercitationem optio est rem, quos praesentium?
        </Description>
        <ButtonContainer>
          <Button>About us</Button>
          <Button>Contact us</Button>
        </ButtonContainer>
      </Left>
      <Right>
        <Image src={heroImage} />
      </Right>
    </Container>
  )
}

export default Hero;