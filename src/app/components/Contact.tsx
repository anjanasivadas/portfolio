"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="px-10 py-20 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-300 mb-6">I’m open to new opportunities and collaborations. Feel free to reach out!</p>
        <p className="mb-4">📧 Email: <a href="mailto:anjanateas7@gmail.com" className="text-blue-400 hover:underline">anjanateas7@gmail.com</a></p>
        <p className="mb-6">
          🔗 GitHub: <a href="https://github.com/anjanasivadas/" className="text-blue-400 hover:underline" target="_blank">github.com/anjanasivadas</a> | 
          LinkedIn: <a href="https://www.linkedin.com/in/anjana-sivadas-6140941b6/" className="text-blue-400 hover:underline" target="_blank">linkedin.com/in/anjanasivadas</a>
        </p>
      </div>
    </motion.section>
  );
}
