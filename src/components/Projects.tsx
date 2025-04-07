import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    title: 'Buynowdotcom',
    description: ' Developed a full-stack e-commerce web application with features like user authentication, product catalog, shopping cart, and admin dashboard. Built using Java, JDBC, MYSQL, and spring boot, Maven. Implemented both customer and admin modules with CRUD operations, session management, and database integration and make the payment using stripe.',
    image: 'https://www.rankontechnologies.com/wp-content/uploads/2024/01/What-is-Ecommerce-Actually.jpg',
    github: 'https://github.com/Abhi56709/buynowdotcom',
    tags: [ 'Java', 'MYSQL Database', 'spring boot', 'Maven', 'Javascript', 'CSS', 'HTML', 'Reactjs'],
    longDescription: ' Developed a full-stack e-commerce web application with features like user authentication, product catalog, shopping cart, and admin dashboard. Built using Java, JDBC, MYSQL, and spring boot, Maven. Implemented both customer and admin modules with CRUD operations, session management, and database integration and make the payment using stripe.'
  },
  {
    title: ' Mealmate',
    description: ' Built a dynamic full-stack food ordering web application using Django, HTML/CSS, JavaScript, and MySQL. Implemented features like user registration, login, menu browsing, cart management, and order placement. Included an admin panel for managing users, menu items, and orders.',
    image: 'https://www.dealfuel.com/wp-content/uploads/2024/02/MyFoodPlanet-Feature-image.jpg',
    github: 'https://github.com/Abhi56709/Mealmate',
    tags: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'SQL', 'Javascript'],
    longDescription: ' Built a dynamic full-stack food ordering web application using Django, HTML/CSS, JavaScript, and MySQL. Implemented features like user registration, login, menu browsing, cart management, and order placement. Included an admin panel for managing users, menu items, and orders.'
  },
  {
    title: 'Quiz App',
    description: ' QuizApp is a ReactJS-based web application that allows users to take assessments by solving multiple-choice questions (MCQs). The application ensures a seamless user experience with validations, scoring, and a final result display.',
    image: 'https://i.ytimg.com/vi/PBcqGxrr9g8/maxresdefault.jpg',
    github: ' https://github.com/Abhi56709/QuizApp',
    tags: ['JavaScript', 'HTML', 'CSS', 'ReactJS'],
    longDescription: ' QuizApp is a ReactJS-based web application that allows users to take assessments by solving multiple-choice questions (MCQs). The application ensures a seamless user experience with validations, scoring, and a final result display.'
  },

  {
    title: ' Task Buddy App',
    description: ' TaskBuddy is a ReactJS-based task management application that helps users efficiently manage their tasks. The app supports adding, updating, and deleting tasks, with all data stored locally in the browser for persistent usage.',
    image: 'https://play-lh.googleusercontent.com/CP5cO5liGjAQZ9EQgWmA17zxc2FVrf9HC7HidFjAKTwaAOVjaRp7B5N3y2ANbdfA9A=h500',
    github: 'https://github.com/Abhi56709/TaskBuddyApp',
    tags: ['JavaScript', 'HTML', 'CSS', 'ReactJS'],
    longDescription: ' TaskBuddy is a ReactJS-based task management application that helps users efficiently manage their tasks. The app supports adding, updating, and deleting tasks, with all data stored locally in the browser for persistent usage.'
  },
  {
    title: 'Data Transmission using Li-Fi Technology',
    description: 'Li-Fi has a light emitter on one end, i.e., an IR LED transmitter, and an IR Photodiode (light sensor) on the other. The data input to the LED transmitter is encoded into the light (technically referred to as Visible Light Communication) by varying the flickering rate at which the LEDs flicker ‘on’ and ‘off’ to generate different strings of 1s and 0s.',
    image: 'https://img.jagranjosh.com/images/2021/January/2212021/Li-Fi-technology.jpg',
    tags: ['Python', 'C', 'Light Fidelity'],
    longDescription: 'Li-Fi has a light emitter on one end, i.e., an IR LED transmitter, and an IR Photodiode (light sensor) on the other. The data input to the LED transmitter is encoded into the light (technically referred to as Visible Light Communication) by varying the flickering rate at which the LEDs flicker ‘on’ and ‘off’ to generate different strings of 1s and 0s.'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Briefcase className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </span>
                </div>
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center text-gray-600 hover:text-indigo-600"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center text-gray-600 hover:text-indigo-600"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg p-6 max-w-2xl w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6">{selectedProject.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Code
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}