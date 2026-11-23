import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { DocumentLanguage } from './document-language';
import { hasSiteUrl, siteUrl } from '../lib/seo';
import '../app/globals.css';

export const sharedMetadata = {
  metadataBase: siteUrl,
  icons: { icon: '/icon.png' },
  robots: { index: hasSiteUrl, follow: hasSiteUrl },
  // Keep automatic translation from rewriting the document before hydration.
  other: { google: 'notranslate' },
};

export function Document({ lang, children }) {
  // Browser tools can rewrite root attributes before React hydrates.
  return (
    <html lang={lang} translate="no" suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <DocumentLanguage lang={lang} />
        {children}
      </body>
    </html>
  );
}

export function StructuredData({ data }) {
  return <script type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...data }).replace(/</g, '\\u003c') }} />;
}
