import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-2xl font-bold text-teal-primary">
          MKSher
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#home" className="hover:text-teal-secondary transition">Home</a>
          <a href="#skills" className="hover:text-teal-secondary transition">Skills</a>
          <a href="#experience" className="hover:text-teal-secondary transition">Experience</a>
          <a href="#projects" className="hover:text-teal-secondary transition">Projects</a>
          <a href="#contact" className="hover:text-teal-secondary transition">Contact</a>
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-800" />}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
              <span className="block w-6 h-0.5 bg-teal-primary transition-transform duration-300"></span>
              <span className="block w-6 h-0.5 bg-teal-primary mt-1.5 transition-transform duration-300"></span>
              <span className="block w-6 h-0.5 bg-teal-primary mt-1.5 transition-transform duration-300"></span>
            </div>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900`}>
        <a href="#home" className="block px-4 py-2 hover:bg-teal-500 hover:text-white transition">Home</a>
        <a href="#skills" className="block px-4 py-2 hover:bg-teal-500 hover:text-white transition">Skills</a>
        <a href="#experience" className="block px-4 py-2 hover:bg-teal-500 hover:text-white transition">Experience</a>
        <a href="#projects" className="block px-4 py-2 hover:bg-teal-500 hover:text-white transition">Projects</a>
        <a href="#contact" className="block px-4 py-2 hover:bg-teal-500 hover:text-white transition">Contact</a>
        <button 
          onClick={toggleDarkMode} 
          className="block w-full text-left px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-800" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;