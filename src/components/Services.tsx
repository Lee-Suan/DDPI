import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Search, BookOpen, Lightbulb } from 'lucide-react';
import { Service } from '../types';

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  const icons = [
    <Briefcase className="text-white" size={20} />,
    <Search className="text-white" size={20} />,
    <BookOpen className="text-white" size={20} />,
    <Lightbulb className="text-white" size={20} />
  ];

  return (
    <div className="bg-black w-full h-full relative overflow-hidden">
      {/* Background Text Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-bold text-white/[0.03] select-none pointer-events-none font-display whitespace-nowrap z-0 tracking-tighter uppercase">
        Services
      </div>

      {/* Decorative Background Image */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-10 pointer-events-none z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
          alt="Network and research" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
      </div>

      <div className="mesh-gradient opacity-20 rotate-180"></div>
      
      <div className="section-padding relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-secondary font-bold tracking-[0.3em] text-xs mb-6 block uppercase font-display"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl mb-4 font-bold tracking-tighter break-keep text-gradient-vibrant"
          >
            주요 서비스
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-secondary mx-auto mt-6 md:mt-8 rounded-full"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: false, amount: 0.1 }}
              className="group"
            >
              <div className="h-full glass-card p-6 md:p-7 flex flex-col hover:border-secondary/50 transition-all duration-500">
                <h3 className="text-xl md:text-2xl mb-4 group-hover:text-secondary transition-colors font-bold text-gradient-secondary leading-tight flex items-center gap-3">
                  <div className="bg-secondary/10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xl group-hover:bg-secondary group-hover:shadow-[0_0_20px_rgba(74,222,128,0.6)] transition-all duration-500">
                    {React.cloneElement(icons[index % icons.length] as React.ReactElement, { size: 20, className: "text-secondary group-hover:text-black transition-colors" })}
                  </div>
                  {service.title}
                </h3>
                <ul className="space-y-3 text-sm md:text-base mt-auto">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-slate-200 font-light group-hover:text-white transition-colors">
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
