import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const config = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default function configure(phase) {
  const developmentHost = process.env.DEV_ORIGIN_HOST?.trim();
  return phase === PHASE_DEVELOPMENT_SERVER && developmentHost
    ? { ...config, allowedDevOrigins: [developmentHost] }
    : config;
}
