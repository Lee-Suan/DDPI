import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  subSlogan: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ subSlogan, description }) => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
          alt="Abstract Data"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
      </div>

      <div className="section-padding relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mt-12 md:mt-20"
          >
            <h1 className="flex flex-col gap-4 mb-10">
              <span className="text-2xl md:text-4xl lg:text-5xl text-white font-bold break-keep leading-tight">
                {subSlogan}
              </span>
            </h1>

            <div className="mb-24 space-y-6 max-w-3xl mx-auto">
              <motion.p 
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-base md:text-xl lg:text-2xl text-white font-medium tracking-wide break-keep cursor-default"
              >
                {description.split('\n')[0]}
              </motion.p>
              <p className="text-base md:text-lg text-slate-200 leading-relaxed font-light whitespace-pre-line break-keep">
                {description.split('\n').slice(1).join('\n')}
              </p>
            </div>

            <div className="flex flex-wrap gap-6 justify-center mt-12">
              <a href="#services" className="btn-primary flex items-center gap-2 px-10 py-4 text-sm">
                서비스 탐색 <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-outline px-10 py-4 text-sm">
                문의
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[200px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-blue-500/5 rounded-full blur-[250px]"
        />
        
        {/* Floating particles */}
        <div className="absolute top-[20%] right-[15%] w-2 h-2 bg-secondary/40 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-[30%] left-[20%] w-3 h-3 bg-white/30 rounded-full blur-sm animate-pulse delay-1000"></div>
        <div className="absolute top-[60%] left-[40%] w-1.5 h-1.5 bg-secondary/30 rounded-full blur-sm animate-pulse delay-500"></div>
        <div className="absolute top-[40%] right-[30%] w-1 h-1 bg-white/20 rounded-full blur-sm animate-pulse delay-700"></div>
      </div>
    </section>
  );
};

export default Hero;
