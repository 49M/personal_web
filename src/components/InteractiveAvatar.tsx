import { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const chatBubbles = [
  "Hello! I'm passionate about SaaS development 🚀",
  "Currently building innovative software solutions 💻",
  "Love working with React and modern tech stacks ⚡",
  "Always learning and growing in the startup space 📈",
  "Let's build something amazing together! 🌟"
];

export const InteractiveAvatar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentBubble, setCurrentBubble] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (avatarRef.current) {
        const rect = avatarRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePosition({
          x: (e.clientX - centerX) / 10,
          y: (e.clientY - centerY) / 10
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 3000);
      setCurrentBubble((prev) => (prev + 1) % chatBubbles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* Chat Bubble */}
      <div className={`absolute -top-20 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
        showBubble ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="glass px-4 py-3 rounded-2xl relative max-w-xs">
          <p className="text-sm text-foreground">{chatBubbles[currentBubble]}</p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-border/20"></div>
          </div>
        </div>
      </div>

      {/* Avatar with Eyes */}
      <div ref={avatarRef} className="relative group">
        <Avatar className="w-32 h-32 ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300 hover:scale-105">
          <AvatarImage src="/placeholder.svg" alt="Profile" className="object-cover" />
          <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl font-bold">
            CS
          </AvatarFallback>
        </Avatar>
        
        {/* Eyes */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex space-x-4">
            {/* Left Eye */}
            <div className="w-3 h-3 bg-background rounded-full relative">
              <div 
                className="w-1.5 h-1.5 bg-foreground rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
                style={{
                  transform: `translate(${Math.max(-3, Math.min(3, mousePosition.x))}px, ${Math.max(-3, Math.min(3, mousePosition.y))}px)`
                }}
              />
            </div>
            {/* Right Eye */}
            <div className="w-3 h-3 bg-background rounded-full relative">
              <div 
                className="w-1.5 h-1.5 bg-foreground rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
                style={{
                  transform: `translate(${Math.max(-3, Math.min(3, mousePosition.x))}px, ${Math.max(-3, Math.min(3, mousePosition.y))}px)`
                }}
              />
            </div>
          </div>
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-full glow-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};