# Bruno Bilandžić — Portfolio

A Croatian and English personal portfolio built with the Next.js App Router, JavaScript and Tailwind CSS. Both homepages and all six project pages are generated at build time.

## Run locally

Requires Node.js 22 or newer. Node.js 24 is recommended.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000) to choose a language. Run `npm run lint` and `npm run build` to check the source and export the production site to `out/`.

For a LAN preview, set `DEV_ORIGIN_HOST` in `.env.development.local` to the exact hostname or IP used in the browser, without the scheme or port. Restart the development server after changing it so Next.js can serve its development JavaScript to that origin.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/app/(entry)/` | Static language selection at `/` |
| `src/app/(localized)/[locale]/` | Croatian and English homepages and case studies |
| `src/app/globals.css` | Tailwind entry, design tokens and responsive styles |
| `src/components/` | Shared navigation, layout and project presentation |
| `src/content/site.js` | Contact details, translations, certifications and selected work |
| `src/content/projects.js` | Project copy, links, technology stacks and screenshots |
| `src/lib/seo.js` | Canonicals, language alternates, social metadata and Person data |
| `public/` | Local images, social preview and site icon |

## Update the content

Edit both `en` and `hr` entries when changing localized content. Each project slug produces matching routes in both languages. To add screenshots, place optimized WebP files in `public/projects/` and add an entry to the project's `screenshots` array with `src`, `width`, `height` and `alt: { en, hr }`. The first screenshot appears on the homepage and all entries appear in the case study.

Certificate captions and image paths are stored in `src/content/site.js`. The gallery serves the images from `public/certificates/`. Project descriptions and implementation details draw from the supplied brief and the public [FVTracker](https://github.com/brunobilandzic/fvtracker), [SpomenarApp](https://github.com/brunobilandzic/spomenarapp), [Driving School](https://github.com/brunobilandzic/driving-school) and [Vegme](https://github.com/brunobilandzic/vegme) repositories.

### Contact form

Both language versions send inquiries to `person.email` through FormSubmit. The visitor's email is used as the reply-to address. After deployment, submit a test inquiry from the public site and confirm the activation email in Outlook. Then send a second inquiry and verify delivery and reply-to. With JavaScript, the form shows submission status inline. Changing the recipient requires activating the form for the new inbox. [FormSubmit setup](https://formsubmit.co/)

## Deploy to Cloudflare Pages

1. Push the project source and lockfile to a Git repository and import it in **Workers & Pages → Create application → Pages**.
2. Choose **Next.js (Static HTML Export)** and set the build command to `npm run build` and the build output directory to `out`.
3. Set `NODE_VERSION` to `24` and set `SITE_URL` to the public origin, such as `https://your-project.pages.dev`. For local production checks, copy `.env.example` to `.env.local` and edit the origin. Builds without `SITE_URL` use localhost metadata, mark pages as noindex and emit an empty sitemap.
4. Deploy. When you attach a custom domain, update `SITE_URL` and rebuild to regenerate canonicals, hreflang, Open Graph URLs and the sitemap.

For a Direct Upload project, build locally with the intended `SITE_URL` and upload `out/` as the site files. See the [Cloudflare Pages static export guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/).
