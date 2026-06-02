import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t, i18n } = useTranslation();
  
  return (
      <footer className="py-16 bg-[var(--color-navy)] border-t border-white/10 text-white pb-8 relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="font-bold text-2xl tracking-tight uppercase mb-4">DonHerby</div>
            <p className="text-sm font-medium leading-relaxed max-w-sm text-[var(--color-cool-gray)]/80">
              {t('footer.desc')}
            </p>
          </div>
          <div className="md:text-right">
             <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">{t('footer.contact')}</div>
             <p className="text-sm font-medium mb-1 text-[var(--color-cool-gray)]">{t('footer.address')}</p>
             <p className="text-sm font-medium mb-1 text-[var(--color-cool-gray)]">{t('footer.tel')}</p>
             <a href="mailto:Louiscai@donherby.com.cn" className="text-sm font-medium text-[var(--color-cool-gray)] hover:text-white transition-colors block">Louiscai@donherby.com.cn</a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8 text-xs font-bold uppercase tracking-widest text-[var(--color-cool-gray)]/60">
          <div>&copy; {new Date().getFullYear()} DonHerby International Freight Forwarding Co., Ltd.</div>
          <div className="flex space-x-8">
             <Link to="/privacy-policy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
             <Link to="/terms-of-service" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </footer>
  );
}
