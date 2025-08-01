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

function App() {
  const scrollToNextSection = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  const scrollToPrevSection = () => {
    window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="scroll-smooth bg-slate-600" >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SectionToggle onScrollUp={scrollToPrevSection} onScrollDown={scrollToNextSection} />
    </div>
  )
}

export default App;
