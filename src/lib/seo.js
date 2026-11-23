import { copy, locales, pathFor, person } from '../content/site';

export const siteUrl = new URL(process.env.SITE_URL || 'http://localhost:3000');
export const hasSiteUrl = Boolean(process.env.SITE_URL);
export const absolute = (path) => new URL(path, siteUrl).href;

export function alternatesFor(locale, slug) {
  return {
    canonical: pathFor(locale, slug),
    languages: {
      ...Object.fromEntries(locales.map((lang) => [lang, pathFor(lang, slug)])),
      'x-default': slug ? pathFor('hr', slug) : '/',
    },
  };
}

export function metadataFor(locale, project) {
  const title = project
    ? `${project.title} · ${copy[locale].projectTitle} | ${person.name}`
    : `${person.name} | ${copy[locale].role}`;
  const description = project ? project[locale].intro : copy[locale].intro;
  const alternates = alternatesFor(locale, project?.slug);
  const image = { url: '/social.png', width: 1200, height: 630, alt: copy[locale].socialAlt };

  return {
    title,
    description,
    alternates,
    openGraph: {
      title, description, url: alternates.canonical, siteName: person.name,
      type: 'website',
      locale: locale === 'hr' ? 'hr_HR' : 'en_US',
      alternateLocale: [locale === 'hr' ? 'en_US' : 'hr_HR'],
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export function personSchema(locale) {
  return {
    '@type': 'Person',
    '@id': absolute('/#bruno'),
    name: person.name,
    url: absolute(pathFor(locale)),
    sameAs: [person.github],
    jobTitle: copy[locale].role,
    homeLocation: { '@type': 'Place', name: copy[locale].location },
  };
}
