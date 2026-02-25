import { Briefcase, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

const internships = [
  { title: "Web Development", org: "Test Yantra" },
  { title: "Drone & Technology", org: "Aviatorq Drone Service" },
  { title: "Python for Data Analytics", org: "VIT Chennai" },
];

const certifications = [
  { title: "Data Science for Beginners", org: "NASSCOM" },
  { title: "Front End Web Developer", org: "Infosys" },
  { title: "Diploma in Python Programming", org: "CSC" },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Experience & Certifications" subtitle="My journey" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Internships */}
          <AnimateOnScroll>
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
                <Briefcase size={20} className="text-primary" /> Internships & Workshops
              </h3>
              <div className="space-y-4">
                {internships.map((item, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-xl p-5 card-hover"
                  >
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.org}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Certifications */}
          <AnimateOnScroll>
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
                <Award size={20} className="text-primary" /> Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((item, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-xl p-5 card-hover"
                  >
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.org}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
