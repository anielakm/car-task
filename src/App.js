import React, { Component } from 'react';
import Header from './components/Header'
import TopBar from './components/TopBar'
import { createGlobalStyle } from "styled-components";
import { theme } from './utilis/theme'
import About from './components/About'
import Posts from './components/Posts'
import Form from './components/Form'


const Global = createGlobalStyle`
body{
  padding:0;
  margin:0;
}
*, *::before, *::after{
  box-sizing:border-box;
  font-family: ${theme.fonts.lato};
}
`;

class App extends Component {

  render() {
    return (
      <>
        <Global />
        <TopBar />
        <Header />
        <About />
        <Posts />
        <Form />
      </>
    );

  }

}

export default App;
