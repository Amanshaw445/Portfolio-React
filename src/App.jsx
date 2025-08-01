import './App.css'
import './index.css';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SectionToggle from './components/SectionToggle'
import CursorLight from "./components/CursorLight";

function App() {
  const scrollToNextSection = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  const scrollToPrevSection = () => {
    window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
  };

const toggleBot = () => {
  const iframe = document.querySelector("iframe[title='Botpress']");
  if (!iframe) return;

  const isHidden = iframe.style.display === "none" || iframe.style.visibility === "hidden";

  window.botpressWebChat.sendEvent({
    type: isHidden ? "show" : "hide"
  });
};


return (
  <div className="scroll-smooth min-h-screen bg-gradient-to-r from-black via-gray-800 to-gray-900 bg-[length:400%_400%] bg-[position:0%_50%] animate-gradientSlow text-white">


    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    <SectionToggle onScrollUp={scrollToPrevSection} onScrollDown={scrollToNextSection} />
    <CursorLight />
  </div>
)
}

export default App;
