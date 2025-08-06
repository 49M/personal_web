import { Button } from "@/components/ui/button";
import { Code, Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/49M", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/michal-buczek2005/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:michal_buczek@yahoo.com", label: "Email" }
  ];

  return (
    <footer className="bg-card/50 border-t border-border backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold gradient-text">Michal Buczek</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Computer Science student passionate about building innovative SaaS solutions 
                and creating meaningful impact through technology.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:scale-110 transition-transform"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-muted-foreground hover:text-primary justify-start"
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {link.name}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-accent">Let's Connect</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>San Francisco, CA</p>
                <p>alex@example.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <Button variant="hero" size="sm" className="mt-4" asChild>
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>using React, TypeScript & Tailwind CSS</span>
              </div>

              <div className="flex items-center space-x-4">
                <p className="text-muted-foreground">
                  © {currentYear} Michal Buczek. All rights reserved.
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={scrollToTop}
                  className="hover:scale-110 transition-transform"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};