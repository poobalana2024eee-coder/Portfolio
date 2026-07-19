import { motion } from 'framer-motion';

const education = [
  {
    degree: "Bachelor of Engineering in Electronics and Electrical Engineering",
    institution: "University Name (Placeholder)",
    duration: "2022 - 2026 (Expected)",
    cgpa: "8.0/10.0"
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "High School Name (Placeholder)",
    duration: "2020 - 2022",
    cgpa: "90.3%"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-dark-lighter relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Academic <span className="text-gradient">Education</span></h2>
          <div className="w-24 h-1 bg-electricBlue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-electricBlue/40 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyanAccent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="text-xl font-bold mb-2 relative z-10 text-white">{edu.degree}</h3>
              <p className="text-cyanAccent font-medium mb-4 relative z-10">{edu.institution}</p>
              <div className="flex justify-between text-sm text-gray-400 relative z-10">
                <span>{edu.duration}</span>
                <span className="bg-dark px-3 py-1 rounded-md text-electricBlue border border-gray-800">CGPA: {edu.cgpa}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
