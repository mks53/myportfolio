import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <a
          href="#home"
          className="hover:text-teal-secondary transition text-text-light dark:text-text-dark-contrast">
          <div className="text-2xl font-bold text-teal-primary">MKSher</div>
        </a>
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#home"
            className="hover:text-teal-secondary transition text-text-light dark:text-text-dark-contrast">
            Home
          </a>
          <a
            href="#skills"
            className="hover:text-teal-secondary transition text-text-light dark:text-text-dark-contrast">
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-teal-secondary transition text-text-light dark:text-text-dark-contrast">
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-teal-secondary transition text-text-light dark:text-text-dark-contrast">
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-teal-secondary transition text-text-light dark:text-text-dark-contrast">
            Contact
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className={`hamburger ${isOpen ? "open" : ""}`}>
              <span className="block w-6 h-0.5 bg-teal-primary transition-transform duration-300"></span>
              <span className="block w-6 h-0.5 bg-teal-primary mt-1.5 transition-transform duration-300"></span>
              <span className="block w-6 h-0.5 bg-teal-primary mt-1.5 transition-transform duration-300"></span>
            </div>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white dark:bg-gray-900`}>
        <a
          href="#home"
          onClick={closeMenu}
          className="block px-4 py-2 hover:bg-teal-500 hover:text-white transition text-text-light dark:text-text-dark-contrast">
          Home
        </a>
        <a
          href="#skills"
          onClick={closeMenu}
          className="block px-4 py-2 hover:bg-teal-500 hover:text-white transition text-text-light dark:text-text-dark-contrast">
          Skills
        </a>
        <a
          href="#experience"
          onClick={closeMenu}
          className="block px-4 py-2 hover:bg-teal-500 hover:text-white transition text-text-light dark:text-text-dark-contrast">
          Experience
        </a>
        <a
          href="#projects"
          onClick={closeMenu}
          className="block px-4 py-2 hover:bg-teal-500 hover:text-white transition text-text-light dark:text-text-dark-contrast">
          Projects
        </a>
        <a
          href="#contact"
          onClick={closeMenu}
          className="block px-4 py-2 hover:bg-teal-500 hover:text-white transition text-text-light dark:text-text-dark-contrast">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
