import { motion } from "framer-motion";
import { GraduationCap, Check } from "lucide-react";
import { PERSONAL_INFO, EDUCATION } from "@/utils/constants";

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies", value: "12+" },
    { label: "Certifications", value: "5+" },
  ];

  return (
    <section id="about" className="py-20 transition-all duration-300 inset-0 bg-gradient-to-br to-primary/20 via-secondary/10 from-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get to know more about my journey, education, and passion for
            technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border backdrop-blur-sm bg-gray-50/50 border-gray-200/20 dark:border-gray-700/30  dark:bg-slate-800/50"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-white">
                {PERSONAL_INFO.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                I am a web developer currently pursuing a Bachelor's in Computer Science
                at Lovely Professional University (2022–2026), with a strong foundation in
                HTML, CSS, JavaScript, React.js, and Node.js.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                As a Frontend Developer Intern at Enliven Technologies Pvt. Ltd. (Nov 2024 – Present),
                I’ve built interactive charts & dashboards with APIs, managed state with modern
                libraries, and collaborated on clean, scalable projects.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 text-center rounded-xl border bg-gray-50/50 dark:bg-slate-800/50 border-gray-200/20 dark:border-gray-700/30"
                >
                  <div className="text-2xl font-bold text-[#01a2e6]">{stat.value}</div>
                  <div className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border bg-gray-50/50 dark:bg-slate-800/50 border-gray-200/20 dark:border-gray-700/30 "
            >
              <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-white">Current Focus</h3>
              <ul className="space-y-3">
                {[
                  "Full-Stack MERN Development",
                  "Next.js & Modern Web Apps",
                  "Open Source Contributions",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Check className="h-5 w-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border bg-gray-50/50 dark:bg-slate-800/50 border-gray-200/20 dark:border-gray-700/30 "
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-700 dark:text-white">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              <div className="space-y-2">
                <p className="font-semibold text-gray-600 dark:text-gray-300">{EDUCATION.degree}</p>
                <p className="text-gray-600 dark:text-gray-300">{EDUCATION.major}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{EDUCATION.university}</p>
                <p className="text-sm text-muted-foreground dark:text-gray-400">{EDUCATION.duration}</p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">CGPA: {EDUCATION.cgpa}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


export default About;
