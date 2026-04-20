import { Crosshair, MapPin, Server, Snowflake, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import NetworkTicker from '../components/NetworkTicker';
import SEO from '../components/SEO';

export default function About() {
  const { t } = useTranslation();

  return (
    <main className="w-full min-h-screen">
      <SEO 
        title={t('seo.about_title')} 
        description={t('seo.about_desc')} 
      />
      {/* 1. The Hero: The Boutique Identity */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--color-navy)] text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2670"
            alt="Corporate Architecture"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-8 leading-[1.1]">
              {t('about.hero_title1')}<br className="md:hidden" />
              <span className="text-[var(--color-accent-blue)] md:ml-4">{t('about.hero_title2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed mb-16">
              {t('about.hero_desc')}
            </p>
          </motion.div>

          {/* The Key Stat Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
            <div className="flex flex-col items-center">
              <div className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">{t('about.stat_1_val')}</div>
              <div className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent-blue)]">{t('about.stat_1_lbl')}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">{t('about.stat_2_val')}</div>
              <div className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent-blue)]">{t('about.stat_2_lbl')}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">{t('about.stat_3_val')}</div>
              <div className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent-blue)]">{t('about.stat_3_lbl')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Philosophy: The "Strategic Synergy" */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent-orange)] mb-4">{t('about.phil_subtitle')}</h2>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-[var(--color-navy)]">{t('about.phil_title')}</h3>
              <p className="text-lg font-bold text-slate-600 mb-6">
                {t('about.phil_bold')}
              </p>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                {t('about.phil_desc')}
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] group border border-slate-200">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" alt="Team Synergy" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-[var(--color-navy)]/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership Spotlight: Louis Cai */}
      <section className="py-24 bg-[#0F172A] text-white">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">             <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent-orange)] mb-4">{t('about.leader_subtitle')}</h2>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">{t('about.leader_title')}</h3>
            </div>
            <div className="bg-[var(--color-navy)] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/10">
               {/* Portrait */}
               <div className="lg:w-2/5 relative h-[500px] lg:min-h-full overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" alt="Louis Cai - Managing Director" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90" referrerPolicy="no-referrer" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[var(--color-navy)]"></div>
               </div>
               {/* Content */}
               <div className="lg:w-3/5 p-10 md:p-16 text-white flex flex-col justify-center">
                  <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">{t('about.leader_name')}</h3>
                  <p className="text-xl text-[var(--color-accent-blue)] font-medium mb-8">{t('about.leader_role')}</p>
                  
                  <div className="space-y-6 text-slate-300 text-lg font-medium leading-relaxed">
                    <p>{t('about.leader_desc_1')}</p>
                    <p>{t('about.leader_desc_2')}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Market Mastery: The 77/15/8 Split */}
      <section className="py-32 bg-slate-50 text-[var(--color-navy)] relative overflow-hidden">
         {/* Map Background */}
         <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <img src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?auto=format&fit=crop&q=80&w=1600" alt="Global Network" className="w-full h-full object-cover opacity-[0.05] mix-blend-multiply" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50"></div>
         </div>

         <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent-blue)] mb-4">{t('about.market_subtitle')}</h2>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">{t('about.market_title')}</h3>
              <p className="text-xl text-slate-600 font-medium">
                {t('about.market_desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Europe */}
              <div className="bg-white border border-slate-200 rounded-2xl p-10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-accent-blue)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                 <div className="font-mono text-6xl font-bold text-[var(--color-accent-blue)] mb-6">77<span className="text-3xl opacity-50">%</span></div>
                 <h4 className="text-2xl font-bold uppercase tracking-wider mb-4 text-[var(--color-navy)]">{t('about.market_eu')}</h4>
                 <p className="text-slate-600 font-medium leading-relaxed">{t('about.market_eu_desc')}</p>
              </div>
              {/* Japan & Korea */}
              <div className="bg-white border border-slate-200 rounded-2xl p-10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-navy)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                 <div className="font-mono text-6xl font-bold text-[var(--color-navy)] mb-6">15<span className="text-3xl opacity-50">%</span></div>
                 <h4 className="text-2xl font-bold uppercase tracking-wider mb-4 text-[var(--color-navy)]">{t('about.market_jp')}</h4>
                 <p className="text-slate-600 font-medium leading-relaxed">{t('about.market_jp_desc')}</p>
              </div>
              {/* SEA */}
              <div className="bg-white border border-slate-200 rounded-2xl p-10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-slate-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                 <div className="font-mono text-6xl font-bold text-slate-400 mb-6">08<span className="text-3xl opacity-50">%</span></div>
                 <h4 className="text-2xl font-bold uppercase tracking-wider mb-4 text-[var(--color-navy)]">{t('about.market_sea')}</h4>
                 <p className="text-slate-600 font-medium leading-relaxed">{t('about.market_sea_desc')}</p>
              </div>
            </div>
         </div>
      </section>

      {/* 5. The Physical Foundation */}
      <section className="py-24 bg-[var(--color-navy)] text-white relative">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="mb-16">
              <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent-orange)] mb-4">{t('about.infra_subtitle')}</h2>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">{t('about.infra_title')}</h3>
              <p className="text-xl text-slate-400 font-medium max-w-2xl">
                {t('about.infra_desc')}
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Item 1 */}
             <div className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 cursor-default flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-blue)]/5 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                <MapPin className="w-10 h-10 text-[var(--color-accent-blue)] mb-6 group-hover:scale-110 transition-transform relative z-10" />
                <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-wider mb-2 relative z-10">{t('about.infra_card1_title')}</h4>
                <p className="text-lg text-[var(--color-accent-blue)] font-bold mb-8 relative z-10">{t('about.infra_card1_sub')}</p>
                <div className="space-y-6 flex-grow relative z-10">
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">{t('about.infra_card1_body1_title')}</h5>
                    <p className="text-slate-400 font-medium leading-relaxed">{t('about.infra_card1_body1_desc')}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">{t('about.infra_card1_body2_title')}</h5>
                    <p className="text-slate-400 font-medium leading-relaxed">{t('about.infra_card1_body2_desc')}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">{t('about.infra_card1_body3_title')}</h5>
                    <p className="text-slate-400 font-medium leading-relaxed">{t('about.infra_card1_body3_desc')}</p>
                  </div>
                </div>
             </div>
             {/* Item 2 */}
             <div className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 cursor-default flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-orange)]/5 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                <Globe2 className="w-10 h-10 text-[var(--color-accent-orange)] mb-6 group-hover:scale-110 transition-transform relative z-10" />
                <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-wider mb-2 relative z-10">{t('about.infra_card2_title')}</h4>
                <p className="text-lg text-[var(--color-accent-orange)] font-bold mb-8 relative z-10">{t('about.infra_card2_sub')}</p>
                <div className="space-y-6 flex-grow relative z-10">
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">{t('about.infra_card2_body1_title')}</h5>
                    <p className="text-slate-400 font-medium leading-relaxed">{t('about.infra_card2_body1_desc')}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">{t('about.infra_card2_body2_title')}</h5>
                    <p className="text-slate-400 font-medium leading-relaxed">{t('about.infra_card2_body2_desc')}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">{t('about.infra_card2_body3_title')}</h5>
                    <p className="text-slate-400 font-medium leading-relaxed">{t('about.infra_card2_body3_desc')}</p>
                  </div>
                </div>
             </div>
           </div>
         </div>
      </section>

      {/* 6. Footer Integration (Ticker) */}
      <NetworkTicker />
    </main>
  );
}
