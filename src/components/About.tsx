import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <User className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Working on laptop"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600">
            Hi! I'm a passionate full-stack developer eager to build beautiful and functional web applications. As a fresher with strong foundational knowledge, I specialize in Java, Python, JavaScript, MySQL, CSS, HTML, and modern web frameworks like React.js, Spring Boot, Django, and Maven. I'm enthusiastic about learning and growing in the world of web development.
            </p>
            <p className="text-lg text-gray-600">
              I I enjoy exploring the latest technologies and frameworks, and I love building personal projects that challenge my skills and creativity. I'm always learning new tools to stay updated with industry trends. In my free time, I contribute to open-source communities and actively share insights through and tech discussions. This continuous learning and sharing keeps me inspired and connected with the developer community.


            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1C4p6xN4uM1KJAwr_AIB9LHfIUzF78u5N/view?usp=drive_link"
                className="px-6 py-2 text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"

>
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}