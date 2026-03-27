import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  email: string;
  phone: string;
  address: string;
}

const Contact: React.FC<ContactProps> = ({ email, phone, address }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
        setFormData({ name: '', email: '', organization: '', message: '' });
      } else {
        throw new Error('전송 실패');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black w-full h-full relative">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="section-padding relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-secondary font-bold tracking-[0.3em] text-xs mb-6 block uppercase font-display"
          >
            Get in Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl mb-4 font-bold tracking-tighter break-keep text-gradient-vibrant"
          >
            문의하기
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-secondary mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 flex flex-col"
          >
            <div className="glass-card p-6 md:p-8 flex-1 flex flex-col">
              <h3 className="text-xl mb-8 font-bold text-gradient-secondary">연락처</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Phone size={18} />
                  </div>
                  <p className="text-lg font-medium text-white">{phone}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Mail size={18} />
                  </div>
                  <p className="text-lg font-medium text-white">{email}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <MapPin size={18} />
                  </div>
                  <p className="text-lg font-medium text-white break-keep">{address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-2/3 flex flex-col"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-10 flex-1 flex flex-col">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 mb-1 uppercase tracking-[0.2em]">성함</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-secondary transition-all placeholder:text-slate-500"
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 mb-1 uppercase tracking-[0.2em]">기관명</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-secondary transition-all placeholder:text-slate-500"
                    placeholder="OO시청, OO연구소 등"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  />
                </div>
              </div>
              <div className="mb-4 md:mb-6 space-y-1.5">
                <label className="block text-xs font-bold text-slate-300 mb-1 uppercase tracking-[0.2em]">이메일</label>
                <input
                  type="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-secondary transition-all placeholder:text-slate-500"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="mb-6 md:mb-8 flex-1 flex flex-col space-y-1.5">
                <label className="block text-xs font-bold text-slate-300 mb-1 uppercase tracking-[0.2em]">문의 내용</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-secondary transition-all resize-none flex-1 break-keep placeholder:text-slate-500"
                  placeholder="문의하실 내용을 상세히 적어주세요"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-secondary text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:shadow-[0_0_40px_rgba(74,222,128,0.4)] transition-all duration-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? '전송 중...' : '문의 메시지 전송'} <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
