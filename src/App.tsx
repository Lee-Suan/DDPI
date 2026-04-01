import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Representative from './components/Representative';
import About, { AboutIntroduction, AboutMission, AboutValues } from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { SiteContent } from './types';
import { Settings } from 'lucide-react';
import { INITIAL_DATA } from './constants';

function App() {
  const [content, setContent] = useState<SiteContent>(INITIAL_DATA);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    fetch('/api/content')
      .then(res => {
        if (!res.ok) throw new Error('API not available');
        return res.json();
      })
      .then(data => setContent(data))
      .catch(err => {
        console.warn('Using initial data as fallback:', err);
      });
  }, []);

  // No longer need the loading check if we have initial data
  // if (!content) return ...

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <Navbar 
          siteName={content.siteInfo.name} 
        />
        
        <main>
          <section id="home" className="snap-section min-h-screen">
            <Hero 
              subSlogan={content.siteInfo.subSlogan} 
              description={content.siteInfo.description}
            />
          </section>
          
          <section id="about" className="snap-section">
            <AboutIntroduction />
            <div className="mt-4 md:mt-8">
              <AboutMission />
            </div>
            <div className="mt-6 md:mt-12">
              <AboutValues />
            </div>
          </section>
          
          <section id="representative" className="snap-section">
            <Representative />
          </section>
          
          <section id="expertise" className="snap-section">
            <Expertise />
          </section>
          
          <section id="services" className="snap-section">
            <Services services={content.services} />
          </section>
          
          <section id="contact" className="snap-section">
            <Contact 
              email={content.siteInfo.contactEmail} 
              phone={content.siteInfo.contactPhone} 
              address={content.siteInfo.address}
            />
          </section>
        </main>

        <section className="snap-start">
          <Footer 
            siteName={content.siteInfo.name} 
            representative={content.siteInfo.representative}
          />
        </section>
      </div>

      {/* Admin Toggle Button */}
      <button 
        onClick={() => setIsAdminOpen(true)}
        className="fixed bottom-6 right-6 z-[60] w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
      >
        <Settings size={24} className="text-white" />
      </button>

      {isAdminOpen && (
        <AdminDashboard 
          content={content} 
          onUpdate={(newContent) => setContent(newContent)} 
          onClose={() => setIsAdminOpen(false)} 
        />
      )}
    </div>
  );
}

export default App;
