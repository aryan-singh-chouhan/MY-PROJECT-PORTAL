// src/components/Navbar.jsx

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-600"><img src={logo} alt="" /></h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-500 font-medium">Home</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-500 font-medium">Projects</a>
            <a href="#clients" className="text-gray-700 hover:text-blue-500 font-medium">Clients</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500 font-medium">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl text-blue-600 focus:outline-none">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <a href="#home" className="block text-gray-700 hover:text-blue-500">Home</a>
            <a href="#projects" className="block text-gray-700 hover:text-blue-500">Projects</a>
            <a href="#clients" className="block text-gray-700 hover:text-blue-500">Clients</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-500">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
