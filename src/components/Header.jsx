import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu if clicked outside
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
    <div className='fixed top-0 left-0 px-[5%] md:px-[10%] w-full py-2 bg-[#081b29] z-50 flex justify-between items-center'>
      <div className="flex-1 text-2xl font-bold italic text-white flex items-center">
        <ScrollLink
          to="home"
          smooth={true}
          offset={-65}
          duration={500}
          className='hover:text-[#01a2e6] transition-all duration-200 cursor-pointer active:text-[#01a2e6] '
        >
          <h2>KeSHaV<span className='text-[#01a2e6] font-bold text-3xl z-50'>.</span></h2>
        </ScrollLink>
      </div>

      <button
        onClick={toggleMenu}
        className="block md:hidden px-2 py-1 text-xl text-white menu-toggle"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <div
        className={`absolute top-12 left-0 w-full py-3 rounded-r-xl bg-[#0a1c2a] text-white flex flex-col items-center gap-3 transition-all duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} md:relative md:top-0 md:flex-row md:w-auto md:translate-x-0 md:opacity-100 md:bg-transparent md:gap-8`}
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
