import { Ship, PlaneTakeoff, Train, Route, Warehouse, MapPin, PackageOpen, LayoutDashboard, Anchor, Thermometer, ShieldCheck, FileCheck, Layers, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

export default function Services() {
  const { t } = useTranslation();

  return (
    <main className="w-full min-h-screen">
      <SEO 
        title={t('seo.services_title')} 
        description={t('seo.services_desc')} 
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--color-navy)] text-white border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2670&fm=webp" 
            alt="Logistics Network" 
            className="w-full h-full object-cover grayscale opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/80 to-[var(--color-navy)]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-8 leading-[1.1]">
              {t('services_page.hero_title1')} <br className="md:hidden" />
              <span className="text-[var(--color-accent-blue)]">{t('services_page.hero_title2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-cool-gray)] font-medium max-w-3xl mx-auto leading-relaxed">
              {t('services_page.hero_desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. Forwarding & Shipping */}
      <section className="py-24 bg-white text-[var(--color-navy)] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent-blue)] mb-4">{t('services_page.multimodal_sub')}</h2>
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-[var(--color-navy)] max-w-2xl">
              {t('services_page.multimodal_title')}
            </h3>
            <p className="text-lg text-slate-600 font-medium max-w-3xl leading-relaxed">
              {t('services_page.multimodal_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sea Freight */}
            <div className="relative overflow-hidden rounded-2xl group border border-white/5 bg-[var(--color-navy)] shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 transition-all duration-300 min-h-[360px] flex flex-col cursor-default">
              <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800&fm=webp" alt="Sea Freight" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[#0F172A]/80 to-[var(--color-navy)]/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent"></div>
              
              <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent-blue)]/20 border border-[var(--color-accent-blue)]/50 backdrop-blur-md flex items-center justify-center mb-6 text-white shadow-sm group-hover:bg-[var(--color-accent-blue)] group-hover:scale-110 transition-all duration-300">
                  <Ship className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-wider text-white mb-3">{t('services_page.ocean_title')}</h4>
                <p className="text-slate-300 text-sm font-medium leading-relaxed">{t('services_page.ocean_desc')}</p>
              </div>
            </div>

            {/* Air Freight */}
            <div className="relative overflow-hidden rounded-2xl group border border-white/5 bg-[var(--color-navy)] shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 transition-all duration-300 min-h-[360px] flex flex-col cursor-default">
              <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=800&fm=webp" alt="Air Freight" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[#0F172A]/80 to-[var(--color-navy)]/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent"></div>
              
              <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent-blue)]/20 border border-[var(--color-accent-blue)]/50 backdrop-blur-md flex items-center justify-center mb-6 text-white shadow-sm group-hover:bg-[var(--color-accent-blue)] group-hover:scale-110 transition-all duration-300">
                  <PlaneTakeoff className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-wider text-white mb-3">{t('services_page.air_title')}</h4>
                <p className="text-slate-300 text-sm font-medium leading-relaxed">{t('services_page.air_desc')}</p>
              </div>
            </div>

            {/* Rail & Road */}
            <div className="relative overflow-hidden rounded-2xl group border border-white/5 bg-[var(--color-navy)] shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 transition-all duration-300 min-h-[360px] flex flex-col cursor-default">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/CN_8015%2C_5690_and_5517_Hinton_-_Jasper.jpg/960px-CN_8015%2C_5690_and_5517_Hinton_-_Jasper.jpg" alt="Rail Transport" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[#0F172A]/80 to-[var(--color-navy)]/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent"></div>
              
              <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent-blue)]/20 border border-[var(--color-accent-blue)]/50 backdrop-blur-md flex items-center justify-center mb-6 text-white shadow-sm group-hover:bg-[var(--color-accent-blue)] group-hover:scale-110 transition-all duration-300">
                  <Train className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-wider text-white mb-3">{t('services_page.rail_title')}</h4>
                <p className="text-slate-300 text-sm font-medium leading-relaxed">{t('services_page.rail_desc')}</p>
              </div>
            </div>

            {/* Sea-Air Hybrid */}
            <div className="relative overflow-hidden rounded-2xl group border border-white/5 bg-[var(--color-navy)] shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 transition-all duration-300 min-h-[360px] flex flex-col cursor-default">
              <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800&fm=webp" alt="Hybrid Logicstics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[#0F172A]/80 to-[var(--color-navy)]/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent"></div>
              
              <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                <div className="absolute top-6 right-6">
                  <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {t('services_page.hybrid_badge')}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent-blue)]/20 border border-[var(--color-accent-blue)]/50 backdrop-blur-md flex items-center justify-center mb-6 text-white shadow-sm group-hover:bg-[var(--color-accent-blue)] group-hover:scale-110 transition-all duration-300">
                  <Route className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-wider text-white mb-3">{t('services_page.hybrid_title')}</h4>
                <p className="text-slate-300 text-sm font-medium leading-relaxed">{t('services_page.hybrid_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Warehousing & Distribution */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
               {/* Left Image Stack */}
               <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg" className="w-full h-full object-cover" alt="Warehouse Facilities" referrerPolicy="no-referrer" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent mix-blend-multiply"></div>
               </div>
               {/* Badge Card */}
               <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 bg-[var(--color-navy)] border border-white/10 text-white p-8 rounded-2xl shadow-xl max-w-[280px]">
                 <div className="font-mono text-5xl font-bold text-[var(--color-accent-blue)] mb-2">{t('services_page.wh_stat_val')}</div>
                 <div className="text-lg font-bold uppercase tracking-wider mb-2">{t('services_page.wh_stat_lbl')}</div>
                 <div className="text-slate-400 text-sm font-medium">{t('services_page.wh_stat_desc')}</div>
               </div>
            </div>

            <div className="lg:pl-12 mt-12 lg:mt-0">
              <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent-blue)] mb-4">{t('services_page.wh_sub')}</h2>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8">{t('services_page.wh_title_1')} <br /> {t('services_page.wh_title_2')}</h3>
              <p className="text-lg text-slate-300 font-medium mb-10 leading-relaxed">
                {t('services_page.wh_desc')}
              </p>

              <div className="space-y-8">
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[var(--color-accent-blue)] group-hover:text-white group-hover:border-[var(--color-accent-blue)] transition-colors duration-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wide mb-2">{t('services_page.wh_item1_title')}</h4>
                    <p className="text-slate-400 font-medium">{t('services_page.wh_item1_desc')}</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[var(--color-accent-blue)] group-hover:text-white group-hover:border-[var(--color-accent-blue)] transition-colors duration-300">
                    <LayoutDashboard className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wide mb-2">{t('services_page.wh_item2_title')}</h4>
                    <p className="text-slate-400 font-medium">{t('services_page.wh_item2_desc')}</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[var(--color-accent-blue)] group-hover:text-white group-hover:border-[var(--color-accent-blue)] transition-colors duration-300">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wide mb-2">{t('services_page.wh_item3_title')}</h4>
                    <p className="text-slate-400 font-medium">{t('services_page.wh_item3_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow & Order Management */}
      <section className="py-24 bg-white text-[var(--color-navy)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             
             <div>
                <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent-blue)] mb-4">{t('services_page.tech_sub')}</h2>
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">{t('services_page.tech_title_1')} <br /> {t('services_page.tech_title_2')}</h3>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                  {t('services_page.tech_desc')}
                </p>

                <div className="space-y-6">
                  <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-slate-100 transition-colors duration-300 group">
                     <div className="flex items-center gap-4 mb-3">
                       <MapPin className="w-6 h-6 text-[var(--color-accent-blue)]" />
                       <h4 className="text-xl font-bold uppercase tracking-wider">{t('services_page.tech_item1_title')}</h4>
                     </div>
                     <p className="text-slate-600 font-medium ml-10">{t('services_page.tech_item1_desc')}</p>
                  </div>

                  <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-slate-100 transition-colors duration-300 group">
                     <div className="flex items-center gap-4 mb-3">
                       <Activity className="w-6 h-6 text-[var(--color-accent-orange)]" />
                       <h4 className="text-xl font-bold uppercase tracking-wider">{t('services_page.tech_item2_title')}</h4>
                     </div>
                     <p className="text-slate-600 font-medium ml-10">{t('services_page.tech_item2_desc')}</p>
                  </div>
                </div>
             </div>

             {/* Digital Graphic Right Side */}
             <div className="relative w-full h-[500px] bg-[#0A0F1D] rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center group">
               {/* Grid Background */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
               
               {/* UI Mockup / Flow Graphic */}
               <div className="relative z-10 w-[80%] h-[80%] border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl p-6 flex flex-col shadow-[0_0_50px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_80px_rgba(59,130,246,0.15)] transition-shadow duration-700">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <div className="font-mono text-sm tracking-widest text-[var(--color-accent-blue)]">{t('services_page.tech_ui_title')}</div>
                    <div className="flex gap-2">
                       <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                       <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                       <div className="w-2 h-2 rounded-full bg-[var(--color-accent-blue)] animate-pulse"></div>
                    </div>
                  </div>

                  <div className="space-y-4 flex-1">
                    {[
                      { status: t('services_page.tech_ui_step1'), time: '08:42 ZULU', active: false },
                      { status: t('services_page.tech_ui_step2'), time: '14:15 ZULU', active: false },
                      { status: t('services_page.tech_ui_step3'), time: '22:00 ZULU', active: false },
                      { status: t('services_page.tech_ui_step4'), time: t('services_page.tech_ui_active'), active: true },
                    ].map((row, i) => (
                      <div key={i} className={`flex items-center justify-between p-3 rounded-lg border ${row.active ? 'bg-[var(--color-accent-blue)]/10 border-[var(--color-accent-blue)]/50' : 'bg-transparent border-white/5'}`}>
                         <div className="flex items-center gap-3">
                           <div className={`w-2 h-2 rounded-full ${row.active ? 'bg-[var(--color-accent-blue)] shadow-[0_0_8px_var(--color-accent-blue)]' : 'bg-slate-600'}`}></div>
                           <span className={`text-xs font-bold tracking-wider ${row.active ? 'text-white' : 'text-slate-400'}`}>{row.status}</span>
                         </div>
                         <div className={`font-mono text-[10px] ${row.active ? 'text-[var(--color-accent-blue)]' : 'text-slate-500'}`}>{row.time}</div>
                      </div>
                    ))}
                  </div>
               </div>
             </div>

           </div>
        </div>
      </section>

    </main>
  );
}
