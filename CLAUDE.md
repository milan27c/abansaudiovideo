@AGENTS.md

# Abans IT — Commercial Display & AV Solutions

This prototype hosts the corporate index plus a deep landing page for **Commercial Display and Professional Audio & Visual Solutions** under the Corporate Solutions section of Abans Laptops / Abans IT.

- **Stack:** Next.js 16 (App Router, Turbopack) + React 19 + Tailwind CSS v4 + TypeScript.
- **Visual reference (must match):** https://abansit.lk/corporate (3-card index) and https://abansit.lk/hardware-solutions (deep page template — banner, sections, footer). PDF screenshots of both live in `/uploads`.
- **Layout source:** `AV and CD website.pptx` for section rhythm and grid arrangement; `CD and AV landing page.docx` for copy and stats.
- **Routes:**
  - `/` → redirects to `/corporate`
  - `/corporate` → 3-card index (Hardware Solutions, Enterprise Solutions, Audio Visual & Commercial Display Solutions)
  - `/corporate-solutions/commercial-display-av` → deep AV+CD landing (mirrors `/hardware-solutions` structure)

> Next.js 16 is configured with Turbopack by default. Tailwind v4 uses the new `@theme` block inside `app/globals.css` — there is NO `tailwind.config.js`. Before touching Next.js APIs, check `node_modules/next/dist/docs/` for breaking changes.

---

## 1. Brand palette

All color tokens live in `app/globals.css` inside `@theme` and are exposed as Tailwind color utilities (`bg-brand`, `text-ink`, `border-line`, etc.) and CSS variables (`var(--color-brand)`).

### Primary
| Token | Hex | Tailwind class | Usage |
|---|---|---|---|
| `--color-brand` | `#791F7E` | `bg-brand`, `text-brand` | Primary CTAs, key accents, links on light bg |
| `--color-ink` | `#343434` | `bg-ink`, `text-ink` | Body text, dark UI |
| `--color-muted` | `#878787` | `text-muted` | Secondary text, captions |
| `--color-paper` | `#FFFFFF` | `bg-paper` | Page background |

### Brand purple scale (use sparingly — prefer 600)
`brand-50 #FAF2FB`, `brand-100 #F2DDF4`, `brand-200 #E3B8E6`, `brand-300 #CE8AD3`, `brand-400 #B45CBA`, `brand-500 #9A359F`, **`brand-600 #791F7E` (primary)**, `brand-700 #5F1864`, `brand-800 #451247`, `brand-900 #2D0B2F`.

### Neutrals
`ink #343434`, `ink-soft #4A4A4A`, `muted #878787`, `line #E6E6E6`, `surface #F5F5F5`, `surface-2 #FAFAFA`, `paper #FFFFFF`.

### Dark surfaces (for dark hero/CTA sections)
`night #111111`, `night-2 #1A1A1A`, `night-3 #222222`.

### Accents (use for categorization, stats, icons — not full sections)
| Token | Hex | When to use |
|---|---|---|
| `green` | `#26C789` | Success, uptime, "always on" stats |
| `red` | `#ED2F2F` | Errors, critical alerts (rare) |
| `blue` | `#3862F7` | Data/IT category tagging, info |
| `orange` | `#FF8A2A` | Retail/hospitality category tagging |
| `yellow` | `#FFE209` | Highlights, warnings (rare) |
| `purple` | `#9B38F7` | Premium/LED category tagging |

Feel free to pull in additional grays (e.g. `neutral-100`, `zinc-900` from Tailwind's default palette) when a specific shade is needed. Do NOT introduce new branded hues without updating this guide.

---

## 2. Typography

**Body Font:** [Outfit](https://fonts.google.com/specimen/Outfit) — weights 400, 500, 600, 700. Loaded via `next/font/google` in `app/layout.tsx` and exposed as `var(--font-outfit)`.

**Heading Font:** [Raleway](https://fonts.google.com/specimen/Raleway) — weights 700 (bold). Loaded via `next/font/google` in `app/layout.tsx` and exposed as `var(--font-raleway)`.

Outfit is used for body copy and UI elements. Raleway is used exclusively for **all headings (h1, h2, h3, display) — always in all caps and bold**.

### Weight usage
| Weight | Tailwind | Use |
|---|---|---|
| 400 | `font-normal` | Body copy, captions, meta (Outfit) |
| 500 | `font-medium` | Tab labels, secondary nav (Outfit) |
| 600 | `font-semibold` | Eyebrows, card titles (Outfit) |
| 700 | `font-bold` | **Headings (h1–h3, display) in Raleway — ALWAYS ALL CAPS**, hero display numbers (Outfit) |

### Scale (fluid, from `@theme`)
| Token | Utility | clamp() | Use |
|---|---|---|---|
| `--text-display` | `text-[length:var(--text-display)]` | `2.75rem → 5rem` | Hero headline |
| `--text-h1` | `text-[length:var(--text-h1)]` | `1.625rem → 2.25rem` | Section headline |
| `--text-h2` | `text-[length:var(--text-h2)]` | `1.375rem → 1.875rem` | Subsection |
| `--text-h3` | `text-[length:var(--text-h3)]` | `1.125rem → 1.375rem` | Card title |
| — | `text-base` / `text-lg` | `1rem / 1.125rem` | Body |
| — | `text-sm` | `0.875rem` | Meta, captions |
| `.eyebrow` | `.eyebrow` | `0.75rem` uppercase, `0.16em` tracking, `font-semibold` | Section label |

### Typographic rules
- **All headings (h1, h2, h3, display) must use Raleway font, bold weight (700), and ALL CAPS** (use `uppercase` class or hard-code).
- Tighten tracking on large type: `tracking-tight` or `tracking-[-0.02em]` on display/h1.
- Loosen tracking on small caps labels: `tracking-[0.16em]` (baked into `.eyebrow`).
- Line-height: `leading-[1.1]` for display, `leading-tight` for headings, `leading-relaxed` for body paragraphs over 2 lines.
- Body copy and UI elements use Outfit. Headings use Raleway. Never mix fonts on the same heading.
- Never fake weight with text-shadow or filter tricks.

---

## 3. Layout & spacing

- **Container:** `.container-page` (max 1280px, 20px / 32px gutters). Use on all top-level section children.
- **Section padding:** `py-20 md:py-28` for standard sections, `py-28 md:py-40` for hero/CTA.
- **Grid gutters:** `gap-6` (24px) for cards on mobile, `gap-8` (32px) on desktop.
- **Radius:** cards use `rounded-[var(--radius-card)]` (1rem). Pills/buttons `rounded-full`.
- **Shadows:**
  - `shadow-[var(--shadow-soft)]` — resting card
  - `shadow-[var(--shadow-lift)]` — hover / active card (tinted brand purple)
- **Hover motion:** `.card-lift` applies translateY(-4px) + lift shadow.

---

## 4. Components & patterns

### Buttons
- **Primary:** `bg-brand text-white rounded-full px-6 h-12 hover:bg-brand-700 transition-colors`
- **Secondary light:** `bg-white text-ink border border-line rounded-full px-6 h-12 hover:border-brand hover:text-brand`
- **Secondary dark:** `bg-white/10 text-white border border-white/20 rounded-full px-6 h-12 hover:bg-white/20`
- **Ghost:** `text-brand hover:text-brand-700` with chevron arrow.
- Height: always `h-12` (48px) for primary CTAs to meet touch-target minimum.

### Cards
- Base: `bg-paper border border-line rounded-[var(--radius-card)] p-6 md:p-8`.
- On dark sections, invert: `bg-night-2 border border-white/10 text-white`.
- Apply `.card-lift` for interactive cards.

### Eyebrows
- Always use `<span class="eyebrow text-brand">` above section headlines.

### Dark hero
- Base: `bg-night` + `.bg-grid-dark` texture + a `.bg-radial-brand` glow overlay.
- Keep primary text white, body copy `text-white/70`.

---

## 5. Imagery

- Commercial display / AV photography is the visual hero of this page. Prefer clean, wide, low-saturation product shots (boardrooms, retail walls, DvLED, control rooms).
- Placeholders in the current prototype come from Unsplash. Swap with brand-approved imagery before launch.
- Round image containers: `rounded-[var(--radius-card)] overflow-hidden`.
- Always provide `alt` text describing the scene (e.g. "Video wall in a corporate lobby"), not the brand.

---

## 6. Accessibility

- Target **WCAG 2.1 AA**.
- Minimum contrast: 4.5:1 for body text. On `night` (#111111), only use `white` or `white/80` for body — never `white/60` or lower for text under 18px.
- Brand purple (`#791F7E`) on white passes AA for 16px+ text. On `surface` (#F5F5F5) it still passes; avoid on yellow / orange.
- All interactive elements: visible focus ring — `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand`.
- Buttons and links have `h-12` / `min-h-11` to meet 44px touch target.
- All images require `alt`. Decorative imagery: `alt=""` + `aria-hidden`.

---

## 7. Working rules for agents

1. **No new color hexes in JSX.** Always use a token class (`bg-brand`, `text-ink`) or `var(--color-*)`.
2. **Fonts and headings:**
   - All h1, h2, h3, display headings: **Raleway**, `font-bold`, `uppercase`, `text-[length:var(--text-hX)]`.
   - Outfit for body, UI, eyebrows, tab labels, nav items.
   - Never mix Raleway and Outfit on the same heading.
3. **Tailwind v4:** customize via `@theme` in `globals.css`. Do not create `tailwind.config.js`.
4. **Server Components by default.** Only mark a component `"use client"` when it uses state, effects, or browser APIs.
5. Follow the Next.js 16 notes in `AGENTS.md` — read `node_modules/next/dist/docs/` before touching routing, metadata, fonts or caching APIs.
6. When adding a new section, use `.container-page` and the section-padding conventions in §3.

---

## 8. Site shell — must mirror abansit.lk

The shared chrome (Header + Footer + global utilities) replicates the abansit.lk template. Reference screenshots are in `/uploads/screencapture-abansit-lk-corporate-*.pdf` and `/uploads/screencapture-abansit-lk-hardware-solutions-*.pdf`.

### Header — two stacked bars

**Top utility bar** (h ≈ 40px, `bg-surface`, light gray):
- Left: row of social-icon links (Facebook, Instagram, YouTube, LinkedIn, TikTok) — small monochrome icons.
- Right: "Enter your job number here…" text input + filled purple SUBMIT pill button.

**Main header** (h ≈ 80px, `bg-paper`, white, sticky):
- Left: "Abans Laptops" wordmark logo (purple, two-line stacked — "Abans" big over "Laptops" small).
- Center / right: nav items (uppercase, `text-xs` tracking-wide, `font-semibold`, `text-ink-soft`): HOME, PRODUCTS, CORPORATE, SMART DEVICES, TECH SUPPORT, BLOG, CONTACT.
- Active route renders as a filled `bg-brand text-white rounded-full px-4 py-2` pill.
- Trailing magnifying-glass search icon button.

### Footer — dark four-column + bottom strip

Footer wrapper: `bg-night-2 text-white/80`, body padding `py-14`.

Four columns at `lg:grid-cols-12` (3/3/3/3):

1. **Brand column** — Abans Laptops wordmark, ~3-line about copy, then a stack of contact rows (each a small icon + line):
   - General phone, Email, Brand email, Address, abansgroup.com, buyabans.com.
2. **QUICK LINKS** — column header in white uppercase + spaced underline, then text links: HOME, PRODUCTS, CORPORATE, SMART DEVICES, TECH SUPPORT, BLOG, CONTACT US, SHOWROOMS.
3. **RECENT PRODUCTS** — column header + 3 product rows (small thumbnail left + small label "APPLE" + product name).
4. **CATEGORIES** — column header + grid of pill chips (CORPORATE, EDUCATION, GAMING, SMARTBOARDS, SIGNAGES, PROFESSIONAL, TABLETS, PRINTERS, ACCESSORIES, MONITORS, ALL-IN-ONE, LAPTOPS).

Bottom strip: solid black, contains:
- Floating WhatsApp green-circle CTA + small agent avatar (bottom-left, fixed).
- Copyright "© 2026 Abans Laptops. All rights reserved." (small, white/60).
- Right side: row of social icons (FB, IG, YT, IN, TT) + reCAPTCHA badge placeholder.

### `/corporate` — index page

1. Breadcrumb (`HOME > CORPORATE`, small caps text-muted).
2. Centered title: `CORPORATE SOLUTIONS` on line 1 (black `font-bold`), `BY ABANS LAPTOPS` on line 2 (purple `text-brand font-bold`). Both `text-h1`+ all-caps.
3. **3 cards** in a single row (`lg:grid-cols-3`), bordered with `border-line` and large internal padding. Each card:
   - All-caps two-line title (e.g. `HARDWARE` line 1 black, `SOLUTIONS` line 2 purple).
   - Below: large product photo composition, transparent bg.
   - Whole card is a link with hover lift + brand border on hover.
   - Cards: **Hardware Solutions** → `/hardware-solutions`, **Enterprise Solutions** → `/enterprise-solutions`, **Audio Visual & Commercial Display Solutions** → `/corporate-solutions/commercial-display-av`.
4. Tagline: "Check out corporate profile & annual report for more details." + filled purple `ABANS PLC ANNUAL REPORT` pill button (centered).

### Deep AV+CD landing — must mirror `/hardware-solutions`

The page at `app/corporate-solutions/commercial-display-av/page.tsx` assembles, in order:

1. **Banner Hero** — full-width gradient banner (pink→brand), large all-caps white title (e.g. "AUDIO VISUAL & COMMERCIAL DISPLAY"), with a floating product image bleeding off the left edge. Compact (h ≈ 220px).
2. **Intro** — `WHO WE ARE` eyebrow + h1 ("AUDIO VISUAL & COMMERCIAL DISPLAY SOLUTIONS BY ABANS IT") + 1–2 paragraphs of body copy (centered, max-3xl).
3. **Stat row** — 3 large stat cards in a row, each with a soft house-shape outline behind a big number ("20+ AUTHORIZED PARTNERS / 500+ DEPLOYMENTS / 14 SOLUTION TYPES").
4. **WHAT WE DO** — full-bleed purple panel: image left, white headline + paragraphs right.
5. **Two pillar cards** — Commercial Display Solutions + Audio Visual Solutions (Overview component).
6. **Commercial Displays detail** — purple stat strip + 4 sub-category cards.
7. **AV Solutions detail** — dark stat strip + 10 sub-category cards.
8. **Industry use cases** — hover-reveal cards.
9. **Tech partners** — `BRAND AFFILIATES` eyebrow + `OUR TECHNOLOGY PARTNERS` h2 + logo grid (5 cols).
10. **Service drop-off points** — Sri Lanka map with brand-purple location dots, eyebrow + headline left.
11. **INQUIRE NOW** — image left, form fields right (Name, Designation/Company, Email/Contact, Attachments, Message), purple SUBMIT pill, "OR CALL US NOW – 071 82 58 888".
12. **Why Abans** — 4-up value props (already exists).
13. *(Optional, lower priority)* Leadership Team, Outstanding Performance Track Record, Success Stories, Key Accounts — these are corporate-wide sections that can be reused later if needed.

### Section heading rule (mirrors abansit.lk)

Every numbered section above an h2 uses the same construction:
```
<small uppercase eyebrow>EYEBROW LABEL</small>
<h2 class="all-caps font-bold">SECTION TITLE</h2>
<span class="block w-12 h-px bg-brand mx-auto mt-3" />  // short underline accent
```

Each section is its own component under `app/corporate-solutions/commercial-display-av/_components/` to keep the page file composable.
