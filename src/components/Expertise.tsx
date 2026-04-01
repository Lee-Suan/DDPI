import React from 'react';
import { motion } from 'motion/react';
import { FileText, BarChart3, GraduationCap, Users } from 'lucide-react';

const Expertise = () => {
  const areas = [
    {
      icon: <FileText size={24} />,
      title: "지역산업 연구",
      description: "지역 특성에 맞는 맞춤형 정책 수립과 관광·농업 분야의 심도 있는 연구를 수행합니다.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      color: "from-emerald-400 to-cyan-400",
      glow: "rgba(52,211,153,0.2)"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "빅데이터 분석",
      description: "복잡한 데이터를 유의미한 통찰로 전환하여 과학적인 의사결정을 지원합니다.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      color: "from-blue-400 to-indigo-500",
      glow: "rgba(99,102,241,0.2)"
    },
    {
      icon: <GraduationCap size={24} />,
      title: "빅데이터 교육",
      description: "대학 및 공공기관을 대상으로 실무 중심의 빅데이터 분석 및 활용 교육을 제공합니다.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      color: "from-purple-400 to-fuchsia-500",
      glow: "rgba(192,38,211,0.2)"
    }
  ];

  return (
    <div className="bg-black w-full h-full relative overflow-hidden">
      {/* Background Text Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-white/[0.03] select-none pointer-events-none font-display whitespace-nowrap z-0 tracking-tighter uppercase">
        Expertise
      </div>

      {/* Decorative Background Image */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
          alt="Data visualization" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent"></div>
      </div>

      {/* Background Mesh */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(74,222,128,0.05),transparent_70%)]"></div>
      </div>
      
      {/* Inter-sectional background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      
      <div className="section-padding relative z-10">
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-secondary font-bold tracking-[0.3em] text-xs mb-6 block uppercase font-display"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl mb-6 font-bold tracking-tighter break-keep text-gradient-vibrant"
          >
            전문 역량
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-secondary to-blue-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: false, amount: 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card group relative overflow-hidden flex flex-col"
            >
              {/* Image Header */}
              <div className="h-40 md:h-44 overflow-hidden relative">
                <img 
                  src={area.image} 
                  alt={area.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>

              <div className="p-5 md:p-6 relative">
                <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br ${area.color} opacity-5 rounded-full blur-3xl group-hover:opacity-20 transition-all duration-500`}></div>
                
                <h3 className={`text-xl md:text-2xl mb-3 font-bold transition-colors whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r ${area.color} flex items-center gap-3`}>
                  <div className={`p-2 bg-white/5 rounded-lg group-hover:bg-gradient-to-br ${area.color} group-hover:text-black transition-all duration-500 border border-white/10 shrink-0`}>
                    {React.cloneElement(area.icon as React.ReactElement, { size: 20 })}
                  </div>
                  {area.title}
                </h3>
                <p className="text-slate-200 leading-relaxed text-sm md:text-base font-light break-keep group-hover:text-white transition-colors">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
