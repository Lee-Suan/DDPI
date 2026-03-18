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
    <section id="services" className="bg-zinc-950 scroll-mt-16">
      <div className="section-padding">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold tracking-widest text-sm mb-2 block font-display">Our Services</span>
          <h2 className="text-3xl md:text-4xl mb-4 break-keep">주요 서비스</h2>
          <p className="text-slate-200 text-base font-light break-keep">전문성과 경험을 바탕으로 최상의 솔루션을 제공합니다.</p>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full glass-card p-8">
                <div className="bg-secondary w-10 h-10 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(74,222,128,0.3)] group-hover:bg-accent-green group-hover:shadow-[0_0_20px_rgba(74,222,128,0.5)] transition-all">
                  {icons[index % icons.length]}
                </div>
                <h3 className="text-lg mb-6 text-white group-hover:text-accent-green transition-colors font-bold">{service.title}</h3>
                <ul className="space-y-3 text-sm">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-200 font-light">
                      <div className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0 group-hover:bg-accent-green transition-colors"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
