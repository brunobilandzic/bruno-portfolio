import { notFound } from 'next/navigation';
import { Document, sharedMetadata } from '../../../components/document';
import { locales } from '../../../content/site';

export const metadata = sharedMetadata;
export const dynamicParams = false;
export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default async function Layout({ children, params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  return <Document lang={locale}>{children}</Document>;
}
