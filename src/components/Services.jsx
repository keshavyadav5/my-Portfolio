"use client";
import { useState, useEffect } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import CertificationsSection from "./CertificationsSection";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "Enliven Technologies Pvt. Ltd",
    location: "Remote",
    duration: "Nov 2024 - May 2025",
    type: "Internship",
    description:
      "Working on building interactive charts and dashboards by integrating APIs, managing application state with state management libraries, and collaborating with teams to implement UI/UX designs.",
    responsibilities: [
      "Built interactive charts and dashboards by integrating APIs",
      "Managed application state with state management libraries",
      "Collaborated with teams to implement UI/UX designs",
      "Maintained code integrity using version control systems",
      "Optimized application performance and user experience",
      "Participated in code reviews and team meetings",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "API Integration",
      "State Management",
      "Git",
    ],
    current: true,
  },
];

const timeline = [
  {
    year: "2024",
    title: "Started Frontend Development Internship",
    description: "Joined Enliven Technologies as a Frontend Developer Intern",
    type: "work",
  },
  {
    year: "2023",
    title: "Advanced MERN Stack Development",
    description: "Built multiple full-stack applications and earned certifications",
    type: "education",
  },
  {
    year: "2022",
    title: "Started Computer Science Journey",
    description: "Began BTech in Computer Science at Lovely Professional University",
    type: "education",
  },
  {
    year: "2022",
    title: "First Web Development Project",
    description: "Created my first web application using HTML, CSS, and JavaScript",
    type: "project",
  },
];

const Services = () => {
  // Detect if screen is medium or larger
  const [isMdUp, setIsMdUp] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMdUp(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Conditional motion wrapper
  const AnimDiv = isMdUp ? motion.div : "div";
  const AnimLi = isMdUp ? motion.li : "li";

  return (
    <section id="services" className="py-20 dark:bg-transparent transition-all duration-300 inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 md:to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimDiv
          {...(isMdUp && {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true },
          })}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            My journey in the tech industry and key milestones
          </p>
        </AnimDiv>

        {/* Experience Cards */}
        <div className="mb-16">
          {experiences.map((experience, index) => (
            <AnimDiv
              key={experience.id}
              {...(isMdUp && {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: index * 0.2 },
                viewport: { once: true },
              })}
              className="p-8 rounded-2xl backdrop-blur-sm border bg-white/50 border-gray-200/50 dark:bg-slate-800/50 dark:border-slate-700/50 mb-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-500/20">
                      <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {experience.company}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {experience.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {experience.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400">
                  {experience.type}
                </span>
              </div>

              <p className="text-lg mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                {experience.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Key Responsibilities:
                </h5>
                <ul className="grid md:grid-cols-2 gap-2">
                  {experience.responsibilities.map((resp, respIndex) => (
                    <AnimLi
                      key={respIndex}
                      {...(isMdUp && {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.4, delay: respIndex * 0.1 },
                        viewport: { once: true },
                      })}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-blue-500 dark:bg-blue-400" />
                      <span>{resp}</span>
                    </AnimLi>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Technologies Used:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200/50 text-gray-700 dark:bg-slate-700/50 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimDiv>
          ))}
        </div>

        {/* Timeline */}
        <AnimDiv
          {...(isMdUp && {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true },
          })}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Career Timeline
          </h3>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-slate-700" />

            {timeline.map((item, index) => (
              <AnimDiv
                key={index}
                {...(isMdUp && {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: index * 0.2 },
                  viewport: { once: true },
                })}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div
                  className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 ${item.type === "work"
                    ? "bg-blue-500 border-white dark:border-slate-900"
                    : item.type === "education"
                      ? "bg-green-500 border-white dark:border-slate-900"
                      : "bg-purple-500 border-white dark:border-slate-900"
                    }`}
                />

                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                >
                  <div className="p-6 rounded-xl backdrop-blur-sm border bg-white/50 border-gray-200/50 dark:bg-slate-800/50 dark:border-slate-700/50">
                    <div className={`text-sm font-medium mb-2 ${item.type === "work"
                      ? "text-blue-600 dark:text-blue-400"
                      : item.type === "education"
                        ? "text-green-600 dark:text-green-400"
                        : "text-purple-600 dark:text-purple-400"
                      }`}
                    >
                      {item.year}
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              </AnimDiv>
            ))}
          </div>
        </AnimDiv>

        <CertificationsSection />
      </div>
    </section>
  );
};

export default Services;