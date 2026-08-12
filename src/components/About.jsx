import React from "react";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <div
      id="about"
      className="text-black dark:text-white py-20"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 z-20">
        
        {/* Section Heading */}
        <h1 className="text-2xl font-bold text-center mb-12">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          
          {/* About Image */}
          <img
            src={AboutImage}
            alt="About Aman"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />

          {/* About Content */}
          <div className="flex-1">
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              I am a Computer Science and Engineering graduate from Asansol
              Engineering College with a strong interest in Software
              Engineering and Web Development. I enjoy building modern,
              responsive, and user-friendly applications using technologies
              like React, JavaScript, Java, and SQL. I have a strong foundation
              in Data Structures and Algorithms and continuously work on
              improving my problem-solving and development skills through
              real-world projects.
            </p>

            {/* Skills */}
            <div className="space-y-4">

              {/* Java */}
              <div className="flex items-center">
                <label
                  htmlFor="java"
                  className="w-3/12 font-medium text-gray-800 dark:text-gray-200"
                >
                  Java
                </label>

                <div className="grow bg-gray-300 dark:bg-gray-800 rounded-full h-2.5">
                  <div
                    id="java"
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>

              {/* JavaScript */}
              <div className="flex items-center">
                <label
                  htmlFor="javascript"
                  className="w-3/12 font-medium text-gray-800 dark:text-gray-200"
                >
                  JavaScript
                </label>

                <div className="grow bg-gray-300 dark:bg-gray-800 rounded-full h-2.5">
                  <div
                    id="javascript"
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>

              {/* React JS */}
              <div className="flex items-center">
                <label
                  htmlFor="react"
                  className="w-3/12 font-medium text-gray-800 dark:text-gray-200"
                >
                  React JS
                </label>

                <div className="grow bg-gray-300 dark:bg-gray-800 rounded-full h-2.5">
                  <div
                    id="react"
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>

              {/* SQL */}
              <div className="flex items-center">
                <label
                  htmlFor="sql"
                  className="w-3/12 font-medium text-gray-800 dark:text-gray-200"
                >
                  SQL
                </label>

                <div className="grow bg-gray-300 dark:bg-gray-800 rounded-full h-2.5">
                  <div
                    id="sql"
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>

              {/* DSA */}
              <div className="flex items-center">
                <label
                  htmlFor="dsa"
                  className="w-3/12 font-medium text-gray-800 dark:text-gray-200"
                >
                  DSA
                </label>

                <div className="grow bg-gray-300 dark:bg-gray-800 rounded-full h-2.5">
                  <div
                    id="dsa"
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;