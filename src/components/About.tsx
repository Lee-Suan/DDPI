import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Map, Zap, Lightbulb } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: <ShieldCheck size={20} />,
      title: "데이터 기반 정책 연구",
      description: "객관적인 데이터 분석과 통계적 근거를 기반으로 신뢰할 수 있는 정책 연구와 전략을 제시합니다."
    },
    {
      icon: <Map size={20} />,
      title: "지역 중심 연구",
      description: "지역의 특성과 현장을 이해하는 연구를 통해 대구·경북을 비롯한 지역 발전에 기여합니다."
    },
    {
      icon: <Zap size={20} />,
      title: "융합 연구",
      description: "데이터 기반 관광, 농업, 지역산업을 연결하는 융합 연구를 통해 새로운 정책 모델을 개발합니다."
    },
    {
      icon: <Lightbulb size={20} />,
      title: "실행 중심 정책",
      description: "학술 연구에 머무르지 않고 현장에서 활용 가능한 실질적인 정책 대안을 제시합니다."
    }
  ];

  return (
    <section id="about" className="bg-black overflow-hidden border-y border-white/5 relative scroll-mt-16">
      {/* Background Text Overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-[15vw] font-bold text-white/[0.02] select-none pointer-events-none font-display whitespace-nowrap z-0">
        DATA POLICY
      </div>

      <div className="section-padding relative z-10">
        {/* Company Introduction */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative lg:sticky lg:top-24"
          >
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 relative">
                <img 
                  src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=1000&q=80" 
                  alt="세련된 첨단 도시 경관" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-secondary/10"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-secondary/30 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-secondary/30 rounded-br-3xl -z-10"></div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                    <Zap size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Data Strategy</div>
                    <div className="text-white font-bold text-sm">DDPI Research</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full -z-20 blur-[80px]"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-secondary font-bold tracking-widest text-sm mb-4 block font-display">Company Introduction</span>
            <h2 className="text-2xl md:text-3xl mb-2 font-bold text-white break-keep">회사 소개</h2>
            <h3 className="text-xl md:text-2xl mb-8 font-light text-slate-200 leading-tight break-keep">
              데이터로 정책을 설계하고, <br /><span className="text-white font-bold">지역의 미래</span>를 연구합니다.
            </h3>
            
            <div className="space-y-6 text-slate-300 text-sm md:text-base font-light leading-relaxed break-keep">
              <p className="font-medium text-white">
                대경데이터정책연구원(DDPI)은 데이터 분석과 정책 연구를 기반으로 지역의 지속가능한 발전 전략을 제시하는 데이터 기반 정책 연구·컨설팅 기관입니다.
              </p>
              <p>
                오늘날 지역 정책은 직관이나 경험만으로는 충분하지 않으며, 다양한 분야에서 객관적인 데이터 분석과 정책적 통찰이 결합된 전략이 필요합니다.
              </p>
              <p>
                대경데이터정책연구원은 관광, 농업, 지역산업 융합 연구와 빅데이터 분석을 통해 지방자치단체와 공공기관이 실제로 활용할 수 있는 실행 중심 정책 솔루션을 제공합니다.
              </p>
              <p>
                현장 경험과 학술적 전문성을 바탕으로 지역사회의 지속가능한 성장을 함께 모색하는 정책 파트너를 지향합니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={100} />
            </div>
            <span className="text-secondary font-bold text-sm tracking-widest mb-6 block">01</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 break-keep">미션</h3>
            <p className="text-xl text-secondary font-medium mb-8 break-keep">데이터로 지역 정책의 해답을 찾다</p>
            <p className="text-slate-200 text-base md:text-lg leading-relaxed font-light break-keep">
              대경데이터정책연구원은 데이터 분석과 정책 연구를 통해 지역의 지속가능한 발전 전략을 제시하는 정책 연구기관입니다. 관광, 농업, 지역산업 등 다양한 분야에서 객관적인 데이터 분석과 학술적 연구를 기반으로 지방자치단체와 공공기관이 활용할 수 있는 실행 가능한 정책 솔루션을 제공합니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-10 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Eye size={100} />
            </div>
            <span className="text-secondary font-bold text-sm tracking-widest mb-6 block">02</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 break-keep">비전</h3>
            <p className="text-xl text-secondary font-medium mb-8 break-keep">데이터 기반 지역 정책 연구의 선도 기관</p>
            <p className="text-slate-200 text-base md:text-lg leading-relaxed font-light break-keep">
              대경데이터정책연구원은 데이터 · 관광 · 농업 융합 연구를 선도하는 대한민국 대표 지역 정책 연구기관으로 성장하는 것을 목표로 합니다. 특히 대구·경북 지역을 중심으로 지역 특화 산업과 정책 전략을 연구하여 지역 혁신과 지속가능한 발전을 이끄는 정책 파트너가 되고자 합니다.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-12">
            <span className="text-secondary font-bold tracking-widest text-sm mb-2 block font-display">03</span>
            <h2 className="text-lg md:text-2xl font-bold text-white break-keep">핵심 가치</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 border border-white/20 p-6 rounded-2xl hover:border-accent-green/50 hover:bg-accent-green/10 transition-all group"
              >
                <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 group-hover:bg-accent-green/20 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-white font-bold mb-3 text-base break-keep">{value.title}</h4>
                <p className="text-slate-100 text-sm leading-relaxed font-light break-keep">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
