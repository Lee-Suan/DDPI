import React from 'react';

interface FooterProps {
  siteName: string;
  representative: string;
}

const Footer: React.FC<FooterProps> = ({ siteName, representative }) => {
  return (
    <footer className="bg-black text-white pt-20 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="font-bold text-lg tracking-tighter text-gradient-vibrant block mb-4 font-display">
              {siteName}
            </span>
            <p className="text-slate-300 text-sm font-light leading-relaxed break-keep max-w-md mb-3">
              데이터 기반의 과학적 연구와 정책 설계를 통해 지역 사회의 혁신적인 미래를 만들어가는 파트너입니다. 대경데이터정책연구원은 지역의 지속가능한 성장을 위해 최선을 다하겠습니다.
            </p>
          </div>
          
          <div className="md:col-span-2 flex md:justify-end">
            <div className="md:text-right w-full">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary mb-8 font-display">Navigation</h4>
              <ul className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-200 font-light md:justify-end">
                <li><a href="#home" className="hover:text-secondary transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="hover:text-secondary transition-colors duration-300">About</a></li>
                <li><a href="#representative" className="hover:text-secondary transition-colors duration-300">Representative</a></li>
                <li><a href="#expertise" className="hover:text-secondary transition-colors duration-300">Expertise</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors duration-300">Services</a></li>
                <li><a href="#contact" className="hover:text-secondary transition-colors duration-300">Contact</a></li>
              </ul>
              <p className="text-[10px] md:text-[11px] text-slate-400 font-medium tracking-wider font-display uppercase opacity-80 mt-8 md:text-right">
                COPYRIGHT ⓒ 2026 DAEGYEONG DATA POLICY INSTITUTE. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
