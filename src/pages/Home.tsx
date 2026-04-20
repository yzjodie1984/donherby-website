import { Link } from 'react-router-dom';
import { ArrowRight, Train, Ship, ShieldCheck, PlaneTakeoff, Warehouse, MapPin, ClipboardList, CalendarCheck, Truck, Search, Route, Thermometer, TrainTrack } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import NetworkTicker from '../components/NetworkTicker';
import SEO from '../components/SEO';

export default function Home() {
  const { t } = useTranslation();

  const serviceCards = [
    { icon: Ship, title: t('home.services.ocean.title'), sub: t('home.services.ocean.sub'), desc: t('home.services.ocean.desc'), img: '/images/img_886c705aa1.jpg' },
    { icon: PlaneTakeoff, title: t('home.services.air.title'), sub: t('home.services.air.sub'), desc: t('home.services.air.desc'), img: '/images/img_9d88eaaa2e.jpg' },
    { icon: Train, title: t('home.services.rail.title'), sub: t('home.services.rail.sub'), desc: t('home.services.rail.desc'), img: '/images/img_30671c7789.jpg' },
    { icon: Route, title: t('home.services.hybrid.title'), sub: t('home.services.hybrid.sub'), desc: t('home.services.hybrid.desc'), img: '/images/img_c0b5e42c4f.jpg' },
    { icon: Warehouse, title: t('home.services.warehouse.title'), sub: t('home.services.warehouse.sub'), desc: t('home.services.warehouse.desc'), img: '/images/img_6a6d645457.jpg' },
    { icon: ShieldCheck, title: t('home.services.customs.title'), sub: t('home.services.customs.sub'), desc: t('home.services.customs.desc'), img: '/images/img_ddc829e850.jpg' }
  ];

  const workflowNodes = [
    { label: t('home.workflow.order'), icon: ClipboardList },
    { label: t('home.workflow.booking'), icon: CalendarCheck },
    { label: t('home.workflow.drayage'), icon: Truck },
    { label: t('home.workflow.cfs'), icon: Warehouse },
    { label: t('home.workflow.transit'), icon: Ship },
    { label: t('home.workflow.customs'), icon: ShieldCheck },
    { label: t('home.workflow.last_mile'), icon: MapPin }
  ];

  return (
    <main className="w-full">
      <SEO 
        title={t('seo.home_title')} 
        description={t('seo.home_desc')} 
        keywords={t('seo.home_keywords')}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--color-navy)] text-white">
        {/* Background Image - Action shot: plane taking off at dusk */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/img_edbd1534ba.jpg" 
            alt="Cargo Plane Taking Off" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)]/95 via-[var(--color-navy)]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8 whitespace-pre-line"
            >
              {t('home.hero_title1')} <br />
              <span className="text-[var(--color-accent-blue)]">{t('home.hero_title2')}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-[var(--color-cool-gray)] max-w-2xl leading-relaxed mb-10 pl-4 border-l-4 border-[var(--color-accent-blue)] font-medium"
            >
              {t('home.hero_desc')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/services" className="bg-white hover:bg-[var(--color-cool-gray)] hover:-translate-y-0.5 hover:shadow-lg text-[var(--color-navy)] px-8 py-4 rounded-sm font-bold uppercase tracking-wider flex items-center transition-all duration-300">
                {t('home.hero_cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Section 1: The DonherBy Edge (Boutique Precision) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 border border-[var(--color-cool-gray)]/20 bg-[var(--color-navy)]/60 backdrop-blur-md rounded-sm p-8 lg:p-12"
          >
            <h2 className="text-2xl font-bold uppercase tracking-widest text-[var(--color-cool-gray)] mb-8 border-b border-[var(--color-cool-gray)]/20 pb-4">{t('home.edge_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: t('home.edge_1_title'), desc: t('home.edge_1_desc') },
                { title: t('home.edge_2_title'), desc: t('home.edge_2_desc') },
                { title: t('home.edge_3_title'), desc: t('home.edge_3_desc') },
                { title: t('home.edge_4_title'), desc: t('home.edge_4_desc') }
              ].map((item, idx) => (
                <div key={idx} className={`flex flex-col ${idx !== 0 ? 'lg:border-l border-[var(--color-cool-gray)]/20 lg:pl-8' : ''}`}>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm font-medium text-[var(--color-cool-gray)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: One-Stop Integrated Solutions */}
      <section id="process" className="py-32 bg-[var(--color-cool-gray)]/20 text-[var(--color-navy)] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-20 text-center max-w-4xl md:max-w-5xl lg:max-w-none mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 lg:whitespace-nowrap">{t('home.solutions_title')}</h2>
            <p className="text-[var(--color-navy)]/70 text-lg font-medium max-w-3xl mx-auto whitespace-normal">
              {t('home.solutions_desc')}
            </p>
          </div>

          {/* Clean & Modern Service Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24 relative z-20">
            {serviceCards.map((card, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group min-h-[320px]">
                {/* Background Image */}
                <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
                
                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/80 to-[var(--color-navy)]/40"></div>
                <div className="absolute inset-0 bg-[var(--color-navy)]/20 group-hover:bg-transparent transition-colors duration-300"></div>

                {/* Card Content */}
                <div className="relative z-10 p-8 flex flex-col h-full transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-auto text-white group-hover:bg-[var(--color-accent-blue)] group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <card.icon strokeWidth={1.5} className="w-6 h-6" />
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-2 group-hover:text-[var(--color-accent-blue)] transition-colors">{card.title}</h3>
                    <h4 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4 border-b border-white/20 pb-4">{card.sub}</h4>
                    <p className="text-sm font-medium text-slate-300 leading-relaxed max-w-[95%]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Workflow UI */}
          <div className="relative max-w-6xl mx-auto bg-white border border-[var(--color-cool-gray)]/50 rounded-3xl p-8 lg:p-16 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-row justify-between relative w-full gap-y-12 md:gap-y-0 mb-16 z-20 overflow-hidden md:overflow-visible">
               {/* Global Background Line for desktop */}
               <div className="hidden md:block absolute top-[32px] left-[7%] right-[7%] h-[1px] bg-[var(--color-cool-gray)] z-0"></div>

              {workflowNodes.map((node, idx) => (
                <div key={idx} className="flex flex-col items-center group flex-1 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[var(--color-cool-gray)] shadow-sm flex items-center justify-center mb-6 text-[var(--color-navy)] group-hover:border-[var(--color-accent-blue)] group-hover:text-[var(--color-accent-blue)] group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(59,130,246,0.2)] transition-all duration-300 relative">
                     {/* Mobile connector line */}
                     {idx % 2 === 0 && idx < 6 && (
                        <div className="md:hidden absolute top-1/2 left-full w-full h-[1px] bg-[var(--color-cool-gray)] -z-10 hidden xs:block"></div>
                     )}
                    <node.icon strokeWidth={1.5} className="w-7 h-7 bg-white relative z-10 rounded-full" />
                  </div>
                  
                  <div className="text-[11px] lg:text-xs font-bold uppercase tracking-widest text-[var(--color-navy)]/60 group-hover:text-[var(--color-accent-blue)] transition-colors text-center px-1">
                    {node.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Continuous Digital Tracking Bar */}
            <div className="relative w-full h-14 bg-gradient-to-r from-blue-50/0 via-blue-50/80 to-blue-50/0 border-y border-blue-100 flex items-center justify-center uppercase tracking-[0.3em] text-[var(--color-accent-blue)] text-xs font-bold rounded-full overflow-hidden">
               <Search className="w-4 h-4 mr-3 opacity-90 relative z-10" />
               <span className="relative z-10">{t('home.workflow.tracking')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Market Presence */}
      <section id="market-presence" className="py-24 bg-[var(--color-navy)] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-16 md:flex justify-between items-end gap-12">
            <div className="max-w-3xl border-l-[6px] border-[var(--color-accent-blue)] pl-6">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 uppercase text-white">
                {t('home.market.title_1')} <span className="text-[var(--color-accent-blue)] whitespace-nowrap">{t('home.market.title_2')}</span>
              </h2>
              <p className="text-lg text-slate-400 font-medium">
                {t('home.market.desc')}
              </p>
            </div>
          </div>

          {/* Bento Market Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-[300px] h-auto md:h-[600px]">
            {/* Box 1 (Large - 77%) */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl group border border-white/5 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <img src="/images/img_f98528396b.jpg" alt="Port of Hamburg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[#0F172A]/70 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-transparent to-transparent"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col justify-end h-full">
                <div className="font-mono text-6xl md:text-7xl font-bold text-[var(--color-accent-blue)] mb-4 opacity-90 drop-shadow-md group-hover:text-white transition-colors duration-500">{t('home.market.eu_pct')}</div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-4">{t('home.market.eu_title')}</h3>
                <p className="text-slate-300 font-medium text-lg leading-relaxed max-w-xl">
                  {t('home.market.eu_desc')}
                </p>
              </div>
            </div>

            {/* Box 2 (Medium - 15%) */}
            <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-2xl group border border-white/5 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <img src="/images/img_10fb11f8c5.jpg" alt="Port of Busan" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[#0F172A]/80 to-[var(--color-navy)]/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-transparent to-transparent"></div>
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="font-mono text-4xl font-bold text-[var(--color-accent-orange)] mb-3 opacity-90 drop-shadow-md group-hover:text-white transition-colors duration-500">{t('home.market.jp_pct')}</div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-2 text-white whitespace-pre-line">{t('home.market.jp_title')}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  {t('home.market.jp_desc')}
                </p>
              </div>
            </div>

            {/* Box 3 (Small - 8%) */}
            <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-2xl group border border-white/5 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <img src="/images/img_f98528396b.jpg" alt="Port of Singapore" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[#0F172A]/80 to-[var(--color-navy)]/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-transparent to-transparent"></div>
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="font-mono text-4xl font-bold text-[var(--color-accent-blue)] opacity-70 mb-3 drop-shadow-md group-hover:text-white transition-colors duration-500">{t('home.market.sea_pct')}</div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-2 text-white whitespace-pre-line">{t('home.market.sea_title')}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  {t('home.market.sea_desc')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Specialized Industry Expertise */}
      <section id="expertise" className="py-24 bg-[var(--color-navy)] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-16 md:flex justify-between items-end gap-12">
            <div className="max-w-3xl border-l-[6px] border-[var(--color-accent-orange)] pl-6">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 uppercase text-white">{t('home.expertise.title_1')} <span className="text-[var(--color-accent-orange)]">{t('home.expertise.title_2')}</span></h2>
              <p className="text-lg text-slate-400 font-medium">
                {t('home.expertise.desc')}
              </p>
            </div>
          </div>

          {/* Premium Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px] lg:h-[700px]">
             {/* 1. Industrial & Energy */}
             <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl group min-h-[300px] shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 transition-all duration-300 cursor-default">
                <img src="/images/img_41d8153b9f.jpg" alt="Industrial and Energy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl transition-all duration-300 group-hover:bg-white/15">
                   <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-4 gap-3">
                     <h3 className="text-white font-bold text-2xl uppercase tracking-wider">{t('home.expertise.cat_1_title')}</h3>
                     <span className="bg-[var(--color-accent-blue)] text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-sm whitespace-nowrap self-start">{t('home.expertise.cat_1_badge')}</span>
                   </div>
                   <p className="text-slate-300 text-sm font-medium">{t('home.expertise.cat_1_desc')}</p>
                </div>
             </div>

             {/* 2. Complex Compliance */}
             <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-2xl group min-h-[250px] shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 transition-all duration-300 cursor-default">
                <img src="/images/img_d2ee6edf3b.jpg" alt="Complex Compliance" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl transition-all duration-300 group-hover:bg-white/15">
                   <div className="flex flex-col mb-2 items-start gap-2">
                     <span className="bg-[var(--color-accent-orange)] text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-sm">{t('home.expertise.cat_2_badge')}</span>
                     <h3 className="text-white font-bold text-lg uppercase tracking-tight leading-tight">{t('home.expertise.cat_2_title')}</h3>
                   </div>
                   <p className="text-slate-300 text-xs font-medium">{t('home.expertise.cat_2_desc')}</p>
                </div>
             </div>

             {/* 3. Temperature Controlled */}
             <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-2xl group min-h-[250px] shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 transition-all duration-300 cursor-default">
                <img src="/images/img_ff19877406.jpg" alt="Temperature Controlled" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl transition-all duration-300 group-hover:bg-white/15">
                   <div className="flex flex-col mb-2 items-start gap-2">
                     <span className="bg-[var(--color-accent-blue)] text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-sm">{t('home.expertise.cat_3_badge')}</span>
                     <h3 className="text-white font-bold text-lg uppercase tracking-tight leading-tight">{t('home.expertise.cat_3_title')}</h3>
                   </div>
                   <p className="text-slate-300 text-xs font-medium">{t('home.expertise.cat_3_desc')}</p>
                </div>
             </div>

             {/* 4. Fragile & High-Value */}
             <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-2xl group min-h-[250px] shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 transition-all duration-300 cursor-default">
                <img src="/images/img_caf3a8acf1.jpg" alt="Fragile and High Value" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl transition-all duration-300 group-hover:bg-white/15">
                   <div className="flex flex-col mb-2 items-start gap-2">
                     <span className="bg-[var(--color-accent-blue)] text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-sm">{t('home.expertise.cat_4_badge')}</span>
                     <h3 className="text-white font-bold text-lg uppercase tracking-tight leading-tight">{t('home.expertise.cat_4_title')}</h3>
                   </div>
                   <p className="text-slate-300 text-xs font-medium">{t('home.expertise.cat_4_desc')}</p>
                </div>
             </div>

             {/* 5. E-commerce & Retail */}
             <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-2xl group min-h-[250px] shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 transition-all duration-300 cursor-default">
                <img src="/images/img_2440ab2c8a.jpg" alt="E-commerce and Retail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl transition-all duration-300 group-hover:bg-white/15">
                   <div className="flex flex-col mb-2 items-start gap-2">
                     <span className="bg-[var(--color-accent-blue)] text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-sm">{t('home.expertise.cat_5_badge')}</span>
                     <h3 className="text-white font-bold text-lg uppercase tracking-tight leading-tight">{t('home.expertise.cat_5_title')}</h3>
                   </div>
                   <p className="text-slate-300 text-xs font-medium">{t('home.expertise.cat_5_desc')}</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <NetworkTicker />
    </main>
  );
}
