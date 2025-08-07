import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 80, description: "Building dynamic user interfaces" },
        { name: "TypeScript", level: 80, description: "Type-safe development" },
        { name: "Tailwind CSS", level: 90, description: "Modern styling solutions" },
        { name: "HTML", level: 85, description: "Modern JavaScript features" },
        { name: "Chart.js/Recharts", level: 70, description: "Data visualization libraries" },
        { name: "Framer Motion", level: 50, description: "Animations and transitions" }
      ]
    },
    backend: {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 75, description: "Server-side JavaScript" },
        { name: "Python", level: 90, description: "Data science & web development" },
        { name: "PostgreSQL", level: 80, description: "Relational database management" },
        { name: "REST APIs", level: 80, description: "API design and development" },
        { name: "Express.js", level: 75, description: "Web application framework for Node.js" },
        { name: "Django", level: 72, description: "High-level Python web framework" },
        { name: "Mongo DB", level: 66, description: "NoSQL database for modern applications" }
      ]
    },
    tools: {
      title: "Other Tools & Platforms",
      skills: [
        { name: "Git/GitHub", level: 90, description: "Version control & collaboration" },
        { name: "Docker", level: 65, description: "Containerization" },
        { name: "AWS", level: 50, description: "Cloud infrastructure" },
        { name: "Figma", level: 75, description: "UI/UX design" }
      ]
    },
    soft: {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 95, description: "Analytical thinking" },
        { name: "Communication", level: 90, description: "Clear technical communication" },
        { name: "Leadership", level: 90, description: "Team collaboration" },
        { name: "Learning Agility", level: 99, description: "Adapting to new technologies" },
        { name: "Time Management", level: 85, description: "Prioritizing tasks effectively" },
        { name: "Critical Thinking", level: 95, description: "Evaluating information objectively" }
      ]
    }
  };

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "Google Analytics Certified",
    "freeCodeCamp Frontend Certification",
    "HackerRank Problem Solving (Gold)"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive tool skillset for building modern, scalable applications that solve complex problems.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <Button
                key={key}
                variant={activeCategory === key ? "hero" : "glass"}
                onClick={() => setActiveCategory(key)}
                className="transition-all duration-300"
              >
                {category.title}
              </Button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <Card key={index} className="glass p-6 hover:glow-accent transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold group-hover:text-accent transition-colors">
                      {skill.name}
                    </h4>
                    <Badge variant="secondary">{skill.level}%</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                  <Progress value={skill.level} className="h-2" />
                </div>
              </Card>
            ))}
          </div>

          {/* Code Example */}
          <Card className="glass p-8 mb-12">
            <h3 className="text-xl font-semibold mb-4 gradient-text-accent">Code Philosophy</h3>
            <div className="code-block">
              <pre className="text-sm overflow-x-auto">
                <code className="text-accent animate-code-glow">{`const developmentPhilosophy = {
  code: "Clean, readable, and maintainable (DRY)",
  testing: "Write non-redundant tests that matter",
  architecture: "Scalable and modular design",
  collaboration: "Clear milestones, deliverables, communication and documentation",
  learning: "Stay curious and never stop growing. Complacency is the enemy of progress.",
};

// Building the future, one line at a time ✨`}</code>
              </pre>
            </div>
          </Card>

          {/* Certifications */}
          {/* <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 gradient-text-accent">Certifications & Achievements</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                  {cert}
                </Badge>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};