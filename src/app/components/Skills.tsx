"use client";

import { motion } from "framer-motion";

const technicalSkills = ["HTML", "CSS", "JavaScript", "React", "Python", "Next.js", "Tailwind CSS", "C++"];
const softSkills = ["Problem Solving", "Communication", "Teamwork", "Adaptability", "Creativity", "Time Management"];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="px-10 py-20 bg-black text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

      {/* Technical Skills */}
      <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
        {technicalSkills.map((skill, i) => (
          <motion.div
            key={skill}
            className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition-transform text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="font-semibold">{skill}</p>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills */}
      <h3 className="text-2xl font-semibold mb-6 text-center">Soft Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {softSkills.map((skill, i) => (
          <motion.div
            key={skill}
            className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition-transform text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="font-semibold">{skill}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
