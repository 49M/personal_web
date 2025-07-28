import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Rocket, Brain, Target } from "lucide-react";
import { InteractiveAvatar } from "./InteractiveAvatar";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Software Engineering",
      description: "Passionate about clean code, scalable architectures, and modern development practices."
    },
    {
      icon: Rocket,
      title: "SaaS Innovation",
      description: "Building the future of software with cloud-native solutions and user-centric design."
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Analytical mindset with a focus on finding elegant solutions to complex challenges."
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Driven to create meaningful impact through technology and continuous learning."
    }
  ];

  const values = ["Innovation", "Quality", "Collaboration", "Growth", "Impact"];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate computer science student dedicated to creating innovative solutions 
              in the SaaS and startup ecosystem.
            </p>
          </div>

          {/* Interactive Avatar */}
          <div className="flex justify-center mb-20">
            <InteractiveAvatar />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left Column - Story */}
            <div className="space-y-8">
              <div className="glass p-8 rounded-2xl hover:glow-primary transition-all duration-300">
                <h3 className="text-3xl font-semibold gradient-text-accent mb-6">My Journey</h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    As a Computer Science student with a passion for entrepreneurship, I'm fascinated by 
                    the potential of technology to solve real-world problems. My journey began with curiosity 
                    about how software works and evolved into a mission to build meaningful products.
                  </p>
                  <p>
                    Currently immersed in the SaaS startup world, I'm learning not just how to code, 
                    but how to think like an entrepreneur. I believe in the power of well-designed 
                    software to transform businesses and improve lives.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, reading about 
                    startup success stories, or brainstorming the next big idea with fellow developers.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="glass p-6 rounded-2xl">
                <h4 className="text-xl font-semibold mb-4 text-accent">Core Values</h4>
                <div className="flex flex-wrap gap-3">
                  {values.map((value, index) => (
                    <Badge key={index} variant="secondary" className="px-4 py-2 text-sm hover:scale-105 transition-transform">
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="glass p-8 hover:glow-primary transition-all duration-500 group border-0">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 rounded-2xl bg-gradient-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="glass p-8 rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">3+</div>
                <div className="text-muted-foreground font-medium">Years Coding</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">10+</div>
                <div className="text-muted-foreground font-medium">Projects Built</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">5+</div>
                <div className="text-muted-foreground font-medium">Technologies</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">∞</div>
                <div className="text-muted-foreground font-medium">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};