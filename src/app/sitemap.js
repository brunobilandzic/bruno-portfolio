import { projects } from '../content/projects';
import { locales, pathFor } from '../content/site';
import { absolute, hasSiteUrl } from '../lib/seo';

export const dynamic = 'force-static';

export default function sitemap() {
  if (!hasSiteUrl) return [];

  const homePages = locales.map((locale) => ({
    url: absolute(pathFor(locale)),
    alternates: { languages: homeAlternates() },
  }));
  const projectPages = projects.flatMap(({ slug }) => locales.map((locale) => ({
    url: absolute(pathFor(locale, slug)),
    alternates: { languages: {
      ...Object.fromEntries(locales.map((language) => [language, absolute(pathFor(language, slug))])),
      'x-default': absolute(pathFor('hr', slug)),
    } },
  })));
  return [{ url: absolute('/'), alternates: { languages: homeAlternates() } }, ...homePages, ...projectPages];
}

function homeAlternates() {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, absolute(pathFor(locale))])),
    'x-default': absolute('/'),
  };
}
