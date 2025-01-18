import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import { ThemeProvider } from './Theme_provider';

const App = () => {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || theme;
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="container min-w-full min-h-screen px-[5%] sm:px-[10%] text-white dark:bg-[#081b29]">
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
