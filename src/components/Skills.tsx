import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const skills = [
  { name: 'java', level: 90, color: '#3178C6' },
  { name: 'Python', level: 90, color: '#3178C6' },
  { name: 'JavaScript', level: 85, color: '#3178C6' },
  { name: 'HTML', level: 90, color: '#3178C6' },
  { name: 'SQL', level: 90, color: '#3178C6' },
  { name: 'CSS', level: 80, color: '#3178C6' },
  { name: 'Reactjs', level: 80, color: '#3178C6' },
  { name: 'git and github', level: 90, color: '#3178C6' },
  { name: 'spring boot', level: 85, color: '#3178C6' },
  { name: 'Maven', level: 90, color: '#3178C6' },
  { name: 'Hibernate', level: 90, color: '#3178C6' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Code className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300"
            >
              <div className="mb-2 flex justify-between items-center">
                <span className="text-lg font-medium text-gray-900">{skill.name}</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-sm font-medium"
                  style={{ color: skill.color }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5,
                    ease: "easeOut"
                  }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-2 h-1 bg-gradient-to-r from-transparent to-transparent"
                style={{ backgroundImage: `linear-gradient(90deg, ${skill.color}22, ${skill.color}00)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}