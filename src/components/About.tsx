import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Map, Zap, Lightbulb } from 'lucide-react';

const AboutIntroduction = () => {
  return (
    <div className="section-padding relative z-10">
      {/* Company Introduction */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.1 }}
          className="lg:w-1/2 relative"
        >
          <div className="relative group">
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=1000&q=80" 
                alt="세련된 첨단 도시 경관" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-secondary/20"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-secondary/20 rounded-tl-[3rem] -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-secondary/20 rounded-br-[3rem] -z-10"></div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-black/80 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl hidden md:block shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary">
                  <Zap size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">Data Strategy</div>
                  <div className="text-white font-bold text-lg">DDPI Research</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full -z-20 blur-[100px]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.1 }}
          className="lg:w-1/2"
        >
          <span className="text-secondary font-bold tracking-[0.3em] text-xs mb-6 block uppercase font-display">Company Introduction</span>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-tighter break-keep text-gradient-vibrant">회사 소개</h2>
          <h3 className="text-xl md:text-2xl mb-4 font-light text-slate-100 leading-tight break-keep">
            데이터로 정책을 설계하고, <br /><span className="text-gradient-vibrant font-bold">지역의 미래</span>를 연구합니다.
          </h3>
          
          <div className="space-y-6 text-slate-200 text-base md:text-lg font-light leading-relaxed break-keep">
            <p className="font-medium text-white text-base md:text-lg">
              대경데이터정책연구원(DDPI)은 데이터 분석과 정책 연구를 기반으로 지역의 지속가능한 발전 전략을 제시하는 데이터 기반 정책 연구·컨설팅 기관입니다.
            </p>
            <p>
              오늘날 지역 정책은 직관이나 경험만으로는 충분하지 않으며, 다양한 분야에서 객관적인 데이터 분석과 정책적 통찰이 결합된 전략이 필요합니다.
            </p>
            <p>
              대경데이터정책연구원은 관광, 농업, 지역산업 융합 연구와 빅데이터 분석을 통해 지방자치단체와 공공기관이 실제로 활용할 수 있는 실행 중심 정책 솔루션을 제공합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AboutMission = () => {
  return (
    <div className="section-padding relative z-10">
      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          className="glass-card p-8 md:p-10 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-white">
            <Target size={120} />
          </div>
          <span className="text-secondary font-bold text-xs tracking-[0.3em] mb-6 block uppercase">01 / Mission</span>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 break-keep text-gradient-light-violet">미션</h3>
          <p className="text-xl text-white font-medium mb-3 break-keep leading-tight">데이터로 지역 정책의 해답을 찾다</p>
          <p className="text-slate-200 text-base leading-relaxed font-light break-keep">
            대경데이터정책연구원은 데이터 분석과 정책 연구를 통해 지역의 지속가능한 발전 전략을 제시하는 정책 연구기관입니다. 관광, 농업, 지역산업 등 다양한 분야에서 객관적인 데이터 분석과 학술적 연구를 기반으로 지방자치단체와 공공기관이 활용할 수 있는 실행 가능한 정책 솔루션을 제공합니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 md:p-10 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-white">
            <Eye size={120} />
          </div>
          <span className="text-blue-400 font-bold text-xs tracking-[0.3em] mb-6 block uppercase">02 / Vision</span>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 break-keep text-gradient-light-violet">비전</h3>
          <p className="text-xl text-white font-medium mb-3 break-keep leading-tight">데이터 기반 지역 정책 연구의 선도 기관</p>
          <p className="text-slate-200 text-base leading-relaxed font-light break-keep">
            대경데이터정책연구원은 데이터 · 관광 · 농업 융합 연구를 선도하는 지역 정책 연구기관으로 성장하는 것을 목표로 합니다. 특히 대구·경북 지역을 중심으로 지역 특화 산업과 정책 전략을 연구하여 지역 혁신과 지속가능한 발전을 이끄는 정책 파트너가 되고자 합니다.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const AboutValues = () => {
  const coreValues = [
    {
      icon: <ShieldCheck size={20} />,
      title: "데이터 기반",
      description: "객관적인 데이터 분석과 통계적 근거를 기반으로 신뢰할 수 있는 정책 연구와 전략을 제시합니다."
    },
    {
      icon: <Map size={20} />,
      title: "지역 중심",
      description: "지역의 특성과 현장을 이해하는 연구를 통해 대구·경북을 비롯한 지역 발전에 기여합니다."
    },
    {
      icon: <Zap size={20} />,
      title: "융합 연구",
      description: "데이터 기반 관광, 농업, 지역산업을 연결하는 융합 연구를 통해 새로운 정책 모델을 개발합니다."
    },
    {
      icon: <Lightbulb size={20} />,
      title: "실행 중심",
      description: "학술 연구에 머무르지 않고 현장에서 활용 가능한 실질적인 정책 대안을 제시합니다."
    }
  ];

  return (
    <div className="section-padding relative z-10">
      {/* Core Values */}
      <div>
        <div className="text-center mb-4 md:mb-6">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary font-bold tracking-[0.3em] text-xs mb-4 block uppercase"
          >
            03 / Core Values
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter break-keep text-gradient-light-violet"
          >
            핵심 가치
          </motion.h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="glass-card p-5 md:p-6 hover:bg-white/[0.1] transition-all group"
            >
              <h4 className="text-white font-bold mb-3 text-xl md:text-2xl whitespace-nowrap group-hover:text-secondary transition-colors flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 group-hover:bg-secondary group-hover:text-black transition-all duration-500 shadow-xl">
                  {React.cloneElement(value.icon as React.ReactElement, { size: 20 })}
                </div>
                {value.title}
              </h4>
              <p className="text-slate-200 text-base leading-relaxed font-light break-keep">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-black w-full h-full border-y border-white/5 relative">
      {/* Background Text Overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-[18vw] font-bold text-white/[0.02] select-none pointer-events-none font-display whitespace-nowrap z-0 tracking-tighter">
        DATA POLICY
      </div>
      <AboutIntroduction />
    </div>
  );
};

export { AboutIntroduction, AboutMission, AboutValues };
export default About;
