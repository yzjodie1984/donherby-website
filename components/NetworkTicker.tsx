import { useTranslation } from 'react-i18next';

export default function NetworkTicker() {
  const { t } = useTranslation();

  return (
      <section className="py-16 bg-white overflow-hidden border-t border-[var(--color-navy)]/10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-[var(--color-navy)] mb-3">{t('network.title')}</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">{t('network.desc')}</p>
        </div>
        
        <div className="relative flex overflow-x-hidden group py-2">
          {/* Edge Fade Overlays */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee flex whitespace-nowrap items-center hover:pause cursor-default">
             {/* Original Logo List */}
             {[
               "MAERSK", "MSC", "DHL", "DB SCHENKER", "CMA CGM", "COSCO",
               "EVERGREEN", "HAPAG-LLOYD", "ONE", "ZIM", "DSV", "CEVA"
             ].map((logo, idx) => (
               <div key={`logo-1-${idx}`} className="mx-3 md:mx-4 flex items-center justify-center px-8 py-5 md:px-12 md:py-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.10)] hover:border-slate-200 hover:-translate-y-1.5 transition-all duration-300">
                 <span className="text-lg md:text-2xl font-extrabold uppercase tracking-tighter text-slate-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                   {logo}
                 </span>
               </div>
             ))}
             {/* Duplicated Logo List for seamless loop */}
             {[
               "MAERSK", "MSC", "DHL", "DB SCHENKER", "CMA CGM", "COSCO",
               "EVERGREEN", "HAPAG-LLOYD", "ONE", "ZIM", "DSV", "CEVA"
             ].map((logo, idx) => (
               <div key={`logo-2-${idx}`} className="mx-3 md:mx-4 flex items-center justify-center px-8 py-5 md:px-12 md:py-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.10)] hover:border-slate-200 hover:-translate-y-1.5 transition-all duration-300">
                 <span className="text-lg md:text-2xl font-extrabold uppercase tracking-tighter text-slate-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                   {logo}
                 </span>
               </div>
             ))}
          </div>
        </div>
      </section>
  );
}
