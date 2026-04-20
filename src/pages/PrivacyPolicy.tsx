import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  
  return (
    <main className="w-full bg-[#f8fafc] text-[var(--color-navy)] min-h-screen pt-32 pb-24">
      <SEO 
        title={`Privacy Policy | DonherBy`} 
        description="Privacy Policy for DonherBy Logistics." 
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8 drop-shadow-sm">{t('footer.privacy') || 'Privacy Policy'}</h1>
          
          <div className="text-slate-600 space-y-6 leading-relaxed font-medium">
            <p className="text-sm text-slate-400">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-bold text-[var(--color-navy)] uppercase tracking-wider mt-10">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with our operations team. This may include your name, email address, phone number, company details, and the contents of your messages.
            </p>

            <h2 className="text-xl font-bold text-[var(--color-navy)] uppercase tracking-wider mt-10">2. How We Use Your Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our global logistics services.</li>
              <li>Process your transportation requests and deliver customs compliance updates.</li>
              <li>Respond to your comments, questions, and customer service requests.</li>
              <li>Communicate with you about strategic logistics solutions, technical alerts, and administrative messages.</li>
            </ul>

            <h2 className="text-xl font-bold text-[var(--color-navy)] uppercase tracking-wider mt-10">3. Information Sharing and Disclosure</h2>
            <p>
              We do not sell your personal data. We may share your information only with our trusted third-party partners (such as ocean carriers, airlines, and local customs authorities) strictly for the purpose of executing the agreed-upon transportation services.
            </p>

            <h2 className="text-xl font-bold text-[var(--color-navy)] uppercase tracking-wider mt-10">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal data from unauthorized access, loss, or alteration. However, no data transmission over the internet or global supply chain management system can be guaranteed to be 100% secure.
            </p>

            <h2 className="text-xl font-bold text-[var(--color-navy)] uppercase tracking-wider mt-10">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact our administrative team at <strong>Louiscai@donherby.com.cn</strong>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
