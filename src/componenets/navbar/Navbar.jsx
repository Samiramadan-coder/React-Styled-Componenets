import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${props => props.theme.colors.bgDefault};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Center = styled.div`
  display: flex;
  flex: 2;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 20px;
  text-decoration: underline;
  color: ${props => props.theme.colors.primary};;
  cursor: pointer;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
`;

const MenuItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: ${props => props.theme.colors.textDark};;
  cursor: pointer;
  &:hover {
    color: darkblue;
  }
`;

const Button = styled.button`
  font-weight: bold;
  background-color: ${props => props.theme.colors.primary};;
  border: 2px solid white;
  cursor: pointer;
  color: ${props => props.theme.colors.bgDefault};;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.bgLight};;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Logo>IT Support</Logo>
      </Left>
      <Center>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About us</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Contact</MenuItem>
          <MenuItem>Blog</MenuItem>
        </Menu>
      </Center>
      <Right>
        <Button>call us Now!</Button>
      </Right>
    </Container>
  )
}

export default Navbar