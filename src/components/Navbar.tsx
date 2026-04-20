import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.expertise'), href: '/expertise' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 text-white ${
        isScrolled || location.pathname !== '/' ? 'bg-[var(--color-navy)]/90 backdrop-blur-md shadow-md h-16 md:h-20 border-b border-white/5' : 'bg-transparent h-24 md:h-32 border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex h-full items-center gap-10">
            <Link to="/" className="flex h-full z-50 items-center justify-center hover:opacity-90 transition-opacity">
              <div className="h-full overflow-hidden flex items-center">
                <img src="/logo.png" alt="DonHerby Logo" className={`w-auto max-w-none object-contain ${isScrolled || location.pathname !== '/' ? 'h-[100%] md:h-[120%]' : 'h-[135%] md:h-[150%]'}`} referrerPolicy="no-referrer" />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isHash = link.href.includes('#') && link.href.startsWith('/');
                const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
                const textStyle = isActive ? "text-[var(--color-accent-blue)]" : "text-white/80 hover:text-white";
                const borderStyle = isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100";

                return (
                  <div key={link.name} className="relative py-2 group">
                    {isHash ? (
                      <a href={link.href} className={`flex items-center text-sm font-bold uppercase tracking-wider transition-colors ${textStyle}`}>
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.href} className={`flex items-center text-sm font-bold uppercase tracking-wider transition-colors ${textStyle}`}>
                        {link.name}
                      </Link>
                    )}
                    <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-accent-blue)] transform origin-left transition-transform duration-300 ease-out ${borderStyle}`} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 z-50">
            <div 
              onClick={toggleLanguage}
              className="flex items-center text-sm font-bold tracking-wider opacity-80 hover:opacity-100 cursor-pointer transition-opacity"
            >
              <Globe2 className="w-4 h-4 mr-1.5" />
              <span className={i18n.language === 'en' ? 'text-white' : 'text-white/50'}>EN</span>
              <span className="mx-1.5 opacity-40">|</span>
              <span className={i18n.language === 'zh' ? 'text-white' : 'text-white/50'}>中文</span>
            </div>
            <Link to="/contact" className="bg-white hover:bg-[var(--color-cool-gray)] hover:-translate-y-0.5 hover:shadow-lg text-[var(--color-navy)] px-6 py-2.5 rounded-sm text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-sm">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2 text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-[var(--color-navy)] text-white shadow-xl py-6 px-6 flex flex-col space-y-4 md:hidden border-t border-white/10"
            >
              {navLinks.map((link) => {
                const isHash = link.href.includes('#') && link.href.startsWith('/');
                const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
                const textStyle = isActive ? "text-[var(--color-accent-blue)] translate-x-3" : "text-white hover:text-[var(--color-accent-blue)] hover:translate-x-2";

                return isHash ? (
                   <a 
                    key={link.name} 
                    href={link.href}
                    className={`text-lg font-bold uppercase tracking-wider transition-all block ${textStyle}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.href}
                    className={`text-lg font-bold uppercase tracking-wider transition-all block ${textStyle}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                <div 
                  onClick={toggleLanguage}
                  className="flex items-center justify-center text-sm font-bold tracking-wider cursor-pointer"
                >
                   <Globe2 className="w-4 h-4 mr-2" /> 
                   <span className={i18n.language === 'en' ? 'text-white' : 'text-white/50'}>EN</span>
                   <span className="mx-2">/</span>
                   <span className={i18n.language === 'zh' ? 'text-white' : 'text-white/50'}>中文</span>
                </div>
                <Link to="/contact" className="bg-white text-center text-[var(--color-navy)] px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider block" onClick={() => setMobileMenuOpen(false)}>
                  {t('nav.contact')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
}
