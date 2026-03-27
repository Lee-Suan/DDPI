import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  siteName: string;
}

const Navbar: React.FC<NavbarProps> = ({ siteName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', href: '#home' },
    { name: '회사소개', href: '#about' },
    { name: '대표소개', href: '#representative' },
    { name: '전문역량', href: '#expertise' },
    { name: '주요서비스', href: '#services' },
    { name: '문의', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-secondary via-blue-500 to-secondary z-50 transition-all duration-300" style={{ width: `${scrollProgress}%` }}></div>
      
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <span className="font-bold text-base md:text-lg tracking-tighter text-white font-display group cursor-pointer">
            {siteName.split('').map((char, i) => (
              <span key={i} className="inline-block hover:text-secondary transition-colors duration-300 hover:-translate-y-1">{char}</span>
            ))}
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-base font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-secondary transition-all duration-300 font-display relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button className="text-white p-2 bg-white/5 rounded-lg border border-white/10" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-10 md:hidden"
          >
            <button className="absolute top-8 right-8 text-white p-2 bg-white/5 rounded-lg border border-white/10" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-secondary transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
