import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CodingStats from "./components/CodingStats";
import ThemeToggle from "./components/ThemeToggle";
import LoadingScreen from "./LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleBot = () => {
    const iframe = document.querySelector("iframe[title='Botpress']");

    if (!iframe) return;

    const isHidden =
      iframe.style.display === "none" ||
      iframe.style.visibility === "hidden";

    window.botpressWebChat.sendEvent({
      type: isHidden ? "show" : "hide",
    });
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div
      className="
        relative
        min-h-screen
        scroll-smooth
        bg-white
        text-black
        dark:bg-gradient-to-r
        dark:from-black
        dark:via-gray-800
        dark:to-gray-900
        dark:text-white
        bg-[length:400%_400%]
        bg-[position:0%_50%]
        animate-gradientSlow
      "
    >
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle
          theme={theme}
          setTheme={setTheme}
        />
      </div>

      {/* Navigation */}
      <Navbar theme={theme} />

      {/* Portfolio Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />

      {/* GitHub + LeetCode Statistics */}
      <CodingStats />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}