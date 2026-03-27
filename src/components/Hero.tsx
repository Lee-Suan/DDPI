import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  subSlogan: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ subSlogan, description }) => {
  return (
    <div className="relative w-full h-full flex items-center bg-black">
      {/* Mesh Gradient Background */}
      <div className="mesh-gradient opacity-60"></div>
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none bg-grid-pattern"></div>

      <div className="section-padding relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mt-8 md:mt-12"
          >
            <h1 className="flex flex-col gap-6 mb-8">
              <span className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-gradient-vibrant drop-shadow-2xl whitespace-nowrap">
                {subSlogan}
              </span>
            </h1>

            <div className="mb-10 space-y-6 max-w-3xl mx-auto">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 0] 
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  opacity: {
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  },
                  scale: { duration: 0.3 }
                }}
                className="text-xl md:text-2xl lg:text-3xl text-white font-light tracking-tight break-keep leading-relaxed cursor-default"
              >
                {description.split('\n')[0]}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="text-base md:text-lg text-slate-200 leading-relaxed font-light whitespace-pre-line break-keep max-w-2xl mx-auto"
              >
                {description.split('\n').slice(1).join('\n')}
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-6 justify-center mt-20"
            >
              <a href="#services" className="btn-primary flex items-center gap-3 group">
                <span>주요서비스</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-outline">
                협업 문의
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-[15%] left-[10%] w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 60, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[20%] right-[15%] w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]"
        />
        
        {/* Animated Lines/Shapes */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M -100 500 Q 400 200 900 600 T 1900 300"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4ADE80" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
