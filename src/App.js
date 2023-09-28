import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import Project from './Projects/Project';
import ContactMe from './ContactMe/ContactMe';
import NavBar from './NavBar/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Project />
      <ContactMe />
    </>
  )
}

export default App
