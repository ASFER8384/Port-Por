import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/globalStyle";
import { light,dark } from "./style/Theme";


// importing components sections
import Navigation from "./components/Navigation";
import Home from './components/section/Home';
import About from './components/section/About.js';
import Work from  './components/section/Work';
import Skills from './components/section/Skills';
import Blogs from  './components/section/Blogs';
import ContactPage from   './components/section/Contactpage';
import Footer from './components/Footer.js';
import ScrollTop from "./components/section/ScrollTop";


function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Home/>
        <About/>
        <Skills/>
        <Work/>
        <Blogs/>
        <ContactPage/>
        <Footer/>
        <ScrollTop/>
      </ThemeProvider>
    </>
  );
}

export default App;
