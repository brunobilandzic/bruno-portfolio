import next from 'eslint-config-next/core-web-vitals';

const config = [
  { ignores: ['.next/**', 'out/**', '.npm-cache-source/**'] },
  ...next,
];

export default config;
