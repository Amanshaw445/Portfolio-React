import React from 'react';
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  return (
    <section id="home" className="bg-black text-white text-center py-20">
      <div className="container mx-auto px-4">
        <img
          src={HeroImage}
          alt="Aman"
          className="mx-auto mb-6 w-40 h-40 rounded-full object-cover border-2 border-gray-900"
        />

        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Aman,
          </span>
        </h1>

        <h2 className="mt-2 text-xl md:text-2xl text-gray-300 font-semibold">
          Frontend Developer & CSE Student at Asansol Engineering College
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-base md:text-lg">
          Passionate about crafting beautiful, responsive web interfaces using
          modern tools. Always learning, building, and
          pushing boundaries.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <a href="#contact"
            className="animate-bounce bg-gradient-to-r from-green-400 to-blue-500 text-white
            font-bold px-5 py-2 rounded-full transition-transform hover:scale-105 hover:brightness-110">
            Contact Me
          </a>

          <a href="https://drive.google.com/file/d/1UTr73BjQYBizbIRx-Z_G6k3mh9JkCcNx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-bounce bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            font-bold px-5 py-2 rounded-full transition-transform hover:scale-105 hover:brightness-110">
            Resume
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
