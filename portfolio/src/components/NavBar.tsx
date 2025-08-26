import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="w-full px-6 md:px-16 py-4 bg-white shadow-sm">
      <ul className="flex flex-wrap md:flex-nowrap justify-center md:justify-around items-center gap-6 md:gap-16">
        <li>
          <Link
            href="/"
            className="text-gray-800 font-semibold text-lg md:text-xl hover:text-[#A12347] transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="text-gray-800 font-semibold text-lg md:text-xl hover:text-[#A12347] transition-colors"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/experience"
            className="text-gray-800 font-semibold text-lg md:text-xl hover:text-[#A12347] transition-colors"
          >
            Education & Experience
          </Link>
        </li>
        {/* Uncomment if needed
        <li>
          <Link
            href="/contact"
            className="text-gray-800 font-semibold text-lg md:text-xl hover:text-[#A12347] transition-colors"
          >
            Contact
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
