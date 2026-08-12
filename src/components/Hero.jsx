import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import ResumeModal from "./ResumeModal";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const [githubUser, setGithubUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const githubUsername = "Amanshaw445";

  useEffect(() => {
    const fetchGithubProfile = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub profile");
        }

        const data = await response.json();
        setGithubUser(data);
      } catch (error) {
        console.error("GitHub profile error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubProfile();
  }, []);

  return (
    <section
      id="home"
      className="text-black dark:text-white text-center pt-32 pb-10 relative scroll-smooth z-10"
    >
      <div className="container mx-auto px-4">

        {/* GitHub Profile Image */}
        <div className="mb-6">
          {loading ? (
            <div className="mx-auto w-40 h-40 rounded-full bg-gray-300 dark:bg-gray-800 animate-pulse"></div>
          ) : (
            <img
              src={githubUser?.avatar_url}
              alt={githubUser?.name || "Aman Shaw"}
              className="mx-auto w-40 h-40 rounded-full object-cover border-2 border-gray-300 dark:border-gray-800 shadow-lg"
            />
          )}
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            {githubUser?.name || "Aman"}
          </span>{" "}
          👋
        </h1>

        {/* Role */}
        <h2 className="mt-3 text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-semibold">
          Software Engineer & Full-Stack Developer
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-base md:text-lg">
          {githubUser?.bio ||
            "Computer Science graduate passionate about building scalable, responsive, and user-focused applications using modern web technologies."}
        </p>

        {/* Social Links */}
        <div className="w-full flex justify-center items-center mt-8">
          <div className="flex items-center gap-6">
            <a
              href="mailto:amanshaw871@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope className="text-red-500 text-2xl hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://github.com/Amanshaw445"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-gray-700 dark:text-gray-300 text-2xl hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://linkedin.com/in/amanshaw445"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-blue-700 dark:text-blue-400 text-2xl hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://twitter.com/amanshaw817"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-blue-500 text-2xl hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Resume Button */}
        <div className="mt-8">
          <button
            onClick={() => setShowResume(true)}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-md hover:shadow-lg"
          >
            View Resume
          </button>
        </div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <ResumeModal onClose={() => setShowResume(false)} />
      )}
    </section>
  );
};

export default Hero;