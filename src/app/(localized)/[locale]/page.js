import Image from 'next/image';
import { CertificateGallery } from '../../../components/certificates';
import { Header, Footer } from '../../../components/chrome';
import { Contact } from '../../../components/contact';
import { StructuredData } from '../../../components/document';
import { ProjectCard, Tags } from '../../../components/project';
import { projects } from '../../../content/projects';
import { copy, pathFor, person, repositories, studioProjects, technologies } from '../../../content/site';
import { metadataFor, personSchema } from '../../../lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return metadataFor(locale);
}

export default async function Home({ params }) {
  const { locale } = await params;
  const t = copy[locale];
  const education = [
    { school: 'OSS Kopilica Split', degree: t.master, project: projects[0] },
    { school: locale === 'hr' ? 'FESB, Sveučilište u Splitu' : 'FESB, University of Split',
      degree: t.undergraduate, project: projects[1] },
  ];
  return (
    <>
      <Header locale={locale} />
      <StructuredData data={personSchema(locale)} />
      <main id="main" tabIndex={-1}>
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="kicker location"><span aria-hidden="true" />{t.location}</p>
            <h1>Bruno<br /><span>Bilandžić</span></h1>
            <p className="role">{t.role}</p>
            <p className="intro">{t.intro}</p>
            <div className="actions">
              <a className="button button-primary" href="#work">{t.explore}</a>
              <a className="button" href="#contact">{t.contactCta}</a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-grid" />
            <div className="art-orbit art-orbit-outer" />
            <div className="art-orbit art-orbit-inner" />
            <div className="art-axis art-axis-x" />
            <div className="art-axis art-axis-y" />
            <div className="art-core"><span>B<span>.</span></span></div>
            <span className="art-node art-node-one" />
            <span className="art-node art-node-two" />
            <span className="art-cross art-cross-one">+</span>
            <span className="art-cross art-cross-two">+</span>
          </div>
        </section>
        <section id="work" className="wrap section">
          <h2 className="section-title">{t.projects}</h2>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} locale={locale} />)}
          </div>
          <div className="repo-section">
            <div className="section-heading">
              <h3>{t.githubWork}</h3>
              <a href={person.github} className="text-link">GitHub</a>
            </div>
            <ul className="lined-list" role="list">
              {repositories.map((repo) => (
                <li key={repo.title}>
                  <div><a className="text-link" href={repo.url}>{repo.title}</a>
                    {repo[locale] && <p>{repo[locale]}</p>}</div>
                  <span className="mono">{repo.technology}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section id="about" className="wrap section about">
          <div className="about-grid">
            <div>
              <h2 className="section-title">{t.education}</h2>
              <ul className="education-list" role="list">
                {education.map(({ school, degree, project }) => (
                  <li key={school}>
                    <p className="kicker">{degree}</p>
                    <h3>{school}</h3>
                    <a className="text-link" href={pathFor(locale, project.slug)}>{project.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <CertificateGallery locale={locale} />
          </div>
          <div className="toolkit">
            <div><h2 className="section-title">{t.toolkit}</h2><p>{t.workflow}</p></div>
            <Tags items={technologies} />
          </div>
        </section>
        <section id="studio" className="wrap section">
          <div className="studio-panel">
            <div>
              <h2 className="studio-title"><strong>POGON</strong> Studio</h2>
              <p>{t.studio}</p>
            </div>
            <div className="studio-projects">
              <h3 className="kicker">{t.studioWork}</h3>
              <ul className="studio-list" role="list">
                {studioProjects.map(({ title, url, image }) => (
                  <li key={title}>
                    <a className="text-link studio-link" href={url}>
                      <Image src={image} alt="" width={1280} height={800} />
                      <span>{title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
