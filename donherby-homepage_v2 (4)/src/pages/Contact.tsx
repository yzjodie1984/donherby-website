import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-[#f8fafc] text-[var(--color-navy)] min-h-screen">
      <SEO 
        title={t('seo.contact_title')} 
        description={t('seo.contact_desc')} 
      />
      {/* Contact Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--color-navy)] text-white border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&q=80&w=2670" 
            alt="Consultancy Background" 
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
              {t('contact.hero_title1')} <br className="md:hidden" />
              <span className="text-[var(--color-accent-blue)]">{t('contact.hero_title2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
              {t('contact.hero_desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent-orange)] mb-4">{t('contact.subtitle')}</h2>
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">{t('contact.title')}</h3>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              {t('contact.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Location Card */}
            <div className="bg-slate-50 border border-slate-200 p-10 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-white border border-slate-200 flex items-center justify-center rounded-full mb-6 group-hover:border-[var(--color-accent-blue)] transition-colors">
                <MapPin className="w-6 h-6 text-[var(--color-navy)] group-hover:text-[var(--color-accent-blue)] transition-colors" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--color-navy)] mb-4">{t('contact.hq_title')}</h4>
              <p className="text-slate-600 font-medium leading-relaxed">
                {t('contact.hq_address')}<br />
                {t('contact.hq_city')}
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-slate-50 border border-slate-200 p-10 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-white border border-slate-200 flex items-center justify-center rounded-full mb-6 group-hover:border-[var(--color-accent-blue)] transition-colors">
                <Mail className="w-6 h-6 text-[var(--color-navy)] group-hover:text-[var(--color-accent-blue)] transition-colors" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--color-navy)] mb-4">{t('contact.email_title')}</h4>
              <a href="mailto:Louiscai@donherby.com.cn" className="text-slate-600 font-medium hover:text-[var(--color-accent-blue)] transition-colors">
                Louiscai@donherby.com.cn
              </a>
            </div>

            {/* Comm Card */}
            <div className="bg-slate-50 border border-slate-200 p-10 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-white border border-slate-200 flex items-center justify-center rounded-full mb-6 group-hover:border-[var(--color-accent-blue)] transition-colors">
                <Phone className="w-6 h-6 text-[var(--color-navy)] group-hover:text-[var(--color-accent-blue)] transition-colors" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--color-navy)] mb-4">{t('contact.phone_title')}</h4>
              <p className="text-slate-600 font-medium">+86 138 1639 9242</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
