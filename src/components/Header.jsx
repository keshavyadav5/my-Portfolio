import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaSun, FaMoon } from "react-icons/fa6";

const Header = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
    <div className='fixed top-0 left-0 px-[5%] md:px-[10%] w-full shadow-xl py-2 dark:bg-[#081b29] bg-[#eaedef] z-50 flex justify-between items-center'>
      <div className="flex-1 text-2xl font-bold italic text-black dark:text-white flex gap-5 items-center">
        <ScrollLink
          to="home"
          smooth={true}
          offset={-65}
          duration={500}
          className='hover:text-[#01a2e6] transition-all duration-200 cursor-pointer active:text-[#01a2e6]'
        >
          <h2>KeSHaV<span className='text-[#01a2e6] font-bold text-3xl z-50'>.</span></h2>
        </ScrollLink>

        {/* Theme Toggle */}
        <div>
          {theme === 'light' ? (
            <FaSun className='text-2xl ml-2 cursor-pointer' onClick={toggleTheme} />
          ) : (
            <FaMoon className='text-2xl ml-2 cursor-pointer' onClick={toggleTheme} />
          )}
        </div>
      </div>

      <button
        onClick={toggleMenu}
        className="block md:hidden px-2 py-1 text-xl text-black dark:text-white font-bold dark:font-normal menu-toggle"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <div
        className={`absolute top-12 left-0 w-full py-3 rounded-b-xl dark:bg-[#0a1c2a] text-black dark:text-white flex flex-col items-center gap-3 transition-all duration-300  ease-in-out transform ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} md:relative md:top-0 md:flex-row md:w-auto md:translate-x-0 md:opacity-100 md:bg-transparent md:gap-8 bg-slate-50 rounded-t-none`}
      >
        <ScrollLink
          to="home"
          smooth={true}
          offset={-65}
          duration={500}
          className={`hover:text-[#01a2e6] transition-all duration-200 cursor-pointer active:text-[#01a2e6] ${menuOpen ? 'block' : 'hidden'} md:block`}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          offset={-55}
          duration={500}
          className={`hover:text-[#01a2e6] transition-all duration-200 cursor-pointer active:text-[#01a2e6] ${menuOpen ? 'block' : 'hidden'} md:block`}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="services"
          smooth={true}
          offset={0}
          duration={500}
          className={`hover:text-[#01a2e6] transition-all duration-200 cursor-pointer active:text-[#01a2e6] ${menuOpen ? 'block' : 'hidden'} md:block`}
        >
          Services
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          offset={-65}
          duration={500}
          className={`hover:text-[#01a2e6] transition-all duration-200 cursor-pointer active:text-[#01a2e6] ${menuOpen ? 'block' : 'hidden'} md:block`}
        >
          Projects
        </ScrollLink>
        <ScrollLink
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
