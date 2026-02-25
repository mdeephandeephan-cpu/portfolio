import { GraduationCap, Code2, Lightbulb } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="About Me" subtitle="Get to know me" />

        <AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 card-hover gradient-border">
              <GraduationCap className="text-primary mb-4" size={28} />
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">
                B.Tech Information Technology at Panimalar Engineering College (2027) — CGPA: 7.7
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 card-hover gradient-border">
              <Code2 className="text-primary mb-4" size={28} />
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-sm text-muted-foreground">
                Passionate about web development, building scalable systems, and crafting clean user experiences.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 card-hover gradient-border">
              <Lightbulb className="text-primary mb-4" size={28} />
              <h3 className="font-semibold mb-2">Problem Solving</h3>
              <p className="text-sm text-muted-foreground">
                Driven by real-world problem solving and continuously learning new technologies and frameworks.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default AboutSection;
