import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import commingsoon from "../assets/commingsoon.jpg";

const projects = [
  {
    id: 1,
    name: "Upcoming",
    technologies: "🌐",
    image: commingsoon,
    github: "./ProjectError.html",
  },
  {
    id: 2,
    name: "Upcoming",
    technologies: "🌐",
    image: commingsoon,
    github: "./ProjectError.html",
  },
  {
    id: 3,
    name: "Upcoming",
    technologies: "🌐",
    image: commingsoon,
    github: "./ProjectError.html",
  },
  {
    id: 4,
    name: "Upcomin4g",
    technologies: "🌐",
    image: commingsoon,
    github: "./ProjectError.html",
  },
];

const Projects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className=" text-white py-20 relative" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 z-10 left-8">
          <button
            ref={prevRef}
            className="backdrop-blur-sm bg-white/10 border border-white/20 p-3 rounded-full 
              hover:scale-110 transition transform shadow-md"
          >
            <FaChevronLeft className="text-white text-xl" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 z-10 right-8">
          <button
            ref={nextRef}
            className="backdrop-blur-sm bg-white/10 border border-white/20 p-3 rounded-full 
              hover:scale-110 transition transform shadow-md"
          >
            <FaChevronRight className="text-white text-xl" />
          </button>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          onSwiper={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = document.querySelector(".custom-pagination");

            swiper.navigation.init();
            swiper.navigation.update();
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.technologies}</p>
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Bullets */}
        <div className="custom-pagination flex justify-center mt-8 gap-2" />
      </div>
    </div>
  );
};

export default Projects;
