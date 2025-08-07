import { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const chatBubbles = [
  "Shipping code daily 🚀",
  "React + TypeScript = ❤️",
  "Building SaaS products that scale ⚡",
  "Learning LangGraph and Vector DBs 📈",
  "Interested in Data Science and Deep Learning 🤖",
  "Let's build something together! 💻"
];

export const InteractiveAvatar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentBubble, setCurrentBubble] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (avatarRef.current) {
        const rect = avatarRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // More responsive eye movement with better range
        const maxDistance = 60;
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );
        
        if (distance < maxDistance * 3) {
          setMousePosition({
            x: Math.max(-6, Math.min(6, (e.clientX - centerX) / 8)),
            y: Math.max(-4, Math.min(4, (e.clientY - centerY) / 10))
          });
        }
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
    <div className="relative flex items-center justify-center px-[120px] select-none">
      {/* Chat Bubble */}
      <div className={`absolute left-[90%] transform -translate-x-1/2 transition-all duration-500 ${
        showBubble ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="glass px-4 py-3 rounded-2xl relative max-w-xs">
          <p className="text-sm text-foreground">{chatBubbles[currentBubble]}</p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-border/20"></div>
          </div>
        </div>
      </div>

      {/* Avatar with Detailed Eyes */}
      <div 
        ref={avatarRef} 
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Avatar className="w-32 h-32 ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300 hover:scale-105">
          <AvatarImage src="/lovable-uploads/95e61c09-d347-42bc-8111-e4779191aec3.png" alt="Profile" className="object-cover" />
          <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl font-bold">
            CS
          </AvatarFallback>
        </Avatar>
        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-full glow-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};