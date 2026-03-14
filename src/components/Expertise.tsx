import React from 'react';
import { motion } from 'motion/react';
import { FileText, BarChart3, GraduationCap, Users } from 'lucide-react';

const Expertise = () => {
  const areas = [
    {
      icon: <FileText className="text-secondary" size={24} />,
      title: "지역산업 연구",
      description: "지역 특성에 맞는 맞춤형 정책 수립과 관광·농업 분야의 심도 있는 연구를 수행합니다."
    },
    {
      icon: <BarChart3 className="text-secondary" size={24} />,
      title: "빅데이터 분석",
      description: "복잡한 데이터를 유의미한 통찰로 전환하여 과학적인 의사결정을 지원합니다."
    },
    {
      icon: <GraduationCap className="text-secondary" size={24} />,
      title: "빅데이터 교육",
      description: "대학 및 공공기관을 대상으로 실무 중심의 빅데이터 분석 및 활용 교육을 제공합니다."
    }
  ];

  return (
    <section className="bg-zinc-950 relative overflow-hidden">
      {/* Inter-sectional background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-secondary/[0.03] rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.02] hidden md:block"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/[0.02] hidden md:block"></div>

      <div className="section-padding relative z-10">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold tracking-widest text-sm mb-2 block font-display">Our Expertise</span>
          <h2 className="text-2xl md:text-3xl mb-4 break-keep">전문 역량</h2>
          <div className="w-12 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group"
            >
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl group-hover:bg-accent-green/20 transition-all">
                {area.icon}
              </div>
              <h3 className="text-lg mb-4 text-white group-hover:text-secondary transition-colors break-keep">{area.title}</h3>
              <p className="text-slate-200 leading-relaxed text-sm font-light break-keep">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
