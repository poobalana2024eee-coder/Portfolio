import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const certifications = [
  {
    title: "MERN Stack Internship with Capstone",
    issuer: "Better Tomorrow",
    date: "Dec 2025",
    image: "/certificates/WhatsApp Image 2026-05-25 at 11.41.10 AM.jpeg",
    type: "image"
  },
  {
    title: "Introduction to C",
    issuer: "Sololearn",
    date: "Jan 2025",
    image: "/certificates/388e34ab-da2f-40b1-a52b-8907115945f6.png",
    type: "image"
  },
  {
    title: "Paper Presentation - ELZIA 2K26",
    issuer: "Hindusthan College of Engineering",
    date: "Mar 2026",
    image: "/certificates/WhatsApp Image 2026-04-13 at 12.00.10 PM.jpeg",
    type: "image"
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks Training Services",
    date: "Mar 2026",
    image: "/certificates/certificate.pdf", // We'll handle PDF viewing with a placeholder or iframe
    type: "pdf"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-dark relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Licenses & <span className="text-gradient">Certifications</span></h2>
          <div className="w-24 h-1 bg-electricBlue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden group border border-white/5 hover:border-electricBlue/50 transition-all duration-300 flex flex-col sm:flex-row"
            >
              <div className="w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden relative bg-dark-lighter flex items-center justify-center">
                {cert.type === 'image' ? (
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400 group-hover:text-electricBlue transition-colors">
                    <Award size={48} className="mb-2" />
                    <span className="text-xs font-semibold uppercase tracking-wider">PDF Certificate</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-electricBlue/10 group-hover:bg-transparent transition-colors z-10" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
                <p className="text-cyanAccent text-sm font-medium mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs mb-4">{cert.date}</p>
                
                <div className="mt-auto pt-4 border-t border-white/5">
                  <a 
                    href={cert.image} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    View Credential <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
