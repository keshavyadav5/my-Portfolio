import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <div className='container min-w-full min-h-screen px-[5%] sm:px-[10%] bg-[rgb(8,27,41)] text-white'>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
