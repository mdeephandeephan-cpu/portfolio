import { useState, type FormEvent } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Invalid email address", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "Thank you for reaching out." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Contact" subtitle="Get in touch" />

        <div className="grid md:grid-cols-2 gap-10">
          <AnimateOnScroll>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Feel free to reach out for collaborations, projects, or just a friendly chat!
              </p>
              <div className="space-y-4">
                <a href="mailto:mdeephandeephan@gmail.com" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Mail size={18} className="text-primary" />
                  mdeephandeephan@gmail.com
                </a>
                <a href="tel:9790948500" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Phone size={18} className="text-primary" />
                  9790948500
                </a>
                <a href="http://www.linkedin.com/in/m-deephan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Linkedin size={18} className="text-primary" />
                  LinkedIn
                </a>
                <a href="https://github.com/mdeephandeephan-cpu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Github size={18} className="text-primary" />
                  GitHub
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                maxLength={100}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                maxLength={255}
              />
              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                maxLength={1000}
              />
              <button
                type="submit"
                className="gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
