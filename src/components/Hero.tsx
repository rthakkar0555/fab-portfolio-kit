import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
const Hero = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Computer Science Student",
    "MERN Stack Developer", 
    "AI Agent Developer",
    "Backend Developer"
  ];

  useEffect(() => {
    const currentText = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentRole.length < currentText.length) {
          setCurrentRole(currentText.slice(0, currentRole.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentRole.length > 0) {
          setCurrentRole(currentRole.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentRole, currentIndex, isDeleting, roles]);

  return <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute inset-0 dot-grid">
        <div className="dot-grid__wrap">
          <div className="dot-grid__canvas"></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1),transparent_50%)] bg-slate-50"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Rishi Thakkar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed min-h-[2.5rem] flex items-center justify-center font-medium">
            {currentRole}
            <span className="animate-pulse ml-1 text-primary">|</span>
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Dedicated to building scalable applications and optimizing system performance 
            to tackle real-world challenges with innovative solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="shadow-glow hover:shadow-elegant transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
              View Projects
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="mailto:rishithakkar0555@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">rishithakkar0555@gmail.com</span>
            </a>
            <a href="tel:+919824830760" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
              <span className="hidden sm:inline">+91 9824830760</span>
            </a>
            <a href="https://github.com/rthakkar0555" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/rishi-thakkar-b53424276/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;