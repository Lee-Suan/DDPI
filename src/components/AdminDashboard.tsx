import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Save, Layout, Palette, X, Upload, Globe, LayoutDashboard } from 'lucide-react';
import { SiteContent } from '../types';

interface AdminDashboardProps {
  content: SiteContent;
  onUpdate: (newContent: SiteContent) => void;
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ content, onUpdate, onClose }) => {
  const [activeTab, setActiveTab] = useState<'info' | 'theme'>('info');
  const [localContent, setLocalContent] = useState<SiteContent>(content);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalContent({
          ...localContent,
          siteInfo: {
            ...localContent.siteInfo,
            logoUrl: reader.result as string
          }
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(localContent)
      });
      if (res.ok) {
        onUpdate(localContent);
        alert('저장되었습니다.');
      } else {
        throw new Error('저장에 실패했습니다. 서버 설정을 확인해주세요.');
      }
    } catch (err) {
      console.error(err);
      alert('저장 중 오류가 발생했습니다. (정적 호스팅 환경에서는 저장이 지원되지 않을 수 있습니다.)');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6 lg:p-10">
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="bg-zinc-900 border border-white/10 w-full max-w-6xl h-full max-h-[850px] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl"
      >
        {/* Header */}
        <div className="px-6 md:px-8 py-4 md:py-6 border-b border-white/10 flex justify-between items-center bg-zinc-950/50 gap-4">
          <div className="flex items-center gap-3 md:gap-4 min-w-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
              <LayoutDashboard size={18} className="text-white md:hidden" />
              <LayoutDashboard size={20} className="text-white hidden md:block" />
            </div>
            <div className="min-w-0 pr-2">
              <h2 className="text-sm md:text-lg font-bold text-white break-keep truncate">관리자 대시보드</h2>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4 shrink-0">
            <button onClick={handleSave} className="bg-indigo-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold flex items-center gap-2 text-xs md:text-sm hover:bg-indigo-500 transition-all active:scale-95 shadow-lg shadow-indigo-500/20">
              <Save size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline">설정 저장</span><span className="sm:hidden">저장</span>
            </button>
            <button onClick={onClose} className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/5 hover:text-white transition-all shrink-0">
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* Sidebar / Navigation */}
          <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-white/10 p-4 lg:p-6 flex lg:flex-col gap-2 lg:gap-3 bg-zinc-950/30 overflow-x-auto lg:overflow-x-visible no-scrollbar">
            <button 
              onClick={() => setActiveTab('info')}
              className={`flex-1 lg:flex-none flex items-center justify-center lg:justify-start gap-2 lg:gap-3 px-4 lg:px-5 py-3 lg:py-4 rounded-xl lg:rounded-2xl text-xs md:text-sm transition-all duration-300 whitespace-nowrap ${activeTab === 'info' ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/10' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
            >
              <Globe size={16} /> <span className="break-keep">사이트 정보</span>
            </button>
            <button 
              onClick={() => setActiveTab('theme')}
              className={`flex-1 lg:flex-none flex items-center justify-center lg:justify-start gap-2 lg:gap-3 px-4 lg:px-5 py-3 lg:py-4 rounded-xl lg:rounded-2xl text-xs md:text-sm transition-all duration-300 whitespace-nowrap ${activeTab === 'theme' ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/10' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
            >
              <Palette size={16} /> <span className="break-keep">디자인 설정</span>
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-grid-pattern bg-[length:30px_30px]">
            <div className="max-w-3xl mx-auto">
              {activeTab === 'info' && (
                <motion.div 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-12"
                >
                  <section>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-1.5 h-6 bg-indigo-600 rounded-full"></div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em] break-keep">기본 브랜드 정보</h3>
                    </div>
                    <div className="grid gap-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs text-slate-300 uppercase font-bold px-1 tracking-wider">사이트 이름</label>
                          <input 
                            value={localContent.siteInfo.name} 
                            onChange={e => setLocalContent({...localContent, siteInfo: {...localContent.siteInfo, name: e.target.value}})}
                            className="admin-input py-4 px-5 rounded-2xl" 
                            placeholder="기관 명칭 입력"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs text-slate-300 uppercase font-bold px-1 tracking-wider">대표자 이름</label>
                          <input 
                            value={localContent.siteInfo.representative} 
                            onChange={e => setLocalContent({...localContent, siteInfo: {...localContent.siteInfo, representative: e.target.value}})}
                            className="admin-input py-4 px-5 rounded-2xl" 
                            placeholder="대표자 이름"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-slate-300 uppercase font-bold px-1 tracking-wider">메인 슬로건</label>
                        <input 
                          value={localContent.siteInfo.subSlogan} 
                          onChange={e => setLocalContent({...localContent, siteInfo: {...localContent.siteInfo, subSlogan: e.target.value}})}
                          className="admin-input py-4 px-5 rounded-2xl" 
                          placeholder="첫 화면에 표시될 핵심 문구"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-slate-300 uppercase font-bold px-1 tracking-wider">브랜드 상세 설명</label>
                        <textarea 
                          value={localContent.siteInfo.description} 
                          onChange={e => setLocalContent({...localContent, siteInfo: {...localContent.siteInfo, description: e.target.value}})}
                          className="admin-input h-40 resize-none py-5 px-5 rounded-2xl leading-relaxed" 
                          placeholder="기관의 비전과 가치를 설명해주세요."
                        />
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-1.5 h-6 bg-indigo-600 rounded-full"></div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em] break-keep">연락처 및 위치 정보</h3>
                    </div>
                    <div className="grid gap-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs text-slate-300 uppercase font-bold px-1 tracking-wider">이메일</label>
                          <input 
                            value={localContent.siteInfo.contactEmail} 
                            onChange={e => setLocalContent({...localContent, siteInfo: {...localContent.siteInfo, contactEmail: e.target.value}})}
                            className="admin-input py-4 px-5 rounded-2xl" 
                            placeholder="contact@email.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs text-slate-300 uppercase font-bold px-1 tracking-wider">전화번호</label>
                          <input 
                            value={localContent.siteInfo.contactPhone} 
                            onChange={e => setLocalContent({...localContent, siteInfo: {...localContent.siteInfo, contactPhone: e.target.value}})}
                            className="admin-input py-4 px-5 rounded-2xl" 
                            placeholder="053-000-0000"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-slate-300 uppercase font-bold px-1 tracking-wider">위치</label>
                        <input 
                          value={localContent.siteInfo.address} 
                          onChange={e => setLocalContent({...localContent, siteInfo: {...localContent.siteInfo, address: e.target.value}})}
                          className="admin-input py-4 px-5 rounded-2xl" 
                          placeholder="상세 주소 입력"
                        />
                      </div>
                    </div>
                  </section>
                </motion.div>
              )}

              {activeTab === 'theme' && (
                <motion.div 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-12"
                >
                  <section>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-1.5 h-6 bg-indigo-600 rounded-full"></div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em] break-keep">브랜드 아이덴티티</h3>
                    </div>
                    <div className="grid gap-8">
                      <div className="glass-card p-10 border-white/5 rounded-[2rem]">
                        <label className="text-xs text-slate-300 uppercase font-bold mb-6 block tracking-wider">포인트 컬러 설정</label>
                        <div className="flex gap-8 items-center">
                          <div className="relative group">
                            <input 
                              type="color" 
                              value={localContent.theme.accent}
                              onChange={e => setLocalContent({...localContent, theme: {...localContent.theme, accent: e.target.value}})}
                              className="w-20 h-20 rounded-3xl overflow-hidden border-none cursor-pointer shadow-2xl"
                            />
                            <div className="absolute inset-0 rounded-3xl border-2 border-white/20 pointer-events-none group-hover:border-white/40 transition-colors"></div>
                          </div>
                          <div className="flex-1 space-y-3">
                            <input 
                              value={localContent.theme.accent}
                              onChange={e => setLocalContent({...localContent, theme: {...localContent.theme, accent: e.target.value}})}
                              className="admin-input w-full font-mono text-center py-4 rounded-2xl text-lg"
                              placeholder="#000000"
                            />
                            <p className="text-[10px] text-slate-500 px-1 break-keep">사이트 전체의 강조색으로 사용됩니다. (버튼, 아이콘, 포인트 요소 등)</p>
                          </div>
                        </div>
                      </div>

                      <div className="glass-card p-10 border-white/5 rounded-[2rem]">
                        <label className="text-xs text-slate-300 uppercase font-bold mb-6 block tracking-wider">타이포그래피 시스템</label>
                        <select 
                          value={localContent.theme.font}
                          onChange={e => setLocalContent({...localContent, theme: {...localContent.theme, font: e.target.value}})}
                          className="admin-input py-4 px-5 rounded-2xl"
                        >
                          <option value="Noto Sans KR">Noto Sans KR (한국어 가독성 최적화)</option>
                          <option value="Inter">Inter (글로벌 모던 스타일)</option>
                        </select>
                        <p className="text-[10px] text-slate-500 mt-4 px-1 break-keep">선택한 폰트 시스템이 사이트 전체의 헤드라인과 본문에 일괄 적용됩니다.</p>
                      </div>
                    </div>
                  </section>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
