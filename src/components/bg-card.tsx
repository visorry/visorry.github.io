import React from 'react';
import { useTheme } from 'next-themes';

interface ResponsiveGridBackgroundProps {
  children: React.ReactNode;
}

const ResponsiveGridBackground: React.FC<ResponsiveGridBackgroundProps> = ({ children }) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className={`
      relative w-full min-h-screen p-4 transition-colors duration-300
      ${resolvedTheme === 'dark' 
        ? 'bg-zinc-900/70 text-white' 
        : 'bg-white/70 text-black'}
    `}>
      <div className="absolute inset-0 backdrop-blur-sm" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ResponsiveGridBackground;
