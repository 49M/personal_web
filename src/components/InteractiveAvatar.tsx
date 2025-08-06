import { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const chatBubbles = [
  "Shipping code daily at stealth startup 🚀",
  "React + TypeScript = ❤️",
  "Building SaaS products that scale ⚡",
  "1000+ users and counting 📈",
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

      {/* Avatar with Detailed Eyes */}
      <div 
        ref={avatarRef} 
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Avatar className="w-32 h-32 ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300 hover:scale-105">
          <AvatarImage src="/src/assets/avatar-portrait.jpg" alt="Profile" className="object-cover" />
          <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl font-bold">
            CS
          </AvatarFallback>
        </Avatar>
        
        {/* Detailed Eyes */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex space-x-5" style={{ marginTop: '-8px' }}>
            {/* Left Eye */}
            <div className="relative">
              <div className="w-4 h-3 bg-white rounded-full relative shadow-sm border border-gray-200">
                {/* Iris */}
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* Pupil */}
                  <div 
                    className="w-1.5 h-1.5 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out"
                    style={{
                      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                    }}
                  />
                  {/* Light reflection */}
                  <div className="w-0.5 h-0.5 bg-white rounded-full absolute top-1 left-1" />
                </div>
                {/* Eyelid shadow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-gray-100/50 to-transparent rounded-t-full" />
              </div>
              {/* Eyelashes */}
              <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-4 h-1">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent rounded-full" />
              </div>
            </div>
            
            {/* Right Eye */}
            <div className="relative">
              <div className="w-4 h-3 bg-white rounded-full relative shadow-sm border border-gray-200">
                {/* Iris */}
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* Pupil */}
                  <div 
                    className="w-1.5 h-1.5 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out"
                    style={{
                      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                    }}
                  />
                  {/* Light reflection */}
                  <div className="w-0.5 h-0.5 bg-white rounded-full absolute top-1 left-1" />
                </div>
                {/* Eyelid shadow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-gray-100/50 to-transparent rounded-t-full" />
              </div>
              {/* Eyelashes */}
              <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-4 h-1">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-full glow-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};