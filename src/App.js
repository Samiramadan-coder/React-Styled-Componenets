import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Hero from "./componenets/hero/Hero";
import InfoBoxes from "./componenets/infoBoxes/InfoBoxes";
import Navbar from "./componenets/navbar/Navbar";
import { ThemeProvider } from "styled-components";
import InfoSectionOne from "./componenets/infoSectionOne/InfoSectionOne";
import InfoSectionTwo from "./componenets/infoSectionTwo/InfoSectionTwo";
import InfoSectionThree from "./componenets/infosectionthree/InfoSectionThree";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: white;
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
    * {
      font-family: 'Poppins', sans-serif;
    }
  }
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
`;

const theme = {
  colors: {
    primary: 'darkBlue',
    secondary: 'tomato',
    light: 'black',
    text: 'snow',
    textDark: 'gray',
    bgDefault: 'white',
    bgPrimary: 'darkblue',
    bgLight: 'aliceBlue'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Hero />
        <InfoBoxes />
        <InfoSectionOne />
        <InfoSectionTwo />
        <InfoSectionThree />
      </Container>
    </ThemeProvider>
  )
}

export default App; 
