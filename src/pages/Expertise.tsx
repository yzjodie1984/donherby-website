import { Plane, Snowflake, Hammer, Train, Beaker, Car, Cpu, ShoppingCart, Armchair, HeartPulse, ArrowRight, ShieldAlert, Zap, Lock, Thermometer } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

export default function Expertise() {
  const { t } = useTranslation();

  return (
    <main className="w-full min-h-screen">
      <SEO 
        title={t('seo.expertise_title')} 
        description={t('seo.expertise_desc')} 
      />
      {/* 1. Hero Section: The "Zero-Margin" Commitment */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--color-navy)] text-white border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
            alt="Jet Engine Turbine" 
            className="w-full h-full object-cover grayscale opacity-20"
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
              {t('expertise_page.hero_title1')} <br className="md:hidden" />
              <span className="text-[var(--color-accent-blue)]">{t('expertise_page.hero_title2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-cool-gray)] font-medium max-w-3xl mx-auto leading-relaxed">
              {t('expertise_page.hero_desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Sector 1: Aviation & High-Value Assets */}
      <section className="py-24 bg-white text-[var(--color-navy)] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent-blue)] mb-4">
                {t('expertise_page.sect1_sub')}
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-[var(--color-navy)]">{t('expertise_page.sect1_title_1')} <br /> {t('expertise_page.sect1_title_2')}</h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 border-l-4 border-[var(--color-accent-blue)] pl-4">
                {t('expertise_page.sect1_desc')}
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)] font-mono text-xs font-bold px-3 py-1 rounded-bl-lg border-l border-b border-[var(--color-accent-blue)]/20">{t('expertise_page.sect1_case_badge')}</div>
                <h4 className="text-xl font-bold uppercase tracking-wider mb-2 text-[var(--color-navy)]">{t('expertise_page.sect1_case_title')}</h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  {t('expertise_page.sect1_case_desc')}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <ShieldAlert className="w-5 h-5 text-[var(--color-accent-orange)]" />
                  <span className="font-bold text-[var(--color-navy)] uppercase tracking-wider">{t('expertise_page.sect1_item1')}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Zap className="w-5 h-5 text-[var(--color-accent-orange)]" />
                  <span className="font-bold text-[var(--color-navy)] uppercase tracking-wider">{t('expertise_page.sect1_item2')}</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] group border border-slate-200">
               <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=1200" alt="Aerospace Engineering" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sector 2: Cold Chain & Perishable Integrity */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            
            {/* Content Right */}
            <div className="lg:pl-8">
              <h2 className="text-sm font-bold tracking-widest uppercase text-cyan-500 mb-4">
                {t('expertise_page.sect2_sub')}
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">{t('expertise_page.sect2_title_1')} <br /> {t('expertise_page.sect2_title_2')}</h3>
              <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10">
                {t('expertise_page.sect2_desc')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                 <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <div className="font-bold text-lg uppercase tracking-wider mb-2 text-white">{t('expertise_page.sect2_sol_act')}</div>
                    <p className="text-sm text-slate-400 font-medium">{t('expertise_page.sect2_sol_act_desc')}</p>
                 </div>
                 <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <div className="font-bold text-lg uppercase tracking-wider mb-2 text-white">{t('expertise_page.sect2_sol_pas')}</div>
                    <p className="text-sm text-slate-400 font-medium">{t('expertise_page.sect2_sol_pas_desc')}</p>
                 </div>
              </div>

              {/* Technical Spec Box */}
              <div className="flex items-center gap-4 bg-[var(--color-navy)] px-6 py-4 rounded-xl border border-cyan-500/20 shadow-sm">
                <Thermometer className="w-8 h-8 text-cyan-500" />
                <div>
                   <div className="text-xs font-bold uppercase tracking-widest text-cyan-400/50">{t('expertise_page.sect2_spec_badge')}</div>
                   <div className="font-mono text-2xl font-bold text-cyan-500">-25°C to 25°C</div>
                </div>
              </div>

            </div>

             {/* Image Left */}
             <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] group border border-white/10">
               <img src="https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&q=80&w=1200" alt="Thermal Engineering" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent mix-blend-multiply border border-cyan-500/0 group-hover:border-cyan-500/20 transition-colors"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Sector 3: Project Logistics & Industrial Heavy-Lift */}
      <section className="py-24 bg-white text-[var(--color-navy)] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent-orange)] mb-4">
                {t('expertise_page.sect3_sub')}
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-[var(--color-navy)]">{t('expertise_page.sect3_title_1')} <br /> {t('expertise_page.sect3_title_2')}</h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 border-l-4 border-[var(--color-accent-orange)] pl-4">
                {t('expertise_page.sect3_desc')}
              </p>

              <div className="space-y-8">
                <div className="group">
                   <h4 className="font-bold text-xl uppercase tracking-wider text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-accent-orange)] transition-colors">{t('expertise_page.sect3_item1_title')}</h4>
                   <p className="text-slate-600 text-sm font-medium">{t('expertise_page.sect3_item1_desc')}</p>
                </div>
                <div className="group">
                   <h4 className="font-bold text-xl uppercase tracking-wider text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-accent-orange)] transition-colors">{t('expertise_page.sect3_item2_title')}</h4>
                   <p className="text-slate-600 text-sm font-medium">{t('expertise_page.sect3_item2_desc')}</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] group border border-slate-200">
               <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" alt="Industrial Heavy Lift" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sector 4: The New Silk Road (Intermodal Mastery) */}
      <section className="py-24 bg-[#0F172A] text-white relative border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent-blue)] mb-4">
              {t('expertise_page.sect4_sub')}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">{t('expertise_page.sect4_title_1')} <br /> {t('expertise_page.sect4_title_2')}</h3>
            <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
              {t('expertise_page.sect4_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Value Prop 1 */}
             <div className="bg-[var(--color-navy)] border border-[var(--color-accent-blue)]/20 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[var(--color-accent-blue)]/40 transition-all duration-300">
               <div className="font-mono text-4xl font-bold text-[var(--color-accent-blue)] mb-4">50/50_RULE</div>
               <h4 className="text-xl font-bold uppercase tracking-wider mb-2 text-white">{t('expertise_page.sect4_item1_title')}</h4>
               <p className="text-slate-400 text-sm font-medium">{t('expertise_page.sect4_item1_desc')}</p>
             </div>

             {/* Value Prop 2 */}
             <div className="bg-[var(--color-navy)] border border-white/10 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-white/30 transition-all duration-300">
               <div className="font-mono text-4xl font-bold text-white opacity-40 mb-4 px-2">HUB_NET</div>
               <h4 className="text-xl font-bold uppercase tracking-wider mb-2 text-white">{t('expertise_page.sect4_item2_title')}</h4>
               <p className="text-slate-400 text-sm font-medium">{t('expertise_page.sect4_item2_desc')}</p>
             </div>

             {/* Value Prop 3 */}
             <div className="bg-[var(--color-navy)] border border-white/10 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#4ADE80]/30 transition-all duration-300">
               <div className="font-mono text-4xl font-bold text-[#4ADE80] mb-4 drop-shadow-[0_0_10px_rgba(74,222,128,0.2)]">ECO_OPT</div>
               <h4 className="text-xl font-bold uppercase tracking-wider mb-2 text-white">{t('expertise_page.sect4_item3_title')}</h4>
               <p className="text-slate-400 text-sm font-medium">{t('expertise_page.sect4_item3_desc')}</p>
             </div>
          </div>
        </div>
      </section>

      {/* 6. The "Expertise Mosaic" (Quick-Fire Verticals) */}
      <section className="py-24 bg-white text-[var(--color-navy)] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">{t('expertise_page.verticals_title')}</h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              {t('expertise_page.verticals_desc')}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* 1 */}
            <div className="border border-slate-200 bg-slate-50 p-6 md:p-8 rounded-2xl group hover:bg-[var(--color-navy)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <Beaker className="w-8 h-8 text-[var(--color-accent-orange)] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-bold text-lg uppercase tracking-wider mb-2 group-hover:text-white transition-colors">{t('expertise_page.vert1_title')}</h4>
              <p className="text-slate-500 text-sm font-medium group-hover:text-slate-300 transition-colors">{t('expertise_page.vert1_desc')}</p>
            </div>
            {/* 2 */}
            <div className="border border-slate-200 bg-slate-50 p-6 md:p-8 rounded-2xl group hover:bg-[var(--color-navy)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <Car className="w-8 h-8 text-[var(--color-accent-blue)] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-bold text-lg uppercase tracking-wider mb-2 group-hover:text-white transition-colors">{t('expertise_page.vert2_title')}</h4>
              <p className="text-slate-500 text-sm font-medium group-hover:text-slate-300 transition-colors">{t('expertise_page.vert2_desc')}</p>
            </div>
            {/* 3 */}
            <div className="border border-slate-200 bg-slate-50 p-6 md:p-8 rounded-2xl group hover:bg-[var(--color-navy)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <Cpu className="w-8 h-8 text-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-bold text-lg uppercase tracking-wider mb-2 group-hover:text-white transition-colors">{t('expertise_page.vert3_title')}</h4>
              <p className="text-slate-500 text-sm font-medium group-hover:text-slate-300 transition-colors">{t('expertise_page.vert3_desc')}</p>
            </div>
            {/* 4 */}
            <div className="border border-slate-200 bg-slate-50 p-6 md:p-8 rounded-2xl group hover:bg-[var(--color-navy)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <ShoppingCart className="w-8 h-8 text-[var(--color-accent-orange)] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-bold text-lg uppercase tracking-wider mb-2 group-hover:text-white transition-colors">{t('expertise_page.vert4_title')}</h4>
              <p className="text-slate-500 text-sm font-medium group-hover:text-slate-300 transition-colors">{t('expertise_page.vert4_desc')}</p>
            </div>
            {/* 5 */}
            <div className="border border-slate-200 bg-slate-50 p-6 md:p-8 rounded-2xl group hover:bg-[var(--color-navy)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <Armchair className="w-8 h-8 text-[var(--color-accent-blue)] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-bold text-lg uppercase tracking-wider mb-2 group-hover:text-white transition-colors">{t('expertise_page.vert5_title')}</h4>
              <p className="text-slate-500 text-sm font-medium group-hover:text-slate-300 transition-colors">{t('expertise_page.vert5_desc')}</p>
            </div>
            {/* 6 */}
            <div className="border border-slate-200 bg-slate-50 p-6 md:p-8 rounded-2xl group hover:bg-[var(--color-navy)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <HeartPulse className="w-8 h-8 text-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-bold text-lg uppercase tracking-wider mb-2 group-hover:text-white transition-colors">{t('expertise_page.vert6_title')}</h4>
              <p className="text-slate-500 text-sm font-medium group-hover:text-slate-300 transition-colors">{t('expertise_page.vert6_desc')}</p>
            </div>
          </div>
        </div>
      </section>



    </main>
  );
}
