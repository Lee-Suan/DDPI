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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  return (
    <section id="contact" className="bg-zinc-950 scroll-mt-16">
      <div className="section-padding">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold tracking-widest text-sm mb-2 block">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl mb-4 break-keep">문의</h2>
          <div className="w-12 h-1 bg-secondary mx-auto mt-2"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex flex-col"
          >
            <div className="glass-card p-8 flex-1 flex flex-col">
              <h3 className="text-lg mb-8 text-white font-bold">연락처 정보</h3>
              
              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0 border border-secondary/30">
                    <Mail className="text-secondary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 uppercase font-bold tracking-wider mb-1">이메일</p>
                    <a href={`mailto:${email}`} className="text-slate-200 font-medium hover:text-secondary transition-colors text-sm">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0 border border-secondary/30">
                    <Phone className="text-secondary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 uppercase font-bold tracking-wider mb-1">전화번호</p>
                    <a href={`tel:${phone}`} className="text-slate-200 font-medium hover:text-secondary transition-colors text-sm">
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0 border border-secondary/30">
                    <MapPin className="text-secondary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 uppercase font-bold tracking-wider mb-1">위치</p>
                    <p className="text-slate-200 font-medium text-sm">{address}</p>
                  </div>
                </div>
              </div>


            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 flex flex-col"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 flex-1 flex flex-col">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-2 uppercase tracking-wider">성함</label>
                  <input
                    type="text"
                    required
                    className="admin-input py-3"
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-2 uppercase tracking-wider">이메일 주소</label>
                  <input
                    type="email"
                    required
                    className="admin-input py-3"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-200 mb-2 uppercase tracking-wider">소속 기관/단체</label>
                <input
                  type="text"
                  className="admin-input py-3"
                  placeholder="OO시청, OO연구소 등"
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                />
              </div>
              <div className="mb-8 flex-1 flex flex-col">
                <label className="block text-xs font-bold text-slate-200 mb-2 uppercase tracking-wider">문의 내용</label>
                <textarea
                  required
                  rows={5}
                  className="admin-input py-3 resize-none flex-1 break-keep"
                  placeholder="문의하실 내용을 적어주세요"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                문의 보내기 <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
