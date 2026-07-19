import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Summer Intern - VLSI Design",
    company: "Semiconductor Corp (Placeholder)",
    duration: "June 2025 - Aug 2025",
    description: "Assisted in digital IC design and layout verification using Cadence Virtuoso. Conducted DRC and LVS checks on standard cell libraries."
  },
  {
    role: "Hardware Engineering Intern",
    company: "IoT Solutions Inc (Placeholder)",
    duration: "Jan 2025 - May 2025",
    description: "Developed firmware for ESP32 based smart sensor nodes. Designed multi-layer PCBs for industrial monitoring applications."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <div className="w-24 h-1 bg-electricBlue mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-dark text-cyanAccent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-cyanAccent/20 z-10">
                <div className="w-2 h-2 bg-electricBlue rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-white/5 hover:border-cyanAccent/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white">{exp.role}</h3>
                  <span className="text-sm text-cyanAccent">{exp.duration}</span>
                </div>
                <h4 className="text-gray-400 font-medium mb-4">{exp.company}</h4>
                <p className="text-gray-400 text-sm">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
