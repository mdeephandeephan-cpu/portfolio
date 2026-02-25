import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";
import {
  Code2, Globe, Server, Database, Wrench,
} from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "Java", "C++"],
  },
  {
    icon: Globe,
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "Firebase"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["VS Code", "Eclipse"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Skills" subtitle="What I work with" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <AnimateOnScroll key={cat.title}>
              <div
                className="bg-card rounded-xl p-6 card-hover h-full"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <cat.icon className="text-primary mb-3" size={24} />
                <h3 className="font-semibold mb-3">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-3 py-1.5 rounded-full bg-primary/10 text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
