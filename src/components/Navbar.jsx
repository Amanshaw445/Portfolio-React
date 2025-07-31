import React, { useEffect, useState } from 'react';
import FloatingButton from './FloatingButton';
import ChatWindow from './ChatWindow';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] bg-black/30 backdrop-blur-md text-white px-4 py-3 rounded-2xl shadow-lg">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-4">
          
          {/* Left: Name */}
          <div className="text-2xl font-bold hidden md:inline">Aman Shaw</div>

          {/* Center: Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About Me</a>
            <a href="#skills" className="hover:text-gray-300">Skills</a>
            <a href="#project" className="hover:text-gray-300">Projects</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>

          {/* Right: Connect Me (only desktop and only before scroll) */}
          <button
            onClick={() => setChatOpen(true)}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline px-4 py-2 rounded-full transition transform hover:scale-105"
          >
            Connect Me
          </button>
        </div>
      </nav>

      {/* Floating button: 
          - Always visible on mobile
          - Visible on desktop only after scroll */}
 {(scrolled || typeof window !== "undefined" && window.innerWidth < 768) && (
  <FloatingButton onClick={() => setChatOpen(true)} />
)}



      {/* Chatbox */}
      {chatOpen && <ChatWindow onClose={() => setChatOpen(false)} />}
    </>
  );
};

export default Navbar;
