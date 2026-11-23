'use client';

import { useState } from 'react';
import { copy, person } from '../content/site';

export function Contact({ locale }) {
  const t = copy[locale];
  const [status, setStatus] = useState('idle');

  async function submit(event) {
    event.preventDefault();
    if (status === 'sending') return;

    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    fields.message = fields.message.trim();
    fields._url = window.location.origin + window.location.pathname;

    if (!fields.message) {
      setStatus('empty');
      form.elements.message.focus();
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${person.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) {
        setStatus('error');
        return;
      }
      const { success } = await response.json();
      if (success !== true && success !== 'true') {
        setStatus('error');
        return;
      }
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="wrap section contact">
      <div>
        <h2 id="contact-title">{t.contact}</h2>
        <p>{t.contactIntro}</p>
        <address className="contact-links">
          <a className="text-link" href={`mailto:${person.email}`}>{person.email}</a>
          <a className="text-link" href={person.github}>GitHub</a>
        </address>
      </div>
      <form className="contact-form" action={`https://formsubmit.co/${person.email}`}
        method="post" onSubmit={submit} onInvalid={() => setStatus('invalid')}
        aria-labelledby="contact-title" aria-describedby="contact-privacy">
        <input type="hidden" name="_subject" value={t.contactSubject} />
        <div className="contact-fields">
          <label htmlFor="contact-name">{t.contactName}
            <input id="contact-name" type="text" name="name" autoComplete="name" maxLength={100} />
          </label>
          <label htmlFor="contact-email">{t.contactEmail}
            <input id="contact-email" type="email" name="email" autoComplete="email" maxLength={254} required />
          </label>
        </div>
        <label htmlFor="contact-message">{t.contactMessage}
          <textarea id="contact-message" name="message" rows={5} maxLength={5000} required
            aria-invalid={status === 'empty' || undefined} />
        </label>
        <div className="contact-submit">
          <button className="button button-primary" type="submit" disabled={status === 'sending'}>
            {t.contactSubmit}
          </button>
          <p className="contact-status" role="status">{t.contactStatus[status]}</p>
        </div>
        <p id="contact-privacy">{t.contactPrivacy}{' '}
          <a className="text-link" href="https://formsubmit.co/privacy.pdf">{t.contactPrivacyLink}</a>
        </p>
      </form>
    </section>
  );
}
