import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, User, Briefcase, Mail } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold gradient-text">Welcome</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-primary"
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary"
            >
              Projects
            </Button>
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass rounded-lg mt-2">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection("hero")}
              >
                <User className="mr-2 h-4 w-4" />
                Home
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection("about")}
              >
                <User className="mr-2 h-4 w-4" />
                About
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection("skills")}
              >
                <Code className="mr-2 h-4 w-4" />
                Skills
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection("projects")}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Projects
              </Button>
              <Button
                variant="hero"
                className="w-full justify-start"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};