import React, { useState } from 'react';
import ChatWindow from './ChatWindow';

const Navbar = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] bg-black/30 backdrop-blur-md text-white px-4 py-3 rounded-2xl shadow-lg scroll-smooth">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-4">
          {/* Left: Name */}
         <div className="text-2xl font-bold hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
  Aman Shaw
</div>


          {/* Center: Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About Me</a>
            <a href="#skills" className="hover:text-gray-300">Skills</a>
            <a href="#project" className="hover:text-gray-300">Projects</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>

          {/* Right: Connect Me Button */}
          <button
            onClick={() => setChatOpen(true)}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline px-4 py-2 rounded-full transition transform hover:scale-105"
          >
            Connect Me
          </button>
        </div>
      </nav>

      {/* ChatWindow shown conditionally */}
      {chatOpen && (
        <ChatWindow onClose={() => setChatOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
