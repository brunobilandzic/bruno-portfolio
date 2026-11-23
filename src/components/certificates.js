'use client';

import Image from 'next/image';
import { useState } from 'react';
import { certificates, copy } from '../content/site';

export function CertificateGallery({ locale }) {
  const t = copy[locale];
  const [index, setIndex] = useState(0);
  const count = certificates.length;
  const { title, year, image } = certificates[index];

  function move(offset) {
    setIndex((current) => (current + offset + count) % count);
  }

  return (
    <section aria-labelledby="certificates-title">
      <h2 id="certificates-title" className="section-title">{t.certificates}</h2>
      <div className="certificate-gallery">
        <figure>
          <a className="certificate-image text-link" href={image} target="_blank" rel="noopener"
            aria-label={`${t.certificateOpen} · ${t.certificateNewTab}`}>
            <Image src={image} alt="" width={1600} height={1190} />
            <span>{t.certificateOpen}</span>
          </a>
          <figcaption className="certificate-caption" aria-live="polite" aria-atomic="true">
            <span lang="en">{title}</span>
            <span className="mono">Udemy · <time dateTime={String(year)}>{year}</time></span>
            <span className="sr-only">{index + 1} {t.certificatePosition} {count}</span>
          </figcaption>
        </figure>
        <div className="certificate-controls">
          <button type="button" className="button button-small" onClick={() => move(-1)}>{t.certificatePrevious}</button>
          <span className="mono" aria-hidden="true">{index + 1} / {count}</span>
          <button type="button" className="button button-small" onClick={() => move(1)}>{t.certificateNext}</button>
        </div>
      </div>
    </section>
  );
}
