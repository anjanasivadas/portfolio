"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="px-10 py-20 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
      <p className="max-w-3xl mx-auto text-gray-300 text-center">
        I am a passionate software developer who loves coding, building web applications,
        and learning new technologies. I enjoy creating projects that are functional, clean,
        and user-friendly. My goal is to continue growing as a developer while contributing
        to meaningful projects.
      </p>
    </motion.section>
  );
}
