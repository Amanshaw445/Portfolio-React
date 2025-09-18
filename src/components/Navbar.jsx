import React, { useEffect, useRef, useState } from "react";
import ResumeModal from './ResumeModal';

const navLinks = ["home", "about", "skills", "project", "contact"];

const Navbar = () => {
  const [showResume, setShowResume] = useState(false);
  const [active, setActive] = useState("home");
  const underlineRef = useRef(null);
  const linkRefs = useRef({});

  // Track active section using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
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

  // Animate underline to active link & handle resize
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
        rounded-2xl shadow-lg scroll-smooth
      ">

        <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-0 relative">

          {/* Left: Logo and Name */}
          <div className="flex items-center gap-0">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-green-400 to-blue-500">
              <img src="/AKlogo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="text-2xl font-bold hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Aman Shaw
            </div>
          </div>

          {/* Center: Nav Links */}
          <div className="relative flex flex-wrap justify-center gap-6 text-sm sm:text-base">
            {navLinks.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                ref={(el) => (linkRefs.current[id] = el)}
                className="relative pb-1 hover:text-gray-300 transition-colors 
                after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                after:bg-gradient-to-r after:from-green-400 after:to-blue-500 
                after:transition-all after:duration-300 hover:after:w-full"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

            {/* Sliding Underline for Active */}
            <span
              ref={underlineRef}
              className="absolute bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500 ease-in-out rounded-full"
            />
          </div>

          {/* Right: Resume Button */}
<button
  onClick={() => setShowResume(true)}
  className="hidden custom800:inline bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold px-5 py-2 rounded-full transition-transform hover:scale-105 hover:brightness-110"
>
  Resume
</button>


        </div>
      </nav>

      {/* Resume Modal */}
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </>
  );
};

export default Navbar;
