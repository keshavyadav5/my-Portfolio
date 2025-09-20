import { CERTIFICATIONS } from '@/utils/constants';
import { Award, Tag, Code, Laptop, ExternalLink } from 'lucide-react';

const additionalCertifications = [
  {
    name: "JavaScript ES6+",
    issuer: "Coursera",
    description:
      "Modern JavaScript development with ES6+ features, async programming, and advanced concepts for building scalable applications.",
    skills: ["ES6+", "Async/Await", "Modules", "Promises"],
    link: "https://res.cloudinary.com/dlecrzota/image/upload/react.png"
  },
  {
    name: "Full Stack Development",
    issuer: "Udemy",
    description:
      "Comprehensive full stack web development covering frontend and backend technologies, database design, and deployment strategies.",
    skills: ["MERN Stack", "REST APIs", "Authentication", "Deployment"],
    link: "https://res.cloudinary.com/dlecrzota/image/upload/v1745902200/b4decee3-f2b8-4d2c-8ff5-00f644ccf30f.png"
  },
];

const allCertifications = [...CERTIFICATIONS];

const getIcon = (index) => {
  const icons = [Tag, Award, Code, Laptop];
  const Icon = icons[index % icons.length];
  return <Icon className="h-8 w-8" />;
};

const getColorClasses = (index) => {
  const colors = [
    { bg: "bg-primary/20", text: "text-primary", hover: "hover:text-primary" },

  ];
  return colors[index % colors.length];
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12 font-serif">
            Certifications & <span className="text-primary">Achievements</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {allCertifications.map((cert, index) => {
              const colors = getColorClasses(index);

              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl backdrop-blur-sm border bg-white/50 border-gray-200/50 dark:bg-slate-800/50 dark:border-slate-700/50 transition-all duration-300 hover:scale-[1.02]"
                  data-testid={`certification-card-${index}`}
                >
                  {/* background blob */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-slate-100 dark:bg-slate-500 rounded-bl-full`}
                  ></div>

                  {/* header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`mr-4 ${colors.text}`}>{getIcon(index)}</div>
                      <div>
                        <h3
                          className="text-xl font-bold text-slate-900 dark:text-white"
                          data-testid={`cert-name-${index}`}
                        >
                          {cert.name}
                        </h3>
                        <p className="text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-50"
                      >
                        <ExternalLink className="h-5 w-5 text-slate-900 dark:text-white" />
                      </a>
                    )}
                  </div>

                  {/* description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* skills */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-2 py-1 bg-slate-100 dark:bg-slate-500 ${colors.text} rounded text-xs`}
                          data-testid={`cert-skill-${index}-${skillIndex}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
