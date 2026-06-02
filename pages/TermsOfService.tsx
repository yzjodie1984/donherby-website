import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

export default function TermsOfService() {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-[#f8fafc] text-[var(--color-navy)] min-h-screen pt-32 pb-24">
      <SEO 
        title={`Terms of Service | DonherBy`} 
        description="Terms of Service for DonherBy Logistics." 
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8 drop-shadow-sm">{t('footer.terms') || 'Terms of Service'}</h1>
          
          <div className="text-slate-600 space-y-6 leading-relaxed font-medium">
            <p className="text-sm text-slate-400">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-bold text-[var(--color-navy)] uppercase tracking-wider mt-10">1. Acceptance of Terms</h2>
            <p>
              By accessing our website and utilizing the logistics services provided by DonherBy International Freight Forwarding Co., Ltd. ("we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
            </p>

            <h2 className="text-xl font-bold text-[var(--color-navy)] uppercase tracking-wider mt-10">2. Service Description</h2>
            <p>
              DonherBy provides strategic boutique logistics, multimodal forwarding, project logistics (OOG), and aviation asset transportation. Our estimates, routes, and transit times are based on the best information available at the time of quotation and are subject to dynamic changes based on global infrastructure constraints, weather, and carrier capacity.
            </p>

            <h2 className="text-xl font-bold text-[var(--color-navy)] uppercase tracking-wider mt-10">3. User Responsibilities</h2>
            <p>
              You agree to provide accurate, complete, and legally compliant documentation for all transported goods. You are solely responsible for ensuring your cargo complies with all international export/import laws, embargoes, and safety regulations.
            </p>

            <h2 className="text-xl font-bold text-[var(--color-navy)] uppercase tracking-wider mt-10">4. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, DonherBy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, arising from delays, force majeure events, or actions of third-party carriers/customs authorities. All cargo is handled subject to the standard conditions of carriage (e.g., Bill of Lading or Air Waybill limits).
            </p>

            <h2 className="text-xl font-bold text-[var(--color-navy)] uppercase tracking-wider mt-10">5. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms of Service at any time. Material changes will be posted on this page. Your continued use of our services following any changes constitutes acceptance of those changes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
