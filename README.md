# Pankaj Jagadale — Portfolio

A personal portfolio built around a terminal/IDE aesthetic: warm near-black
surfaces, a single electric-blue accent, mono micro-labels, bento grids, and
motion-heavy but restrained interactions.

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3 + shadcn/ui (Radix primitives)
- **Animation:** Framer Motion 12
- **Icons:** Lucide React
- **Deploy:** Cloudflare Pages (or any static host)

## Pages

- `/` — one-page home: hero bento, about & education, skills, experience,
  featured projects, achievements, services
- `/about` — extended profile, journey, education, milestones
- `/projects` — filterable project archive with detail modals
- `/resume` — experience, education, skills, achievements + PDF download

Contact lives in the footer (`#contact`) with email and social links.

## Accessibility

A compact display-settings button (bottom right) provides:

- **High Contrast** — solid surfaces, higher-contrast borders, no translucency
- **Large Text** — scales the whole rem-based type system (16px → 18px root)

Reduced motion is detected automatically from `prefers-reduced-motion` and
disables the particle canvas, ambient cursor, and heavy transitions. Settings
persist in `localStorage`.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & deploy

```bash
npm run build   # static output in ./out
```

Cloudflare Pages settings:

- Build command: `npm run build`
- Build output directory: `out`
- Environment (optional): `NEXT_PUBLIC_SITE_URL=https://your-domain.com`

Set `NEXT_PUBLIC_SITE_URL` before building so metadata, the sitemap, and the robots file use your real domain.

## Attribution

The visual system and base implementation are adapted from
[Viraj Mavani's portfolio](https://github.com/Viraj-Mavani/portfolio), which is
MIT licensed (see `LICENSE`). All personal content, projects, copy, and assets
in this repository belong to Pankaj Jagadale.
