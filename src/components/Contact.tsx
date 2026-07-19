import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-24 h-1 bg-electricBlue mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400">Feel free to reach out for collaborations, opportunities, or just to say hi!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-3xl border border-white/10"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input type="text" id="name" className="w-full bg-dark-lighter border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyanAccent focus:ring-1 focus:ring-cyanAccent transition-colors text-white" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input type="email" id="email" className="w-full bg-dark-lighter border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyanAccent focus:ring-1 focus:ring-cyanAccent transition-colors text-white" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
              <input type="text" id="subject" className="w-full bg-dark-lighter border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyanAccent focus:ring-1 focus:ring-cyanAccent transition-colors text-white" placeholder="Project Inquiry" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea id="message" rows={5} className="w-full bg-dark-lighter border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyanAccent focus:ring-1 focus:ring-cyanAccent transition-colors text-white resize-none" placeholder="Your message here..."></textarea>
            </div>
            <button type="button" className="w-full bg-electricBlue hover:bg-blue-600 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
