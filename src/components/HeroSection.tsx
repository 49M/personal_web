import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Software Engineer", "SaaS Builder", "Full-Stack Developer", "Startup Guy"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-secondary rounded-full animate-float opacity-30" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-success rounded-full animate-float opacity-50" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <h2 className="text-lg md:text-xl text-accent mb-4 animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            👋 Hello, I'm
          </h2>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <span className="gradient-text">Michal Buczek</span>
          </h1>
          
          {/* Dynamic Role */}
          <div className="h-16 md:h-20 mb-8 animate-slide-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
              <span className="gradient-text-accent">{roles[currentRole]}</span>
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            Building products that solve real problems.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            <Button variant="hero" size="xl" className="group" onClick={scrollToContact}>
              <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Get In Touch
            </Button>
            <a href='/michal_buczek_resume.pdf' download>
              <Button variant="glass" size="xl" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16 animate-slide-up opacity-0" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
            <a href="https://github.com/49M" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/michal-buczek2005/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href="mailto:michal_buczek@yahoo.com">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" onClick={scrollToNext}>
            <ChevronDown className="h-6 w-6 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
};