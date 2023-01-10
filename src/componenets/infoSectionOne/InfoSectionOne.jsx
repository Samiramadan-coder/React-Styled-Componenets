import React from 'react';
import sectionOneImage from '../../images/section1.png';
import { 
  Container,
  Wrapper,
  Right,
  Image,
  Left,
  Title,
  Header,
  Description,
  List,
  ListItem
} from '../styles/Styled.Section'; 

function InfoSectionOne() {
  return (
    <Container>
      <Wrapper dir="row">
        <Right>
          <Image src={sectionOneImage} />
        </Right>
        <Left>
          <Title>Why Choose Us?</Title>
          <Header>IT lifecycle management all in one place</Header>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nihil rerum itaque repellat, soluta culpa ducimus 
            perspiciatis iste harum ipsa nesciunt adipisci modi 
            sequi quibusdam obcaecati voluptate fuga iusto illo? Porro!
          </Description>
          <List>
            <ListItem>Transport advice</ListItem>
            <ListItem>Volumne bundling</ListItem>
            <ListItem>Global IT sourcing</ListItem>
            <ListItem>International deliveries</ListItem>
            <ListItem>Nationwide service network</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  )
}

export default InfoSectionOne;