import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import { ThemeProvider } from './Theme_provider'; // Assuming you have a ThemeProvider

const App = () => {
  const [theme, setTheme] = useState('light'); // Default theme is light

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark'); // Apply dark mode if necessary
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('theme', theme); // Save the current theme
    document.documentElement.classList.toggle('dark', theme === 'dark'); // Toggle dark mode class on the html element
  }, [theme]);

  return (
    <div className='container min-w-full min-h-screen px-[5%] sm:px-[10%] text-white dark:bg-[#081b29]'>
      <ThemeProvider defaultTheme={theme} storageKey="vite-ui-theme">
        <Header theme={theme} setTheme={setTheme} />
        <Home theme={theme} />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
