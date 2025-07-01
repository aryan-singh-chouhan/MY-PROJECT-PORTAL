import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import home from '../assets/home.svg';

const Footer = () => {
  return (
    <footer className="bg-[#1A252F] text-white py-4 px-6 flex justify-between items-center">
      <div className="text-sm">© 2023 All Rights Reserved</div>
      <div className="text-blue-400 text-lg font-semibold"><img src={home} alt="logo" className="w-6 h-6 inline-block mr-2" />
 Real Rust</div>
      <div className="flex space-x-4">
        <a href="#" className="text-white hover:text-gray-300"><FaFacebookF /></a>
        <a href="#" className="text-white hover:text-gray-300"><FaInstagram /></a>
        <a href="#" className="text-white hover:text-gray-300"><FaTwitter /></a>
        <a href="#" className="text-white hover:text-gray-300"><FaLinkedinIn /></a>
      </div>
    </footer>
  );
};

export default Footer;