'use client';

import { useLayoutEffect } from 'react';

export function DocumentLanguage({ lang }) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (root.lang !== lang) root.lang = lang;
  }, [lang]);

  return null;
}
