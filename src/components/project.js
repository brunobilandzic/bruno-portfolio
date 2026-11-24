import Image from 'next/image';
import { copy, pathFor } from '../content/site';

export function ProjectVisual({ project, locale, screenshot, eager = false }) {
  return (
    <div className={`project-visual visual-${project.slug}`}>
      {screenshot ? (
        <Image src={screenshot.src} alt={screenshot.alt[locale]} width={screenshot.width}
          height={screenshot.height} loading={eager ? 'eager' : 'lazy'} />
      ) : (
        <div className="preview-label">
          <span className="image-symbol" aria-hidden="true" />
          {copy[locale].missing}
        </div>
      )}
    </div>
  );
}

export function ProjectCard({ project, locale }) {
  const t = copy[locale];
  const data = project[locale];
  return (
    <article className={`project-card card-${project.slug}`}>
      <ProjectVisual project={project} locale={locale} screenshot={project.screenshots[0]} />
      <div className="project-copy">
        <p className="kicker">{data.category}</p>
        <h3>{project.title}</h3>
        <p>{data.intro}</p>
        <div className="actions">
          {project.demo && <a className="button button-small button-primary" href={project.demo}
            aria-label={`${t.demo} · ${project.title}`}>{t.demo}</a>}
          <a className="button button-small" href={pathFor(locale, project.slug)}
            aria-label={`${t.caseStudy} · ${project.title}`}>{t.caseStudy}</a>
        </div>
      </div>
    </article>
  );
}

export function Tags({ items }) {
  return <ul className="tags" role="list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
