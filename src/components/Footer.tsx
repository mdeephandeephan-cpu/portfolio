import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© 2025 Deephan M. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href="http://www.linkedin.com/in/m-deephan" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="https://github.com/mdeephandeephan-cpu" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
          <Github size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
