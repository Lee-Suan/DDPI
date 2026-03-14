import React from 'react';

interface FooterProps {
  siteName: string;
  representative: string;
}

const Footer: React.FC<FooterProps> = ({ siteName, representative }) => {
  return (
    <footer className="bg-black text-white pt-4 pb-12 md:pb-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-2">
          <div className="max-w-xs">
            <img 
              src="/logo.png" 
              alt={siteName} 
              className="h-10 md:h-12 w-auto mb-2 object-contain"
              style={{ imageRendering: 'auto' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('footer-logo-fallback');
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <span id="footer-logo-fallback" className="hidden font-bold text-xs tracking-tight text-white block mb-1 font-display">
              {siteName}
            </span>
            <p className="text-slate-300 text-xs font-light leading-tight break-keep">
              데이터 기반의 과학적 연구와 정책 설계를 통해 지역 사회의 혁신적인 미래를 만들어가는 파트너입니다.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-display">Navigation</h4>
            <div className="flex flex-row flex-wrap gap-x-6 gap-y-2 text-xs text-slate-300 font-light">
              <a href="#home" className="hover:text-secondary transition-colors">HOME</a>
              <a href="#about" className="hover:text-secondary transition-colors">ABOUT</a>
              <a href="#representative" className="hover:text-secondary transition-colors">CEO</a>
              <a href="#services" className="hover:text-secondary transition-colors">SERVICES</a>
              <a href="#contact" className="hover:text-secondary transition-colors">CONTACT</a>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-white/5 flex justify-center items-center text-sm text-slate-400 font-medium tracking-tight font-display uppercase">
          <p>COPYRIGHT 2026 Daegyeong Data Policy Institute. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
