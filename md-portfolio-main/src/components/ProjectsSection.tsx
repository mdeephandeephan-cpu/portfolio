import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

const projects = [
  {
    title: "Digital Notice Board for Communities",
    description:
      "Full-stack application with role-based access, real-time updates via Socket.io, and Cloudinary image upload.",
    tech: ["React", "Express", "PostgreSQL", "Socket.io", "Cloudinary"],
    link: "https://github.com/mdeephandeephan-cpu/DIGITIAL-NOTICE-BOARD-FOR-COMMUNITIES",
  },
  {
    title: "Musify – Music Player",
    description:
      "A clean, interactive music player with play, pause, and track navigation built with vanilla web technologies.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/mdeephandeephan-cpu/Musify-music-player",
  },
  {
    title: "Student Database Management System",
    description:
      "Python + MySQL CRUD application with data validation and query optimization for student records.",
    tech: ["Python", "MySQL"],
    link: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent pointer-events-none" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <SectionHeading title="Projects" subtitle="What I've built" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <AnimateOnScroll key={i}>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="bg-card rounded-xl p-6 card-hover gradient-border h-full flex flex-col cursor-pointer group">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">{p.title}</h3>
                      <ExternalLink size={16} className="text-muted-foreground shrink-0 mt-1 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="bg-card rounded-xl p-6 card-hover gradient-border h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg leading-tight">{p.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
