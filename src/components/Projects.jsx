"use client";
import { motion } from "framer-motion";
import { PROJECTS } from '@/utils/constants';
import { ExternalLink, Github, Check } from 'lucide-react';

const Projects = () => {
  const additionalProjects = [
    {
      name: 'Basket Ball Academy',
      techStack: ['React', 'Tailwind CSS'],
      description: 'A responsive Basketball Academy website built with React, showcasing programs, events, and information for basketball enthusiasts.',
      features: [
        "Responsive basketball academy website",
        "Clean, modular component structure",
        "CSS - based styling, easy to customize",
        "Hosted on Netlify for deployment",
      ],
      githubLink: 'https://github.com/keshavyadav5/Basketball-React',
      liveDemo: 'https://basektballacademy.netlify.app/',
      image: 'https://res.cloudinary.com/dlecrzota/image/upload/v1754036527/cf08las00xvsm6iazh2s',
      gradient: "from-indigo-200 to-blue-200"
    },
    {
      name: 'Hotel Booking',
      techStack: ["React.js", "Tailwind"],
      description: 'A React-based hotel booking front-end clone, with responsive UI for searching, booking, and viewing accommodations.',
      features: [
        "Responsive hotel booking web interface",
        "Search and filter accommodation options",
        "Booking form with user details",
        "Styled with CSS for customization",
      ],
      githubLink: 'https://github.com/keshavyadav5/Hotel-booking-React-frontEnd',
      liveDemo: 'https://hotelbookingreactfrontend.netlify.app/',
      image: 'https://res.cloudinary.com/dlecrzota/image/upload/v1754036527/fpprc0owuqyrrqcs6e9d',
      gradient: "from-blue-200 to-indigo-200"
    }
  ];

  const allProjects = [...PROJECTS, ...additionalProjects];

  return (
    <section id="projects" className="py-20  transition-all duration-300 inset-0 bg-gradient-to-br to-primary/20 via-secondary/10 from-accent/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Title with animation */}
          <motion.div
            className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/30 rounded-xl overflow-hidden shadow-md"
                data-testid={`project-card-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient || 'from-blue-200 to-purple-200'} relative overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={`${project.name} Interface`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" data-testid={`project-title-${index}`}>
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm 
                          bg-slate-100 dark:bg-slate-500 flex items-center justify-center text-slate-900 dark:text-white transition-all duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Key Features:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className={`mr-2 h-3 w-3 
                            text-green-500`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      className={`flex-1 px-4 py-2 rounded-lg text-center font-medium transition-all transform hover:scale-105 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 border rounded-lg hover:scale-105 
                        bg-slate-100 dark:bg-slate-500 flex items-center justify-center text-slate-900 dark:text-white transition-all duration-300`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/keshavyadav5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full font-medium transition-all transform hover:scale-105 gap-2"
              data-testid="link-all-projects"
            >
              <Github className="h-4 w-4" />
              View All Projects on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
