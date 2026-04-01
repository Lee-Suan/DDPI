import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';

const Representative = () => {
  const education = [
    "관광경영학 박사 · 영어영문학 석사 · 통계학 학사",
    "빅데이터 분석가",
    "치유농업사 2급(농촌진흥청)",
    "MCP/MCSE(마이크로소프트)"
  ];

  const experience = [
    "(현) 대경데이터정책연구원 대표",
    "(현) 영남대학교 객원교수",
    "경북연구원 · 대구정책연구원 초빙연구원",
    "더아이엠씨 데이터사이언스연구소 소장",
    "영남대 교비지원포스트닥",
    "(재)대구경북연구원 연구원·객원연구위원",
    "(현) 경상북도 주민참여예산위원회 위원",
    "(현) 경산시 주민참여예산위원회 위원",
    "대구시 시민공익활동지원위원회 위원",
    "대구시 수성구 정책자문위원회 위원",
    "세계트리플헬릭스미래전략학회 총무·부회장",
    "경상북도 경북관광포럼위원"
  ];

  return (
    <div className="bg-black w-full h-full relative border-t border-white/5">
      <div className="section-padding relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 items-start lg:pl-4">
          {/* Left Side: Image & Basic Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.1 }}
            className="lg:w-[32%] w-full"
          >
            <div className="relative group">
              <div className="aspect-[4/5] max-h-[70vh] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 relative shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/nature-forest-green/800/1000" 
                  alt="대표 이수안" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full flex flex-col items-center text-center px-4">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 break-keep text-white">
                    <span className="text-sm md:text-base font-normal text-slate-300 mr-2">대표</span>
                    <span className="text-white">이수안</span>
                  </h2>
                  <div className="bg-white/20 backdrop-blur-3xl border border-white/20 px-8 py-3 rounded-full shadow-2xl w-fit max-w-[98%]">
                    <p className="text-white font-bold text-[11px] sm:text-xs md:text-sm tracking-tight whitespace-nowrap">관광 · 빅데이터 전문가, 치유농업사</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-secondary/20 rounded-tr-[3rem] -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-secondary/20 rounded-bl-[3rem] -z-10"></div>
            </div>

            <div className="mt-6 space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="text-white font-bold text-base mb-6 flex items-center gap-3">
                  <div className="p-2 bg-secondary/20 rounded-lg text-secondary">
                    <GraduationCap size={20} />
                  </div>
                  학력 및 자격
                </h4>
                <ul className="space-y-3 break-keep">
                  {education.map((item, i) => (
                    <li key={i} className="text-sm text-slate-200 flex items-start gap-3 group">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0 group-hover:scale-125 transition-transform"></div>
                      <span className="group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Detailed Bio & Experience */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.1 }}
            className="lg:w-[68%] w-full"
          >
            <span className="text-secondary font-bold tracking-[0.3em] text-xs mb-6 block uppercase font-display">CEO Profile</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-vibrant tracking-tighter">대표 소개</h2>
            
            <div className="mb-4">
              <p className="text-2xl md:text-3xl font-light text-slate-100 leading-relaxed mb-4 border-l-8 border-secondary pl-8 py-2">
                관광·농업·데이터를 잇는 <br className="md:hidden" />
                <span className="text-gradient-vibrant font-bold">융합 정책 연구자</span>
              </p>
              
              <div className="space-y-4 text-slate-200 text-base md:text-lg font-light leading-relaxed break-keep">
                <p>
                  관광경영학 박사로서 지역 정책 연구와 데이터 분석 현장을 누벼온 정책 연구자입니다.
                </p>
                <p>
                  대구광역시·경상북도가 공동 출연한 (재)대구경북연구원에서의 연구 경험을 바탕으로, 관광 등 다양한 분야를 아우르는 데이터 기반 융합 연구를 수행하고 있습니다.
                </p>
                <p>
                  SSCI·KCI급 학술지 논문 게재를 비롯해 광역·기초지자체 관광개발, 빅데이터 분석 등 약 30건의 연구과제 및 용역을 수행하며 실증적 정책 연구 분야에서 전문성을 축적해왔습니다.
                </p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card p-6 md:p-10 transition-all duration-500"
            >
              <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-4">
                <div className="p-3 bg-secondary/20 rounded-2xl text-secondary">
                  <Briefcase size={24} />
                </div>
                주요 경력
              </h4>
              <div className="grid md:grid-cols-2 gap-x-4 lg:gap-x-8 gap-y-5 break-keep">
                <div className="space-y-4">
                  {experience.slice(0, 6).map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <CheckCircle2 size={18} className="text-secondary mt-1 shrink-0 opacity-30 group-hover:opacity-100 transition-all duration-300" />
                      <span className="text-sm md:text-base text-slate-200 font-light group-hover:text-white transition-colors leading-snug whitespace-nowrap">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {experience.slice(6).map((item, i) => (
                    <div key={i + 6} className="flex items-start gap-4 group">
                      <CheckCircle2 size={18} className="text-secondary mt-1 shrink-0 opacity-30 group-hover:opacity-100 transition-all duration-300" />
                      <span className="text-sm md:text-base text-slate-200 font-light group-hover:text-white transition-colors leading-snug whitespace-nowrap">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Representative;
