import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa'; // Importing icons

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">JPMC</div> {/* Company Name */}
      <div className="flex space-x-4">
        <Link to="/account" aria-label="Account">
          <FaUser className="hover:text-gray-400" /> {/* Account Icon */}
        </Link>
      </div>
    </header>
  );
}

export default Header;
