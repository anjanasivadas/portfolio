"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Bookstore (E-commerce)",
    description: "A full-stack online bookstore built with React, Node.js, and MongoDB. Users can browse books, add to cart, and make secure purchases.",
    link: "#"
  },
  {
    title: "Order Tracking (Blockchain)",
    description: "A blockchain-based order tracking system to securely track product orders, ensuring transparency and reliability in supply chain management.",
    link: "#"
  },
  {
    title: "Todo App",
    description: "A simple web application to manage daily tasks, built using React and Tailwind CSS.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="px-10 py-20 bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            className="bg-gray-800 rounded-lg shadow hover:scale-105 transition-transform p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-300 mb-3">{proj.description}</p>
            <a href={proj.link} className="text-blue-400 hover:underline">View Project</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
