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
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl mb-2">Aman Shaw</h3>
            {/* <p className="text-gray-600 dark:text-gray-400">
              Passionate Computer Science student and Full-Stack Developer with
              experience in building modern web apps using Java, React, Node.js,
              MySQL, and more.
            </p> */}
          </div>
          <div className="flex-1 w-full"></div>
        </div>

        <div
          className="border-t border-gray-300 dark:border-gray-600 pt-4 
          flex flex-col md:flex-row justify-between items-center
        "
        >
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Aman Shaw. All rights reserved.
          </p>

          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="./Error404.html"
              className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/amanshaw817"
              className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/in/amanshaw445"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Amanshaw445"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
