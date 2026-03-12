import React, { useEffect, useRef, useState } from "react";
import ResumeModal from './ResumeModal';

const navLinks = ["home", "about", "skills", "project", "contact"];

const Navbar = () => {
  const [showResume, setShowResume] = useState(false);
  const [active, setActive] = useState("home");
  const underlineRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    navLinks.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = linkRefs.current[active];
    const underline = underlineRef.current;
    if (el && underline) {
      const updateUnderline = () => {
        underline.style.left = `${el.offsetLeft}px`;
        underline.style.width = `${el.offsetWidth}px`;
      };
      updateUnderline();
      window.addEventListener("resize", updateUnderline);
      return () => window.removeEventListener("resize", updateUnderline);
    }
  }, [active]);

  return (
    <>
      <nav className="
        fixed top-4 left-1/2 transform -translate-x-1/2 z-50
        w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]
        bg-white/30 text-black
        dark:bg-black/30 dark:text-white
        backdrop-blur-md px-4 py-3
        rounded-2xl shadow-lg
      ">
        <div className="flex items-center justify-between gap-2">

          {/* Left: Logo + Name */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-200 dark:border-gray-800">
              <img src="/AKlogo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-lg md:text-xl font-bold hidden sm:inline bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
              Aman Shaw
            </h1>
          </div>

          {/* Center: Nav Links */}
          <div className="relative flex items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base flex-1">
            {navLinks.map((id) => (
              /* FIXED: Added the <a> tag identifier below */
              <a
                key={id}
                href={`#${id}`}
                ref={(el) => (linkRefs.current[id] = el)}
                className={`relative pb-1 whitespace-nowrap transition-colors duration-300 ${
                  active === id ? "text-blue-500 dark:text-green-400" : "hover:text-gray-400"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

            {/* Sliding underline */}
            <span
              ref={underlineRef}
              className="absolute bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500 ease-in-out rounded-full"
            />
          </div>

          {/* Right: Resume Button */}
          <button
            onClick={() => setShowResume(true)}
            className="flex-shrink-0 hidden sm:inline bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold px-4 py-2 text-sm rounded-full transition-transform hover:scale-105 hover:brightness-110 whitespace-nowrap"
          >
            Resume
          </button>

        </div>
      </nav>

      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </>
  );
};

export default Navbar;