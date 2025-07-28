import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex@example.com",
      href: "mailto:alex@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-primary"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? 
              I'm always open to interesting conversations and collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text-accent">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="glass"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="glass"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="glass"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    required
                    className="glass resize-none"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <Send className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 gradient-text-accent">Get in Touch</h3>
                <p className="text-muted-foreground mb-8">
                  I'm currently open to new opportunities and interesting projects. 
                  Whether you have a question, want to collaborate, or just want to say hi, 
                  I'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="glass p-4 hover:glow-accent transition-all duration-300 group">
                      <a 
                        href={info.href}
                        className="flex items-center space-x-4"
                      >
                        <div className="p-2 rounded-lg bg-gradient-secondary">
                          <info.icon className="h-5 w-5 text-secondary-foreground" />
                        </div>
                        <div>
                          <div className="font-medium group-hover:text-accent transition-colors">
                            {info.label}
                          </div>
                          <div className="text-muted-foreground">{info.value}</div>
                        </div>
                      </a>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-accent">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="glass"
                      size="icon"
                      asChild
                      className={`hover:scale-110 transition-all ${social.color}`}
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

              {/* Availability */}
              <Card className="glass p-6">
                <h4 className="text-lg font-semibold mb-3 gradient-text-accent">Current Availability</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm">Available for freelance projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm">Open to full-time opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm">Looking for mentorship in SaaS</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Ready to Build Something Amazing?</h3>
              <p className="text-muted-foreground mb-6">
                Let's turn your ideas into reality. I'm here to help bring your vision to life.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:alex@example.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Start a Conversation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};