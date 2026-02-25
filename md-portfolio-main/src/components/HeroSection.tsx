import { Github, Linkedin, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60 dark:bg-background/40" />
      </div>

      <div className="container mx-auto relative z-10 text-center py-20">
        <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4 animate-slide-up">
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-slide-up animate-slide-up-delay-1">
          Deephan <span className="gradient-text">M</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-2 animate-slide-up animate-slide-up-delay-2">
          IT Undergraduate | Full Stack Developer
        </p>
        <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto mb-8 animate-slide-up animate-slide-up-delay-3">
          Building Scalable & Innovative Web Solutions
        </p>

        <div className="flex items-center justify-center gap-4 mb-8 animate-slide-up animate-slide-up-delay-4">
          <a
            href="#projects"
            className="gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 animate-slide-up animate-slide-up-delay-4">
          <a
            href="http://www.linkedin.com/in/m-deephan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/mdeephandeephan-cpu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} className="text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
