import React from "react";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <div 
      id="about" 
      className="text-black dark:text-white py-20"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 z-20">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About Aman"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />

          <div className="flex-1">
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              I am a B.Tech student in Computer Science and Engineering at
              Asansol Engineering College, aspiring to become a skilled Software
              Engineer. My primary focus is on frontend development, where I
              enjoy crafting modern, responsive, and user-friendly web
              interfaces. With a growing foundation in full-stack technologies,
              I’m passionate about building efficient and scalable applications
              that deliver seamless user experiences.
            </p>

            <div className="space-y-4">
              {/* Skill Bar: HTML & CSS */}
              <div className="flex items-center">
                <label 
                  htmlFor="html-css" 
                  className="w-2/12 font-medium text-gray-800 dark:text-gray-200"
                >
                  HTML & CSS
                </label>
                <div className="grow bg-gray-300 dark:bg-gray-800 rounded-full h-2.5">
                  <div
                    id="html-css"
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>

              {/* Skill Bar: React JS */}
              <div className="flex items-center">
                <label 
                  htmlFor="react" 
                  className="w-2/12 font-medium text-gray-800 dark:text-gray-200"
                >
                  React JS
                </label>
                <div className="grow bg-gray-300 dark:bg-gray-800 rounded-full h-2.5">
                  <div
                    id="react"
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>

              {/* Skill Bar: Node JS */}
              <div className="flex items-center">
                <label 
                  htmlFor="node" 
                  className="w-2/12 font-medium text-gray-800 dark:text-gray-200"
                >
                  Node JS
                </label>
                <div className="grow bg-gray-300 dark:bg-gray-800 rounded-full h-2.5">
                  <div
                    id="node"
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
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
