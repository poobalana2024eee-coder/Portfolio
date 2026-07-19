import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark text-gray-100 font-sans selection:bg-electricBlue selection:text-white">
      <Navbar />
      <Hero />
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6 text-center z-10 relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-electricBlue mx-auto rounded-full mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed bg-dark-lighter/50 p-8 rounded-2xl border border-white/5 shadow-2xl">
            I am an Electronics and Electrical Engineering student passionate about Embedded Systems, VLSI Design, Digital Electronics, IoT, PCB Design, Microcontrollers, and intelligent hardware systems. I enjoy designing reliable engineering solutions by integrating hardware and software.
          </p>
        </div>
      </section>
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-gray-500 border-t border-white/10 mt-10">
        <p>© {new Date().getFullYear()} Poobalan A. Designed & Developed with passion.</p>
      </footer>
    </div>
  );
}

export default App;
