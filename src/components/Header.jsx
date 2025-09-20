import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaSun, FaMoon } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleHeading = () => {
    if (location.pathname.includes('certificate')) {
      navigate('/')
    }
    setMenuOpen(!menuOpen);
  }

  const homeHandle = () => {
    setMenuOpen(!menuOpen);
    navigate('/')
  }
  const certificateHandler = () => {
    setMenuOpen(!menuOpen);
    navigate('/certificate')
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-toggle') && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className='fixed top-0 left-0 px-[5%] md:px-[10%] w-full shadow-xl py-2 dark:bg-[#081b29] bg-[#eaedef] z-50 flex justify-between items-center transition-all duration-300'>
      <div className="flex-1 text-2xl font-bold italic text-black dark:text-white flex md:gap- items-center transition-all duration-300">
        <ScrollLink
          onClick={homeHandle}
          to="home"
          smooth={true}
          offset={0}
          duration={500}
          className='hover:text-[#01a2e6] transition-all duration-200 cursor-pointer active:text-[#01a2e6]'
        >
          <h2>KESHAV<span className='text-[#01a2e6] font-bold text-3xl z-50'>.</span></h2>
        </ScrollLink>

        {/* Theme Toggle */}
        <div className='px-4 mt-1 hidden md:block'>
          {theme === 'light' ? (
            <FaSun className='text-xl ml-2 cursor-pointer' onClick={toggleTheme} />
          ) : (
            <FaMoon className='text-xl ml-2 cursor-pointer' onClick={toggleTheme} />
          )}
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <button
          onClick={toggleMenu}
          className="block md:hidden px-2 py-1 text-xl text-black dark:text-white font-bold dark:font-normal menu-toggle transition-all duration-300"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
        <div className='pr-2 md:hidden'>
          {theme === 'light' ? (
            <FaSun className='text-xl ml-2 cursor-pointer text-gray-500' onClick={toggleTheme} />
          ) : (
            <FaMoon className='text-xl ml-2 cursor-pointer' onClick={toggleTheme} />
          )}
        </div>
      </div>


      <div
        className={`absolute top-12 left-0 w-full py-3 rounded-b-xl dark:bg-[#0a1c2a] text-black dark:text-white flex flex-col items-center gap-3 transition-all duration-0  ease-in-out transform ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} md:relative md:top-0 md:flex-row md:w-auto md:translate-x-0 md:opacity-100 md:bg-transparent md:gap-8 bg-slate-50 rounded-t-none`}
      >
        <ScrollLink
          onClick={homeHandle}
          to="home"
          smooth={true}
          offset={0}
          duration={500}
          className={`hover:text-[#01a2e6] transition-all duration-200 cursor-pointer active:text-[#01a2e6] ${menuOpen ? 'block' : 'hidden'} md:block`}
        >
          Home
        </ScrollLink>
        <ScrollLink
          onClick={handleHeading}
          to="about"
          smooth={true}
          offset={0}
          duration={500}
          className={`hover:text-[#01a2e6] transition-all duration-200 cursor-pointer active:text-[#01a2e6] ${menuOpen ? 'block' : 'hidden'} md:block`}
        >
          About
        </ScrollLink>
        <ScrollLink
          onClick={handleHeading}
          to="services"
          smooth={true}
          offset={0}
          duration={500}
          className={`hover:text-[#01a2e6] transition-all duration-200 cursor-pointer active:text-[#01a2e6] ${menuOpen ? 'block' : 'hidden'} md:block`}
        >
          Experience
        </ScrollLink>
        <ScrollLink
          onClick={handleHeading}
          to="projects"
          smooth={true}
          offset={0}
          duration={500}
          className={`hover:text-[#01a2e6] transition-all duration-200 cursor-pointer active:text-[#01a2e6] ${menuOpen ? 'block' : 'hidden'} md:block`}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          onClick={handleHeading}
          to="contact"
          smooth={true}
          offset={0}
          duration={500}
          className={`hover:text-[#01a2e6] transition-all duration-200 cursor-pointer active:text-[#01a2e6] ${menuOpen ? 'block' : 'hidden'} md:block`}
        >
          Contact
        </ScrollLink>
      </div>
    </div>
  );
};

export default Header;
