import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export default function SEO({ title, description, keywords }: SEOProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* i18n Alternate Links for Language/Region Targeting */}
      <link rel="alternate" hrefLang="en" href={window.location.href} />
      <link rel="alternate" hrefLang="zh" href={window.location.href} />
      <link rel="alternate" hrefLang="x-default" href={window.location.href} />
    </Helmet>
  );
}
