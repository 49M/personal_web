import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Rocket, Brain, Target } from "lucide-react";
import { InteractiveAvatar } from "./InteractiveAvatar";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Engineering",
      description: "React, TypeScript, Node.js - building end-to-end solutions"
    },
    {
      icon: Rocket,
      title: "SaaS Builder", 
      description: "Shipped 3 products to production with 1000+ users"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">About</span>
            </h2>
          </div>

          {/* Interactive Avatar */}
          <div className="flex justify-center mb-16">
            <InteractiveAvatar />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* Core Message */}
            <div className="text-center mb-16">
              <p className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                Building SaaS products that solve real problems.<br />
                <span className="gradient-text">Currently shipping at stealth startup.</span>
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-8 mb-16">
              {highlights.map((highlight, index) => (
                <Card key={index} className="glass p-8 hover:glow-primary transition-all duration-500 group border-0 text-center">
                  <div className="p-3 rounded-2xl bg-gradient-primary shadow-lg group-hover:scale-110 transition-transform duration-300 w-fit mx-auto mb-4">
                    <highlight.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {highlight.description}
                  </p>
                </Card>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="glass p-8 rounded-3xl text-center">
              <h3 className="text-xl font-semibold gradient-text-accent mb-6">Current Stack</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"].map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 hover:scale-105 transition-transform">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};