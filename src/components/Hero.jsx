import React, { useState } from 'react';
import HeroImage from '../assets/hero-image.jpg';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ResumeModal from './ResumeModal';

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
   <section 
  id="home" 
  className="
    text-black dark:text-white 
    text-center pt-32 pb-10 
    relative scroll-smooth z-10
  "
>
  <div className="container mx-auto px-4">
    <img
      src={HeroImage}
      alt="Aman"
      className="
        mx-auto mb-6 w-40 h-40 rounded-full object-cover 
        border-2 border-gray-300 dark:border-gray-900
      "
    />

    <h1 className="text-4xl md:text-5xl font-bold">
      Hi, I'm{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Aman,
      </span>
    </h1>

    <h2 className="mt-2 text-xl md:text-2xl 
      text-gray-700 dark:text-gray-300 font-semibold">
      Frontend Developer & CSE Student at Asansol Engineering College
    </h2>

    <p className="mt-4 max-w-2xl mx-auto 
      text-gray-600 dark:text-gray-400 text-base md:text-lg">
      Passionate about crafting beautiful, responsive web interfaces using
      modern tools. Always learning, building, and pushing boundaries.
    </p>

    <div className="w-full flex justify-center items-center mt-10">
      <div className="flex items-center gap-6 mt-6">
       <a href="mailto:amanshaw871@gmail.com">
          <FaEnvelope className="text-red-500 text-2xl hover:scale-110 transition-transform" />
        </a>
        <a href="https://github.com/Amanshaw445" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-700 dark:text-gray-300 text-2xl hover:scale-110 transition-transform" />
        </a>
        <a href="https://linkedin.com/in/amanshaw445" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-700 dark:text-blue-400 text-2xl hover:scale-110 transition-transform" />
        </a>
        <a href="https://twitter.com/amanshaw817" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-500 text-2xl hover:scale-110 transition-transform" />
        </a>

      </div>
    </div>

    {/* Mobile-only Resume Button */}
    <div className="mt-6 block custom800:hidden">
      <button
        onClick={() => setShowResume(true)}
        className="bg-gradient-to-r from-green-400 to-blue-500 
          text-white font-bold px-5 py-2 rounded-full 
          transition-transform hover:scale-105 hover:brightness-110"
      >
        View Resume
      </button>
    </div>
  </div>

  {/* Resume Modal */}
  {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
</section>

  );
};

export default Hero;
