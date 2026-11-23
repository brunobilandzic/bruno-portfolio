import { copy, locales, pathFor, person } from '../content/site';

const anchors = ['work', 'about', 'studio', 'contact'];

export function Mark() {
  return <span className="mark" aria-hidden="true">B<span>.</span></span>;
}

export function LanguageNav({ locale, slug }) {
  return (
    <nav className="language" aria-label={copy[locale].language}>
      {locales.map((lang) => (
        <a key={lang} href={pathFor(lang, slug)} lang={lang} hrefLang={lang}
          aria-label={lang === 'hr' ? 'HR · Hrvatski' : 'EN · English'}
          aria-current={locale === lang ? 'page' : undefined}>
          {lang.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}

export function Header({ locale, slug }) {
  const t = copy[locale];
  const home = pathFor(locale);
  return (
    <>
      <a className="skip" href="#main">{t.skip}</a>
      <header className="topbar">
        <div className="wrap header-grid">
          <a className="brand" href={home}><Mark /><span>{person.name}</span></a>
          <nav className="main-nav" aria-label={t.navigation}>
            {anchors.map((anchor, i) => (
              <a key={anchor} href={`${slug ? home : ''}#${anchor}`}>{t.nav[i]}</a>
            ))}
          </nav>
          <LanguageNav locale={locale} slug={slug} />
        </div>
      </header>
    </>
  );
}

export function Footer({ locale }) {
  return (
    <footer className="footer">
      <div className="wrap flex flex-wrap items-center justify-between gap-4">
        <a className="brand" href={pathFor(locale)}><Mark /><span>{person.name}</span></a>
        <p>{copy[locale].location}</p>
        <a className="text-link" href={person.github}>GitHub</a>
      </div>
    </footer>
  );
}
