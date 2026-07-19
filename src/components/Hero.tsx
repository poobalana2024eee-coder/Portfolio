import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const titles = [
  "Electronics & Electrical Engineer",
  "Embedded Systems Enthusiast",
  "VLSI Design Learner",
  "IoT Developer",
  "Hardware Engineer"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electricBlue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyanAccent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl text-cyanAccent mb-4">Hello, I am</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Poobalan A</h1>
          <div className="h-12 mb-8">
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-3xl text-gray-400"
            >
              {titles[titleIndex]}
            </motion.p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <button className="px-6 py-3 rounded-full bg-electricBlue text-white font-medium hover:bg-blue-600 transition-colors flex items-center gap-2">
              <Download size={18} /> Download Resume
            </button>
            <Link to="projects" smooth={true} duration={500} className="px-6 py-3 rounded-full border border-gray-600 hover:border-cyanAccent hover:text-cyanAccent transition-all cursor-pointer flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center md:justify-start gap-6">
            <a href="https://github.com/poobalana2024eee-coder" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass hover:text-cyanAccent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/poobalan-a-45a354319/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass hover:text-cyanAccent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:poobalana792@gmail.com" className="p-2 rounded-full glass hover:text-cyanAccent transition-colors"><Mail size={24} /></a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full glass p-2">
            <div className="w-full h-full rounded-full bg-dark overflow-hidden flex items-center justify-center border border-white/10">
              <img src="/profile.jpeg" alt="Poobalan A's Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
