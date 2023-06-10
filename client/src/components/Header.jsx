import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-gray-700 py-7 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <h1 className=" text-lg font-bold sm:text-2xl">Your Quote Generator</h1>
        <nav className={`sm:block ${isNavOpen ? "block" : "hidden"}`}>
          <ul className="flex space-x-4">
            <li>
              <Link to="/docs">Docs</Link>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Github
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Discord
              </a>
            </li>
          </ul>
        </nav>
        <div className="sm:hidden">
          <button className="text-white focus:outline-none" onClick={toggleNav}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isNavOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
