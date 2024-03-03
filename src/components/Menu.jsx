import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold cursor-pointer">Movie Hub</Link>

      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div className={`lg:flex ${menuOpen ? 'block' : 'hidden'} mt-4 lg:mt-0 w-full lg:w-auto`}>
        <Link to="/" className="text-white hover:text-gray-300 mx-2 block lg:inline-block lg:mt-0">Home</Link>
        
        <Link to="/about" className="text-white hover:text-gray-300 mx-2 block lg:inline-block lg:mt-0">About</Link>
        <Link to="/contact" className="text-white hover:text-gray-300 mx-2 block lg:inline-block lg:mt-0">Contact</Link>
      </div>
    </nav>
  );
};

export default Menu;
