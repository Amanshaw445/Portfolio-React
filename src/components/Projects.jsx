import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import commingsoon from "../assets/commingsoon.jpg";

const projects = [
  {
    id: 1,
    name: "Personal Portfolio",
    technologies: "React, Tailwind CSS, JavaScript",
    image: "/portfolio.png",
    github: "https://github.com/Amanshaw445/Portfolio-React",
    live: "https://amanshaw.live",
  },
  {
    id: 2,
    name: "LLM Code Summarizer",
    technologies: "HTML, CSS, JavaScript, Python, Torch, Hugging Face, Flask",
    image: "/llm-summarizer.png",
    github: "https://github.com/Amanshaw445/readmeGeneratorLLM",
  },
  {
    id: 3,
    name: "Weather App",
    technologies: "HTML, CSS, JavaScript",
    image: "/weatherApp.png",
    github: "https://github.com/Amanshaw445/WeatherApp",
    live: "https://climetx.vercel.app",
  },
  {
    id: 4,
    name: "Globel Impact",
    technologies: "HTML, CSS, JavaScript",
    image: "/newsApp.png",
    github: "https://github.com/Amanshaw445/news",
    live: "https://globelimpact.netlify.app/",
  },
  {
    id: 5,
    name: "Slide Puzzle Game",
    technologies: "HTML, CSS, JavaScript",
    image: "/puzzelGame.png",
    github: "https://github.com/Amanshaw445/15-puzzel-game",
    live: "https://slidepuzzel15.netlify.app/",
  },
  {
    id: 6,
    name: "Bubble Game",
    technologies: "HTML, CSS, JavaScript",
    image: "/bubbleGame.png",
    github: "https://github.com/Amanshaw445/bubble-game",
    live: "https://mybubblegame455.netlify.app/",
  },
  {
    id: 7,
    name: "Real Time Feedback",
    technologies: "HTML, CSS, JavaScript",
    image: "/feedbackApp.png",
    github: "https://github.com/Amanshaw445/realtimeReview",
    live: "https://realtimereview.netlify.app/",
  },
  {
    id: 8,
    name: "My Repair",
    technologies: "HTML, CSS, JavaScript",
    image: "/repairApp.png",
    github: "https://github.com/Amanshaw445/electronicsrepair",
    live: "https://repairforme.netlify.app/",
  },
  {
    id: 9,
    name: "FabFit Shopping",
    technologies: "HTML, CSS",
    image: "/fabfitApp.png",
    github: "https://github.com/Amanshaw445/online_shopping_website.github.io",
    live: "https://fabfitshopping.netlify.app/",
  },
  {
    id: 10,
    name: "Upcoming Project",
    technologies: "Coming Soon",
    image: commingsoon,
    github: "./ProjectError.html",
  },
];

const Projects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <section
      id="project"
      aria-label="Projects by Aman Shaw"
      className="py-20 relative text-black dark:text-white"
    >
      <style>{`
        .projects-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .projects-pagination .swiper-pagination-bullet-active {
          background: #3b82f6;
          width: 24px;
          border-radius: 4px;
        }
        .dark .projects-pagination .swiper-pagination-bullet {
          background: #475569;
        }
        .dark .projects-pagination .swiper-pagination-bullet-active {
          background: #60a5fa;
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">
          My Projects
        </h2>

        <div className="relative flex items-center gap-3">
          {/* Prev — desktop only */}
          <button
            ref={prevRef}
            aria-label="Previous project"
            className="hidden md:flex flex-shrink-0 z-10 w-10 h-10 items-center justify-center rounded-full
                       bg-white dark:bg-gray-800
                       border border-gray-200 dark:border-gray-700
                       shadow-sm hover:shadow-md hover:scale-110 transition-all duration-200"
          >
            <FaChevronLeft className="text-gray-600 dark:text-gray-300 text-sm" />
          </button>

          <div className="flex-1 min-w-0">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2800,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                768:  { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setTimeout(() => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
              pagination={{
                clickable: true,
                el: ".projects-pagination",
              }}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <article
                    className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden
                               border border-gray-100 dark:border-gray-800
                               shadow-sm hover:shadow-xl
                               transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden h-48 bg-gray-100 dark:bg-gray-800">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-1 leading-snug text-gray-900 dark:text-white">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed h-10 overflow-hidden">
                        {project.technologies}
                      </p>

                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2
                                     px-4 py-2 rounded-full text-sm font-semibold
                                     whitespace-nowrap border border-gray-300 dark:border-gray-600
                                     text-gray-700 dark:text-gray-300
                                     hover:border-gray-500 dark:hover:border-gray-400
                                     hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                        >
                          <FaGithub className="text-base flex-shrink-0" />
                          GitHub
                        </a>

                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2
                                       px-4 py-2 rounded-full text-sm font-semibold text-white
                                       whitespace-nowrap bg-gradient-to-r from-green-400 to-emerald-500
                                       hover:from-green-500 hover:to-emerald-600 transition-all"
                          >
                            <FaExternalLinkAlt className="text-xs flex-shrink-0" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Next — desktop only */}
          <button
            ref={nextRef}
            aria-label="Next project"
            className="hidden md:flex flex-shrink-0 z-10 w-10 h-10 items-center justify-center rounded-full
                       bg-white dark:bg-gray-800
                       border border-gray-200 dark:border-gray-700
                       shadow-sm hover:shadow-md hover:scale-110 transition-all duration-200"
          >
            <FaChevronRight className="text-gray-600 dark:text-gray-300 text-sm" />
          </button>
        </div>

        {/* Mobile nav arrows */}
        <div className="flex md:hidden justify-center gap-4 mt-5">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border"
          >
            <FaChevronLeft className="text-gray-600 dark:text-gray-300 text-sm" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border"
          >
            <FaChevronRight className="text-gray-600 dark:text-gray-300 text-sm" />
          </button>
        </div>

        <div className="projects-pagination flex justify-center mt-4 gap-2" />
      </div>
    </section>
  );
};

export default Projects;