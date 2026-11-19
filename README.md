# MovieMitra

A responsive dark-cinematic movie discovery website built with Next.js App Router, React, TypeScript and Tailwind CSS v4.

## Included
- Responsive homepage and movie catalogue demo
- Search and category filters
- Movie detail routes
- About, Contact, Privacy Policy, Cookie Policy, Terms of Use, Disclaimer, Copyright & Content Removal, and Editorial Policy pages
- Footer links to all important trust/legal pages
- SEO metadata, robots.txt and sitemap.xml
- `public/ads.txt` starter comments (add only the exact record supplied by AdSense)
- Vercel deployment-ready

## Run locally
1. Install Node.js 20.9 or newer.
2. Extract this project and open the `moviemitra` folder in VS Code.
3. Copy `.env.example` to `.env.local`.
4. Set your real canonical website URL and a monitored contact email.
5. Run:

```bash
npm install
npm run dev
```

6. Visit http://localhost:3000

To test a production build:

```bash
npm run build
npm run start
```

## Deploy to Vercel
1. Push the contents of this folder to a GitHub repository.
2. Import the repository at https://vercel.com/new.
3. Add these Environment Variables in Vercel Project Settings:
   - `NEXT_PUBLIC_SITE_URL` = your real canonical HTTPS domain, e.g. `https://moviemitra.in`
   - `NEXT_PUBLIC_CONTACT_EMAIL` = a real monitored email address
4. Deploy. Confirm `/robots.txt`, `/sitemap.xml` and `/ads.txt` load on the deployed domain.
5. If you change environment variables, redeploy.

## AdSense readiness: important
Legal pages help with transparency and trust, but **they do not guarantee AdSense approval**. Google reviews the entire live site. It expects original, useful content, clear navigation, a good user experience, ownership/verification and compliance with current programme and publisher policies.

Before applying:
- Replace every fictional demo movie, rating, synopsis and image with accurate content you have the rights to publish.
- Publish substantial original articles/reviews that add analysis, reporting, context or first-hand value. Do not scrape or lightly rewrite other sites.
- Verify facts with reliable sources and show corrections/updates where appropriate.
- Complete the owner/business name, real domain, and real contact email in the About, Privacy and Contact information.
- Review Privacy Policy and Cookie Policy against the actual data flows, analytics, embeds, affiliate links and advertising vendors you install. Remove statements that are not true for your setup.
- If using Google AdSense, add Google's required disclosures about cookies, identifiers, data use and third-party vendors. For visitors in the EEA, UK and Switzerland, use a Google-certified CMP where required by Google's current consent policies. A homemade banner or this policy page is not a substitute for a compliant CMP.
- Add your site in AdSense and complete its ownership verification/review process. Approval and review time are controlled by Google.
- Add only the exact `ads.txt` seller record supplied by your AdSense account. Never use the example placeholder record.
- Ensure all posters, stills, logos, trailers, fonts and other assets are original, licensed, permissioned or otherwise legally usable. Movie data API terms may prohibit commercial use unless you obtain the appropriate licence.
- Do not imply that MovieMitra offers movie downloads or streams. Do not use deceptive domains, download buttons, fake play controls, forced redirects or misleading ad placements.
- Test all navigation, mobile layouts, page speed, broken links and contact details before applying.

## Legal notice
The legal and policy pages are starter templates for a small independent movie information website, not legal advice. They must be reviewed and customised to the actual owner, location, technologies, vendors and applicable laws before launch. Publishing generic policy text alone does not make a site compliant.

## Demo content
The catalogue currently contains fictional demonstration entries. This site does not host or provide downloads or streams of copyrighted films.
