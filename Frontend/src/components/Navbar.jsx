import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='flex justify-between items-center w-screen h-[1.5cm] bg-gradient-to-r from-blue-600 via-blue-400 to-black px-[5px] md:px-[20px] lg:px-[20px]'>
      <div className='flex gap-[0.4cm] items-center'>
        <img className='rounded-full w-10 h-10' src="pic.png" alt="pic" />
        <h2 className='text-[1.5rem] font-serif text-white'>Saikat Pradhan</h2>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden lg:flex gap-6 text-white font-medium'>
        <li><NavLink to="/"><p className='text-white'>Home</p></NavLink></li>
        <li><NavLink to="/about"><p className='text-white'>About Me</p></NavLink></li>
        <li><NavLink to="/contact"><p className='text-white'>Contact Me</p></NavLink></li>
        <li><NavLink to="/projects"><p className='text-white'>My Projects</p></NavLink></li>
        <li><NavLink to="/certificates"><p className='text-white'>My Certificates</p></NavLink></li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className='relative lg:hidden' ref={menuRef}>
        <FiMenu
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className='text-white size-[1cm] rounded pr-1'
        />

        {menuOpen && (
          <div className='absolute right-0 mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-black p-[3px] rounded-[7px] shadow-lg z-40 w-[4.23cm]'>
            <ul className='bg-neutral-900 rounded-[7px] p-2'>
              <li className='ml-4 mt-1'><NavLink to="/" onClick={() => setMenuOpen(false)}><p className='text-white'>Home</p></NavLink></li>
              <li className='ml-4 mt-1'><NavLink to="/about" onClick={() => setMenuOpen(false)}><p className='text-white'>About Me</p></NavLink></li>
              <li className='ml-4 mt-1'><NavLink to="/contact" onClick={() => setMenuOpen(false)}><p className='text-white'>Contact Me</p></NavLink></li>
              <li className='ml-4 mt-1'><NavLink to="/projects" onClick={() => setMenuOpen(false)}><p className='text-white'>My Projects</p></NavLink></li>
              <li className='ml-4 mt-1 mb-1'><NavLink to="/certificates" onClick={() => setMenuOpen(false)}><p className='text-white'>My Certificates</p></NavLink></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;