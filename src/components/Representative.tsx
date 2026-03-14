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
    "대경데이터정책연구원 대표",
    "영남대 식품경제외식학과 객원교수",
    "경북연구원 · 대구정책연구원 초빙연구원",
    "영남대 교비지원포스트닥",
    "(재)대구경북연구원 연구원 및 객원연구위원",
    "더아이엠씨 데이터사이언스연구소 소장",
    "경상북도·경산시 주민참여예산위원회 위원",
    "대구시 수성구 정책자문위원회 위원",
    "대구시 시민공익활동지원위원회 위원",
    "경상북도 경북관광포럼위원",
    "세계트리플헬릭스미래전략학회 총무 ·부회장",
    "대구전시컨벤션센터(EXCO) 전시팀 근무"
  ];

  return (
    <section id="representative" className="bg-black relative overflow-hidden border-t border-white/5 scroll-mt-24">
      <div className="section-padding relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Image & Basic Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 w-full"
          >
            <div className="relative group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 relative">
                <img 
                  src="https://picsum.photos/seed/nature-forest-green/800/1000" 
                  alt="대표 이수안" 
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl font-bold text-white mb-2 break-keep"><span className="text-sm font-light opacity-70 mr-1">대표</span> 이수안</h2>
                  <div className="inline-block bg-black/50 backdrop-blur-xl border border-white/20 px-4 py-1.5 rounded-full shadow-2xl">
                    <p className="text-white font-semibold text-xs md:text-sm tracking-wide break-keep">관광 · 빅데이터 전문가, 치유농업사</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-secondary/30 rounded-tr-3xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-secondary/30 rounded-bl-3xl -z-10"></div>
            </div>

            <div className="mt-10 space-y-6">
              <div>
                <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                  <GraduationCap size={18} className="text-secondary" />
                  학력 및 자격
                </h4>
                <ul className="space-y-2 break-keep">
                  {education.map((item, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Detailed Bio & Experience */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 w-full"
          >
            <span className="text-secondary font-bold tracking-widest text-sm mb-4 block font-display">CEO Profile/Introduction</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">대표 소개</h2>
            
            <div className="mb-10">
              <p className="text-xl md:text-2xl font-light text-slate-200 leading-relaxed italic mb-8 border-l-4 border-secondary pl-6">
                관광·농업·데이터를 잇는 <br className="md:hidden" />
                <span className="text-white font-bold">융합 정책 연구자</span>
              </p>
              
              <div className="space-y-6 text-slate-200 text-base md:text-lg leading-relaxed font-light break-keep">
                <p>
                  관광경영학 박사로서 지역 정책 연구와 데이터 분석 현장을 누벼온 정책 연구자입니다.
                </p>
                <p>
                  대구시·경상북도가 공동 출연한 (재)대구경북연구원에서의 연구 경험을 바탕으로, 관광 등 다양한 분야를 아우르는 데이터 기반 융합 연구를 수행하고 있습니다.
                </p>
                <p>
                  SSCI·KCI급 학술지 논문 게재를 비롯해 광역·기초지자체 관광개발, 빅데이터 분석 등 약 30건의 연구과제 및 용역을 수행하며 실증적 정책 연구 분야에서 전문성을 축적해왔습니다.
                </p>
                <p>
                  현재 영남대학교 객원교수로 연구와 교육을 병행하며, 치유농업사 자격을 기반으로 치유·농업·관광을 연결하는 새로운 지역 산업 모델을 연구하고 있습니다.
                </p>
              </div>
            </div>

            <div className="glass-card p-8 md:p-10">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Briefcase size={20} className="text-secondary" />
                주요 경력
              </h4>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 break-keep">
                {experience.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <CheckCircle2 size={14} className="text-secondary mt-1 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="text-xs md:text-sm text-slate-300 font-light group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Representative;
