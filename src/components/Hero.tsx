import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  slogan: string;
  subSlogan: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ slogan, subSlogan, description }) => {
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
            className="max-w-4xl mt-20 md:mt-32"
          >
            <h1 className="flex flex-col gap-4 mb-10">
              <span className="text-2xl md:text-4xl lg:text-5xl text-white font-bold break-keep leading-tight">
                {subSlogan}
              </span>
              <span className="text-secondary font-display tracking-widest text-base md:text-lg lg:text-xl font-bold uppercase">
                {slogan}
              </span>
            </h1>

            <div className="mb-10 space-y-4 max-w-2xl mx-auto">
              <motion.p 
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="text-lg md:text-xl lg:text-2xl text-white font-medium tracking-wide break-keep"
              >
                {description.split('\n')[0]}
              </motion.p>
              <p className="text-base md:text-lg text-slate-200 leading-relaxed font-light whitespace-pre-line break-keep">
                {description.split('\n').slice(1).join('\n')}
              </p>
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
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
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;
