import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social media icons

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="flex flex-col items-center p-4 bg-gray-800 text-white">
      <div className="flex space-x-4">
        <Link to="/about" className="hover:text-gray-400">About Us</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        <Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
      </div>
      <div className="flex space-x-4 mt-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook className="hover:text-gray-400" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="hover:text-gray-400" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="hover:text-gray-400" />
        </a>
      </div>
      <div className="mt-4 text-sm">© {new Date().getFullYear()} Company Name. All rights reserved.</div> {/* Copyright */}
    </footer>
  );
}

export default Footer;
