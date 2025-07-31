import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto py-3 flex flex-wrap justify-center md:justify-between items-center gap-y-4">
        
        {/* Left: Name */}
        <div className="text-2xl font-bold hidden md:inline">Aman Shaw</div>
        
        {/* Center: Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Right: Button */}
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
