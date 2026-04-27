@AGENTS.md

# Abans IT — Commercial Display & AV Solutions

This prototype hosts the landing page for **Commercial Display and Professional Audio & Visual Solutions** under the Corporate Solutions section of Abans IT.

- **Stack:** Next.js 16 (App Router, Turbopack) + React 19 + Tailwind CSS v4 + TypeScript.
- **Reference:** https://www.lg-informationdisplay.com/
- **Landing route:** `/corporate-solutions/commercial-display-av`

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

**Font:** [Outfit](https://fonts.google.com/specimen/Outfit) — weights 400, 500, 600, 700. Loaded via `next/font/google` in `app/layout.tsx` and exposed as `var(--font-outfit)`.

Outfit is a geometric humanist sans with full weight range. Use **weight, size, tracking, case, and color** to create hierarchy.

### Weight usage
| Weight | Tailwind | Use |
|---|---|---|
| 400 | `font-normal` | Body copy, captions, meta |
| 500 | `font-medium` | Tab labels, secondary nav |
| 600 | `font-semibold` | Section headings (h1–h3), eyebrows, card titles |
| 700 | `font-bold` | Hero display, key stat numbers |

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
- Tighten tracking on large type: `tracking-tight` or `tracking-[-0.02em]` on display/h1.
- Loosen tracking on small caps labels: `tracking-[0.16em]` (baked into `.eyebrow`).
- Line-height: `leading-[1.1]` for display, `leading-tight` for headings, `leading-relaxed` for body paragraphs over 2 lines.
- Section headings use `font-semibold`. Hero display may use `font-bold`. Body stays `font-normal`.
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
2. **Font weights.** Outfit supports 400–700. Use `font-semibold` (600) for headings and eyebrows, `font-bold` (700) for hero display only, `font-normal` (400) for body copy.
3. **Tailwind v4:** customize via `@theme` in `globals.css`. Do not create `tailwind.config.js`.
4. **Server Components by default.** Only mark a component `"use client"` when it uses state, effects, or browser APIs.
5. Follow the Next.js 16 notes in `AGENTS.md` — read `node_modules/next/dist/docs/` before touching routing, metadata, fonts or caching APIs.
6. When adding a new section, use `.container-page` and the section-padding conventions in §3.

---

## 8. Page structure (landing page)

The page at `app/corporate-solutions/commercial-display-av/page.tsx` assembles, in order:

1. **Hero** — dark, purple radial glow, headline + subhead + dual CTA.
2. **Overview** — short intro + stat strip.
3. **Product categories** — 3×3 grid of category cards with icon + image.
4. **Solution spotlight** — split image/copy for a signature category (DvLED).
5. **Industry use cases** — horizontal scrolling/grid card set.
6. **Brands & partners** — logo wall.
7. **Why Abans** — 4-up value props.
8. **Contact CTA** — dark section with inquiry form + contact strip.

Each section is its own component under `app/corporate-solutions/commercial-display-av/_components/` to keep the page file composable.
