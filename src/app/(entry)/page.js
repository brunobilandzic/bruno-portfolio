import { Mark } from '../../components/chrome';
import { copy, person } from '../../content/site';
import { alternatesFor, metadataFor } from '../../lib/seo';

const localized = metadataFor('hr');
const description = 'Osobni portfolio Brune Bilandžića, softverskog inženjera i web programera iz Splita. Dostupan na hrvatskom i engleskom.';

export const metadata = {
  ...localized,
  title: person.name,
  description,
  alternates: { ...alternatesFor('hr'), canonical: '/' },
  openGraph: { ...localized.openGraph, title: person.name, description, url: '/' },
  twitter: { ...localized.twitter, title: person.name, description },
};

export default function Entry() {
  return (
    <main className="wrap entry">
      <Mark />
      <h1>{person.name}</h1>
      <p>{copy.hr.role}</p>
      <div className="actions">
        {/* Language selection loads a new document with the correct html lang. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="button button-primary" href="/hr/" hrefLang="hr" lang="hr">Hrvatski</a>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="button" href="/en/" hrefLang="en" lang="en">English</a>
      </div>
    </main>
  );
}
