import React from 'react';
import TextBanner from '../textbanner/TextBanner';
import styled from 'styled-components';
import { 
  Card, 
  CardContent, 
  CardTitle, 
  Description, 
  Button } from '../styles/Styled.Card';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const InfoBoxes = () => {
  return (
    <div>
      <TextBanner 
        title="what we provide" 
        subTitle="Our Services" />
      <Container>
        <Card>
          <CardContent>
            <CardTitle>Training Courses</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Consectetur atque quidem voluptates alias autem deserunt modi 
              molestiae esse unde ab officiis, sed dicta sit fugit nobis, 
              provident explicabo debitis natus.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Services Desk</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Consectetur atque quidem voluptates alias autem deserunt modi 
              molestiae esse unde ab officiis, sed dicta sit fugit nobis, 
              provident explicabo debitis natus.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Data Recovery</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Consectetur atque quidem voluptates alias autem deserunt modi 
              molestiae esse unde ab officiis, sed dicta sit fugit nobis, 
              provident explicabo debitis natus.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Proactive Services</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Consectetur atque quidem voluptates alias autem deserunt modi 
              molestiae esse unde ab officiis, sed dicta sit fugit nobis, 
              provident explicabo debitis natus.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>User Support</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Consectetur atque quidem voluptates alias autem deserunt modi 
              molestiae esse unde ab officiis, sed dicta sit fugit nobis, 
              provident explicabo debitis natus.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>24/7 Services</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Consectetur atque quidem voluptates alias autem deserunt modi 
              molestiae esse unde ab officiis, sed dicta sit fugit nobis, 
              provident explicabo debitis natus.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}

export default InfoBoxes;