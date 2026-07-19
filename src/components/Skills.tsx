import { motion } from 'framer-motion';

const skills = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "Python", "Verilog HDL"]
  },
  {
    category: "Embedded Systems",
    items: ["ESP32", "Arduino", "Raspberry Pi", "Embedded C", "UART", "SPI", "I2C", "ADC", "PWM"]
  },
  {
    category: "Electronics",
    items: ["Digital Electronics", "Analog Electronics", "Microcontrollers", "Power Electronics", "Signal Processing", "Sensors and Interfacing"]
  },
  {
    category: "VLSI",
    items: ["CMOS", "Verilog HDL", "Logic Design", "Digital IC Design", "Cadence Virtuoso", "Layout Design", "DRC", "LVS"]
  },
  {
    category: "IoT",
    items: ["Wireless Sensor Networks", "MQTT", "Wi-Fi", "Edge Devices", "Smart Monitoring Systems"]
  },
  {
    category: "Tools",
    items: ["Cadence Virtuoso", "LTspice", "MATLAB", "Arduino IDE", "VS Code", "Git", "GitHub", "Linux"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <div className="w-24 h-1 bg-electricBlue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:border-cyanAccent/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyanAccent">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-dark-lighter rounded-md border border-white/5 text-gray-300 hover:text-white hover:border-electricBlue transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
