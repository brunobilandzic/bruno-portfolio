import { notFound } from 'next/navigation';
import { Header, Footer } from '../../../../../components/chrome';
import { StructuredData } from '../../../../../components/document';
import { ProjectVisual, Tags } from '../../../../../components/project';
import { projects } from '../../../../../content/projects';
import { copy, pathFor } from '../../../../../content/site';
import { absolute, metadataFor, personSchema } from '../../../../../lib/seo';

export const dynamicParams = false;
export const generateStaticParams = () => projects.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project || !copy[locale]) notFound();
  return metadataFor(locale, project);
}

export default async function ProjectPage({ params }) {
  const { locale, slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project || !copy[locale]) notFound();

  const t = copy[locale];
  const data = project[locale];
  const url = absolute(pathFor(locale, slug));
  const schema = {
    '@type': project.github ? 'SoftwareSourceCode' : 'SoftwareApplication',
    name: project.title, description: data.intro, url, inLanguage: locale,
    author: personSchema(locale),
    ...(project.github && { codeRepository: project.github, programmingLanguage: project.technologies?.[0] }),
  };

  return (
    <>
      <Header locale={locale} slug={slug} />
      <StructuredData data={schema} />
      <main id="main" tabIndex={-1} className="wrap">
        <article className="case-study">
          <header className="case-header">
            <a className="text-link back" href={`${pathFor(locale)}#work`}>{t.back}</a>
            <p className="kicker">{data.category}</p>
            <h1>{project.title}</h1>
            <p className="case-intro">{data.intro}</p>
            {data.demoDescription && <p className="case-demo-description">{data.demoDescription}</p>}
            {(project.demo || project.github) && <div className="actions">
              {project.demo && <a className="button button-primary" href={project.demo}>{t.demo}</a>}
              {project.github && <a className="button" href={project.github}>GitHub</a>}
            </div>}
          </header>
          <section className="case-gallery" aria-label={t.screenshots}>
            {project.screenshots.length
              ? project.screenshots.map((screenshot, index) => <ProjectVisual key={screenshot.src}
                project={project} locale={locale} screenshot={screenshot} eager={index === 0} />)
              : <ProjectVisual project={project} locale={locale} />}
          </section>
          <div className="case-details">
            {data.context && <section><h2>{t.context}</h2><p>{data.context}</p></section>}
            {data.problem && <section><h2>{t.problem}</h2><p>{data.problem}</p></section>}
            {data.features && <section><h2>{t.features}</h2>
              <ul className="feature-list">{data.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </section>}
            {project.technologies && <section><h2>{t.toolkit}</h2><Tags items={project.technologies} /></section>}
            {data.implementation && <section><h2>{t.implementation}</h2><p>{data.implementation}</p></section>}
          </div>
        </article>
        <nav className="case-next" aria-label={t.otherProjects}>
          <h2>{t.otherProjects}</h2>
          <div className="actions">{projects.filter((item) => item.slug !== slug).map((item) => (
            <a key={item.slug} className="button" href={pathFor(locale, item.slug)}>{item.title}</a>
          ))}</div>
        </nav>
      </main>
      <Footer locale={locale} />
    </>
  );
}
