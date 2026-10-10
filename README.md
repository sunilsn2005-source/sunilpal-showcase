# sunil-pal-portfolio

A dark, accessible professional portfolio for Sunil Pal, an aspiring AI/ML engineer and final-year B.Tech AIML student graduating in 2027.

## Stack
React 19, TypeScript, TanStack Start/Router, Vite, Tailwind CSS v4, Lucide, and reusable shadcn controls. Lightweight CSS transitions respect reduced-motion preferences. No secret keys or environment variables are needed.

## Development
Install Bun, clone your connected repository, and run:
```sh
bun install
bun run dev
```
The local port is printed by Vite. For production and tests:
```sh
bun run build
bun run test
```
Do not edit the generated route tree. Routes are authored under `src/routes`.

## Editing content
All profile details, social links, skills, projects, and workshop entries are in `src/data/portfolio.ts`. Null values represent missing information. Major content pages live at `/about`, `/skills`, `/projects`, `/education`, `/certifications`, `/profiles`, and `/contact`. Project details use `/projects/:slug`.

## Missing information
- Professional photo and valid resume PDF (download stays disabled until supplied).
- Institution name; optional CGPA and completed coursework.
- Both projects: actual technologies, implemented features, contribution, screenshots, repository and live-demo URLs.
- Smart Attendance System: verified category and specific problem addressed.
- Workshops: official titles, dates, issuing organizations, course/workshop format, certificate images or credential links.
- LeetCode URL confirmation: the brief supplies both `sunil_pal` and `PALSUN`; the repeated Coding Profiles URL `PALSUN` is currently used.
- Optional internship, achievements, hackathons, or open-source details are omitted until provided.

Project visuals are labeled concept illustrations, not screenshots. The processor illustration is generated abstract artwork, not a fabricated portrait. No affiliation with Razorpay or real payment functionality is implied.

## GitHub and deployment
Use Lovable’s GitHub connection to create/sync a repository named `sunil-pal-portfolio`. Account authorization must be completed by the owner. Publishing from Lovable is the native deployment option and is not yet performed.

This is a full-stack TanStack Start application, not a plain Vite SPA: do not deploy it with a static `dist` preset or SPA fallback. For Vercel or Netlify, configure their current TanStack Start/Nitro server adapter and host-specific build preset before deploying through their GitHub integration. External deployment and adapter configuration are not completed or verified here. Retain direct-route SSR support. Canonical and Open Graph paths are self-referencing relative paths; set an actual production domain after hosting is chosen. No placeholder domain or sitemap is included.

## Pre-deployment checklist
- [ ] Supply missing resume, photo, education, project, and workshop information.
- [ ] Confirm the correct LeetCode URL.
- [ ] Replace concept project illustrations with verified screenshots if available.
- [ ] Open all navigation routes and direct project URLs.
- [ ] Check all supplied social links and encoded email action.
- [ ] Verify PDF download with the supplied resume.
- [ ] Test keyboard navigation, visible focus, mobile menu, and reduced motion.
- [ ] Check mobile, tablet, and desktop for overflow and readable text.
- [ ] Run automated tests and production build.
- [ ] Connect GitHub and select/authorize a production host.
- [ ] Verify server routing on the production host and review social metadata.
- [ ] Add a sitemap once the final public domain is known.
