import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Rocket, Brain, Target } from "lucide-react";

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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate computer science student dedicated to creating innovative solutions 
              in the SaaS and startup ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold gradient-text-accent">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
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

              {/* Values */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-accent">Core Values</h4>
                <div className="flex flex-wrap gap-2">
                  {values.map((value, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="glass p-6 hover:glow-primary transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-gradient-primary">
                      <highlight.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">3+</div>
              <div className="text-muted-foreground">Years Coding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">10+</div>
              <div className="text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">∞</div>
              <div className="text-muted-foreground">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};