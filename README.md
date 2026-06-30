# NU Utsav — Website

Marketing site for **Utsav**, Northeastern University's undergraduate South Asian
cultural organization — celebrating the cultures of India, Pakistan, Bangladesh,
Bhutan, Sri Lanka, and Nepal.

Built with **Next.js 16** (App Router), **React 19**, and **Tailwind CSS v4**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). A floating **version switcher**
at the bottom of every page lets you jump between the design mocks below.

## Design mocks

The homepage design is still being explored, so several full-page mockups live at
their own routes. All of them pull from the same content in `src/data/`.

| Route | Name | Vibe |
| ----- | ---- | ---- |
| `/`   | Editorial      | The original warm, magazine-style dark hero. |
| `/v2` | Festival Poster | Bold/brutalist — thick borders, giant condensed type, marquees, high-contrast saffron/crimson. |
| `/v3` | Editorial Minimal | Airy and serif-forward, hairline rules, programme-style event list. |
| `/v4` | Modern | Dark gradient + glassmorphism, glowing orbs, gradient initials avatars. |
| `/v5` | Six Nations | Poster style — full-bleed color bands, one per country. |
| `/v6` | Passport | Cultural-passport theme — MRZ cover strip and "entry stamp" cards. |
| `/v7` | Festival Bill | Countries billed like a music-festival lineup, with a greetings marquee. |
| `/v8` | Bold Grid | Swiss-brutalist modular grid; the six nations as a tiled color grid. |

`/v5`–`/v8` lean into the **festival-poster** direction and weave in the six nations
via flags, flag-derived accent colors, and native greetings.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout — fonts (Playfair, Barlow Condensed, Inter) + metadata
│   ├── globals.css       # Tailwind theme tokens + shared animations (marquee, orbs, gradient)
│   ├── page.tsx          # V1 homepage
│   └── v2 … v8/page.tsx  # Design mocks
├── components/
│   ├── Navbar / Hero / About / Calendar / Gallery / Team / Join / Footer.tsx  # V1 sections
│   └── VersionSwitcher.tsx   # Floating mock-to-mock navigation
└── data/
    ├── events.ts         # Flagship + ongoing events
    ├── team.ts           # 2025–26 executive board
    ├── affiliates.ts     # Affiliated student orgs
    └── countries.ts      # The six nations: flag, accent color, native greeting
```

### Design tokens

Colors and fonts are defined in `src/app/globals.css`:

- **Colors:** `cream`, `cream-muted`, `charcoal`, `saffron`, `crimson`, `warm-gray`
- **Fonts:** `font-display` (Playfair Display), `font-condensed` (Barlow Condensed), `font-body` (Inter)

## Notes

These are mockups: image areas are still placeholders and most CTAs link to `#`.

## Scripts

```bash
npm run dev     # start the dev server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```
