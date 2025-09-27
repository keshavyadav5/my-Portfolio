import { PERSONAL_INFO } from '@/utils/constants';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <footer className="bg-muted/50 border-t border-border transition-all duration-300 dark:bg-[#081b29] bg-[#eaedef]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb- md:mb-0 text-center py-6">
            <p className="text-muted-foreground">
              &copy; 2025 {PERSONAL_INFO.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6 mb-1 md:mb-0">
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-email"
            >
              <Mail className="h-5 w-5" />
            </a>
            
            {/* Back to top button */}
            {isVisible && (
              <button
                onClick={scrollToTop}
                className="ml-4 p-2 bg-primary/20 hover:bg-primary hover:text-primary-foreground text-primary rounded-full transition-all transform hover:scale-110"
                data-testid="back-to-top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
