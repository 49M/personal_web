import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "TaskFlow SaaS",
      description: "A comprehensive project management platform built with React, Node.js, and PostgreSQL. Features real-time collaboration, advanced analytics, and team productivity insights.",
      category: "saas",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      github: "https://github.com",
      live: "https://taskflow-demo.com",
      featured: true,
      stats: { stars: 124, forks: 23 }
    },
    {
      id: 2,
      title: "AI Code Assistant",
      description: "VS Code extension that provides intelligent code suggestions and documentation generation using OpenAI API. Helps developers write better code faster.",
      category: "tool",
      technologies: ["TypeScript", "VS Code API", "OpenAI", "Node.js"],
      image: "/api/placeholder/600/400",
      github: "https://github.com",
      live: "https://marketplace.visualstudio.com",
      featured: true,
      stats: { stars: 89, forks: 15 }
    },
    {
      id: 3,
      title: "FinTrack Mobile App",
      description: "Personal finance tracking app built with React Native. Features expense categorization, budget planning, and financial goal tracking.",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      image: "/api/placeholder/600/400",
      github: "https://github.com",
      live: "https://app-store-link.com",
      featured: false,
      stats: { stars: 67, forks: 12 }
    },
    {
      id: 4,
      title: "DevShop E-commerce",
      description: "Full-stack e-commerce platform for developer tools and resources. Includes payment processing, inventory management, and admin dashboard.",
      category: "web",
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Vercel"],
      image: "/api/placeholder/600/400",
      github: "https://github.com",
      live: "https://devshop-demo.com",
      featured: false,
      stats: { stars: 156, forks: 34 }
    },
    {
      id: 5,
      title: "Smart Campus IoT",
      description: "IoT system for university campus monitoring including air quality, occupancy detection, and energy management using Raspberry Pi and sensors.",
      category: "iot",
      technologies: ["Python", "Raspberry Pi", "MQTT", "InfluxDB", "Grafana"],
      image: "/api/placeholder/600/400",
      github: "https://github.com",
      featured: false,
      stats: { stars: 45, forks: 8 }
    },
    {
      id: 6,
      title: "APIFlow Documentation",
      description: "Automated API documentation generator that creates beautiful, interactive docs from code comments and OpenAPI specifications.",
      category: "tool",
      technologies: ["Node.js", "Express", "Swagger", "React", "Docker"],
      image: "/api/placeholder/600/400",
      github: "https://github.com",
      live: "https://apiflow-docs.com",
      featured: false,
      stats: { stars: 78, forks: 19 }
    }
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "saas", label: "SaaS" },
    { key: "web", label: "Web Apps" },
    { key: "mobile", label: "Mobile" },
    { key: "tool", label: "Developer Tools" },
    { key: "iot", label: "IoT" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical skills and creative problem-solving through real-world applications.
              <br /> COMING SOON...
            </p>
          </div>

          {/* Featured Projects */}
          {/* <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 gradient-text-accent">🌟 Spotlight Projects</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="glass overflow-hidden hover:glow-primary transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-secondary opacity-20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-30">🚀</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork className="h-4 w-4" />
                          <span>{project.stats.forks}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      {project.live && (
                        <Button variant="hero" size="sm" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div> */}

          {/* Filter Tabs */}
          {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? "hero" : "glass"}
                size="sm"
                onClick={() => setActiveFilter(filter.key)}
                className="transition-all duration-300"
              >
                {filter.label}
              </Button>
            ))}
          </div> */}

          {/* All Projects Grid */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="glass overflow-hidden hover:glow-accent transition-all duration-300 group">
                <div className="aspect-video bg-gradient-secondary opacity-20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl opacity-30">
                      {project.category === "saas" && "💼"}
                      {project.category === "web" && "🌐"}
                      {project.category === "mobile" && "📱"}
                      {project.category === "tool" && "🔧"}
                      {project.category === "iot" && "🌐"}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      {project.live && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span>{project.stats.stars}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div> */}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interested in collaborating or want to see more of my work?
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://github.com/49M" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};