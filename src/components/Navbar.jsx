import React from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-2xl font-bold text-teal-primary">
          MKSher
        </div>
        <div className="flex items-center space-x-4">
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
      </div>
    </nav>
  );
};

export default Navbar;