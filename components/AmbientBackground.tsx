import React from 'react';
import { AmbientColor } from '../types';

interface AmbientBackgroundProps {
  colors: AmbientColor;
}

export const AmbientBackground: React.FC<AmbientBackgroundProps> = ({ colors }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-white transition-colors duration-[2000ms]">
      {/* Gradient Mesh */}
      <div
        className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full blur-[120px] opacity-40 animate-float-slow transition-colors duration-[3000ms]"
        style={{ backgroundColor: colors.primary }}
      />

      <div
        className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[100px] opacity-30 animate-float-medium transition-colors duration-[3000ms]"
        style={{ backgroundColor: colors.secondary }}
      />

      <div
        className="absolute bottom-[-10%] left-[20%] w-[70%] h-[70%] rounded-full blur-[140px] opacity-20 animate-float-slow transition-colors duration-[3000ms]"
        style={{ backgroundColor: colors.accent }}
      />

      {/* Noise Overlay */}
      <div className="bg-grain" />
    </div>
  );
};
