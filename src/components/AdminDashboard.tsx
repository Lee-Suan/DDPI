import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Save, Layout, Palette } from 'lucide-react';
import { SiteContent } from '../types';

interface AdminDashboardProps {
  content: SiteContent;
  onUpdate: (newContent: SiteContent) => void;
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ content, onUpdate, onClose }) => {
  const [activeTab, setActiveTab] = useState<'info' | 'theme'>('info');
  const [localContent, setLocalContent] = useState<SiteContent>(content);

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
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-zinc-900 border border-white/10 w-full max-w-5xl h-full max-h-[800px] rounded-3xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-zinc-950/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <Layout size={18} className="text-white" />
            </div>
            <h2 className="text-lg font-bold">관리자 대시보드</h2>
          </div>
          <div className="flex gap-3">
            <button onClick={handleSave} className="btn-primary flex items-center gap-2 text-xs">
              <Save size={14} /> 전체 저장
            </button>
            <button onClick={onClose} className="btn-outline text-xs">닫기</button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-48 border-r border-white/10 p-4 space-y-2 bg-zinc-950/30">
            <button 
              onClick={() => setActiveTab('info')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs transition-all ${activeTab === 'info' ? 'bg-secondary text-white' : 'hover:bg-white/5'}`}
            >
              <Layout size={14} /> 사이트 정보
            </button>
            <button 
              onClick={() => setActiveTab('theme')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs transition-all ${activeTab === 'theme' ? 'bg-secondary text-white' : 'hover:bg-white/5'}`}
            >
              <Palette size={14} /> 테마 설정
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8">
            {activeTab === 'info' && (
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-secondary uppercase tracking-widest">기본 정보 수정</h3>
                <div className="grid gap-4">
                  <div>
                    <label className="text-[10px] text-slate-300 uppercase font-bold mb-1 block">사이트 이름</label>
                    <input 
                      value={localContent.siteInfo.name} 
                      onChange={e => setLocalContent({...localContent, siteInfo: {...localContent.siteInfo, name: e.target.value}})}
                      className="admin-input" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-300 uppercase font-bold mb-1 block">슬로건</label>
                    <input 
                      value={localContent.siteInfo.slogan} 
                      onChange={e => setLocalContent({...localContent, siteInfo: {...localContent.siteInfo, slogan: e.target.value}})}
                      className="admin-input" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-300 uppercase font-bold mb-1 block">서브 슬로건</label>
                    <input 
                      value={localContent.siteInfo.subSlogan} 
                      onChange={e => setLocalContent({...localContent, siteInfo: {...localContent.siteInfo, subSlogan: e.target.value}})}
                      className="admin-input" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-300 uppercase font-bold mb-1 block">설명</label>
                    <textarea 
                      value={localContent.siteInfo.description} 
                      onChange={e => setLocalContent({...localContent, siteInfo: {...localContent.siteInfo, description: e.target.value}})}
                      className="admin-input h-24 resize-none" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-slate-300 uppercase font-bold mb-1 block">대표자</label>
                      <input 
                        value={localContent.siteInfo.representative} 
                        onChange={e => setLocalContent({...localContent, siteInfo: {...localContent.siteInfo, representative: e.target.value}})}
                        className="admin-input" 
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-300 uppercase font-bold mb-1 block">이메일</label>
                      <input 
                        value={localContent.siteInfo.contactEmail} 
                        onChange={e => setLocalContent({...localContent, siteInfo: {...localContent.siteInfo, contactEmail: e.target.value}})}
                        className="admin-input" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-slate-300 uppercase font-bold mb-1 block">전화번호</label>
                      <input 
                        value={localContent.siteInfo.contactPhone} 
                        onChange={e => setLocalContent({...localContent, siteInfo: {...localContent.siteInfo, contactPhone: e.target.value}})}
                        className="admin-input" 
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-300 uppercase font-bold mb-1 block">주소</label>
                      <input 
                        value={localContent.siteInfo.address} 
                        onChange={e => setLocalContent({...localContent, siteInfo: {...localContent.siteInfo, address: e.target.value}})}
                        className="admin-input" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'theme' && (
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-secondary uppercase tracking-widest">디자인 커스터마이징</h3>
                <div className="grid gap-6">
                  <div>
                    <label className="text-[10px] text-slate-300 uppercase font-bold mb-2 block">포인트 컬러 (Hex)</label>
                    <div className="flex gap-4 items-center">
                      <input 
                        type="color" 
                        value={localContent.theme.accent}
                        onChange={e => setLocalContent({...localContent, theme: {...localContent.theme, accent: e.target.value}})}
                        className="w-10 h-10 rounded-lg overflow-hidden border-none"
                      />
                      <input 
                        value={localContent.theme.accent}
                        onChange={e => setLocalContent({...localContent, theme: {...localContent.theme, accent: e.target.value}})}
                        className="admin-input w-32"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-300 uppercase font-bold mb-2 block">기본 폰트 설정</label>
                    <select 
                      value={localContent.theme.font}
                      onChange={e => setLocalContent({...localContent, theme: {...localContent.theme, font: e.target.value}})}
                      className="admin-input"
                    >
                      <option value="Noto Sans KR">Noto Sans KR (표준)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
