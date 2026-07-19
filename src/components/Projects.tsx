import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: "Breakage Detection System",
    description: "Developed a cost-effective embedded solution for detecting Low Voltage AC overhead conductor breakage using voltage sensing and ESP32.",
    longDescription: "This project provides a cost-effective and highly reliable embedded solution for detecting Low Voltage AC overhead conductor breakage. By utilizing voltage sensing and the ESP32 microcontroller, it can immediately notify authorities about broken power lines, significantly reducing the risk of electrocution and power downtime.",
    tech: ["ESP32", "Voltage Sensors", "Embedded C"],
    image: "/conductor-breakage.jpg",
    link: "#"
  },
  {
    title: "Smart Home Automation System",
    description: "Designed an IoT-enabled home automation system for controlling electrical appliances remotely.",
    longDescription: "A comprehensive IoT-enabled home automation system built to control electrical appliances remotely over the internet. It features real-time feedback, scheduling capabilities, and a user-friendly interface powered by Blynk and ESP8266, making it easy to manage energy consumption efficiently.",
    tech: ["ESP8266", "Relay Modules", "Blynk"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    link: "#"
  },
  {
    title: "IoT Water Leakage & Quality System",
    description: "Designed a comprehensive IoT-based system for detecting water leaks and monitoring quality with automated shutoff capabilities.",
    longDescription: "A town-scale IoT water quality monitoring and leak detection system. It features zone-based node placement, contamination containment, and an automated shutoff valve to isolate leaks. By utilizing pH, turbidity, TDS, flow, and pressure sensors alongside ESP32 and LoRa communication, it ensures rapid response to both leaks and water contamination.",
    tech: ["ESP32", "LoRa", "Flow Sensors", "Solenoid Valve"],
    image: "/water-quality.png",
    link: "#"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-dark-lighter relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-electricBlue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass rounded-2xl overflow-hidden group border border-white/5 hover:border-electricBlue/50 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-electricBlue/20 group-hover:bg-transparent transition-colors z-10" />
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium bg-dark rounded border border-gray-800 text-cyanAccent">{t}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-medium hover:text-cyanAccent flex items-center gap-1 transition-colors"
                  >
                    Learn More <ArrowRight size={16} />
                  </button>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-dark rounded-full hover:text-electricBlue transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark-lighter border border-gray-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-dark/50 hover:bg-dark rounded-full text-gray-400 hover:text-white transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <div className="h-64 relative w-full">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-sm font-medium bg-dark rounded-full border border-gray-700 text-cyanAccent">{t}</span>
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8">
                  {selectedProject.longDescription}
                </p>
                
                <div className="flex justify-end">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-electricBlue text-dark font-bold rounded-lg hover:bg-cyanAccent transition-colors flex items-center gap-2"
                  >
                    View Source <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
