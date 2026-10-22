# H. Young — Nuxt 4

Static migration of the Laravel H. Young website. All 14 public Laravel routes retain their URLs and content. Images, local fonts, documents and the existing responsive styling are preserved. The menu, slideshow and cookie choices use Vue instead of jQuery. Google Tag Manager (GTM-5SJQS4) loads after analytics consent.

## Run locally

```sh
cd /Users/susanf/Sites/nuxt-hyoung
npm run dev
```

Open http://localhost:3000. Dependencies are already installed. On a fresh checkout run `npm install` first. The npm scripts use a project-local Node 24 binary, so the existing system Node 20 need not be changed. Alternatively, `.nvmrc` selects Node 24 for nvm users.

## Check and deploy

```sh
npm run typecheck
npm run generate
```

Deploy `.output/public` to static hosting. No PHP, Laravel, database or application server is required. `npm run build` is also available for Node server hosting; `npm run preview` previews the output.

Set `NUXT_PUBLIC_SITE_URL` before building if the production hostname differs from `https://www.hyoung.co.uk` (see `.env.example`). Nuxt SEO provides canonical URLs, sitemap, robots output and structured data. Every page has its own title, description and social metadata. Social previews use an existing photograph; dynamic OG rendering is disabled because the site is static.

## Nuxt SEO Pro

`@nuxtjs/seo` is installed and configured with private `runtimeConfig.seoProKey`. Add your paid Pro key to the ignored `.env` file:

```dotenv
NUXT_SEO_PRO_KEY=your-key-here
```

Restart the dev server after editing `.env`. The installed module reads this key during production builds and sends the key, site URL/name and SEO module details to Nuxt SEO Pro for verification. Run `npm run generate` after adding the key to trigger that integration. The key is not placed in public runtime config. Pro activation has not been verified without your full key.

## Content notes

The original `/our-businesses` page repeats Madison's content; this migration preserves that content. The unregistered Tony Pryce Blade template was not published as a new route. Existing business details, legal statements, map embed and external links are retained as supplied; review their currency separately before launch.

## Verification

Nuxt 4.6.2 and Nuxt SEO 6.0.1 installed. `npm run typecheck` and `npm run generate` pass. All 14 generated pages have valid local page/asset links; sitemap.xml and robots.txt are generated. Browser checks cover the homepage and client navigation. The link checker reports no errors and one stylistic warning for an existing document filename containing underscores; the document URL is preserved.

The installation audit reports 22 high advisories propagated through build dependencies, with root advisories in braces 3.0.3 and node-forge 1.4.0. Those are the newest published versions at migration time; audit's proposed parent-package downgrades were not applied. Recheck upstream fixes before future builds. Static hosting deploys only `.output/public`, without the Node dependency tree.
