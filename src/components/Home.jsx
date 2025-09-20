import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { PERSONAL_INFO, TYPING_TEXTS } from '@/utils/constants';
import { Download, Eye, Linkedin, Github, Mail, Phone, Instagram } from 'lucide-react';
import resume from './resume.pdf';

export default function HeroSection() {
  const typingText = useTypingAnimation(TYPING_TEXTS);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.setAttribute("download", "KeshavYadav_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 md:to-accent/20"></div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-4xl mx-auto">

          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="https://res.cloudinary.com/dlecrzota/image/upload/v1754036527/keshav.jpg"
              alt="Keshav Kumar Yadav"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto glass p-2 animate-float object-cover"
            />
          </div>


          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-6 h-8">
            <span className="typing-cursor font-mono">{typingText}</span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300  mb-8 max-w-2xl mx-auto leading-relaxed ">
            {PERSONAL_INFO.bio}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              className="px-8 py-3 bg-[#081b29] dark:bg-white dark:border-black dark:text-[#081b29] dark:hover:bg-transparent border border-primary dark:hover:text-white dark:hover:border-white hover:text-black hover:bg-white hover:text-primary rounded-full font-medium transform hover:scale-105 flex items-center gap-2 transition-all duration-300"
              onClick={handleDownloadResume}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 dark:hover:bg-white dark:hover:text-[#081b29] dark:hover:border-[#081b29] py-3 border border-primary text-primary hover:bg-[#081b29] hover:text-primary-foreground rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Eye className="h-4 w-4" />
              View Projects
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-all transform hover:scale-110">
              <Linkedin />
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-all transform hover:scale-110">
              <Github />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`}
              className="text-2xl hover:text-primary transition-all transform hover:scale-110">
              <Mail />
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`}
              className="text-2xl hover:text-primary transition-all transform hover:scale-110">
              <Phone />
            </a>
            <a href={PERSONAL_INFO.instagram} target="_blank" rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-all transform hover:scale-110">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
