"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center bg-gradient-to-r from-purple-900 via-black to-purple-900">
      
      {/* Animated Greeting */}
      <motion.h1
        className="text-5xl font-bold mb-4 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m Anjana👋
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        className="text-xl text-gray-300 max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Aspiring Software Developer | Building clean & user-friendly web applications
      </motion.p>

      {/* Call-to-action Button */}
      <motion.a
        href="#about"
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Learn More
      </motion.a>

    </section>
  );
}
