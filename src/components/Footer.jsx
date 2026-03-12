import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        bg-white bg-opacity-70 text-gray-900 
        dark:bg-black dark:bg-opacity-70 dark:text-white 
        py-8 transition-colors
      "
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Top Row: Info and Tagline */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
          
          {/* Left: Logo + Name + Role */}
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
              <img 
                src="/AKlogo.png" 
                alt="Aman Shaw" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-xl font-bold leading-tight">Aman Shaw</h1>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                CSE Student & Frontend Developer
              </p>
            </div>
          </div>

          {/* Right: Tagline */}
          <div className="text-center md:text-right">
            <p className="italic text-gray-500 dark:text-gray-400 text-xs">
              Building digital experiences from Asansol, West Bengal.
            </p>
          </div>
        </div>

        {/* Divider + Bottom Row: Copyright & Socials */}
        <div
          className="border-t border-gray-300 dark:border-gray-600 pt-6 
          flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Aman Shaw. All rights reserved.
          </p>

          <div className="flex space-x-5">
            <a
              href="./Error404.html"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com/amanshaw817"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com/in/amanshaw445"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/Amanshaw445"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;