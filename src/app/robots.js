import { absolute, hasSiteUrl } from '../lib/seo';

export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    ...(hasSiteUrl && { sitemap: absolute('/sitemap.xml') }),
  };
}
