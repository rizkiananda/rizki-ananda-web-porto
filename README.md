# Rizki Ananda — Portfolio

Personal portfolio site. Vue 3 + Vite + Tailwind CSS v4, no UI framework, no router
(single scrolling page).

## Design

Full-screen stacked sections with vertical scroll-snap (desktop only — below 1024px or a
short viewport it degrades to normal scrolling). Dark by default with a light theme, one
blue accent, Space Grotesk for headings, Plus Jakarta Sans for body.

Both themes are plain CSS custom properties: the dark set lives in the `@theme` block of
`src/style.css`, the light set overrides the same tokens under `[data-theme="light"]`.
`src/theme.js` stamps that attribute on `<html>` and persists the choice; an inline script
in `index.html` applies it before first paint so there is no flash.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

## Where things live

| Path | What |
|---|---|
| `src/content.en.js` / `src/content.id.js` | **All content**, one file per language — profile, skills, experience, projects, captions and every UI label. Same shape in both; `scripts/check-content.mjs` fails if they drift. |
| `src/data.js` | Picks the active language and re-exports it as computed refs, plus the language-independent bits (marquee, icons, tones). |
| `src/i18n.js` | The `lang` ref (persisted to `localStorage`, defaults to the browser language). |
| `src/components/` | One component per slide (`HeroSection`, `AboutSection`, `SkillsSection`, `ExperienceSection`, `CaseStudySection`, `ProjectsSection`, `ContactSection`), plus `ProjectDetail.vue` (slide-over panel with the gallery) and `ImageLightbox.vue` (fullscreen viewer). |
| `src/style.css` | Tailwind import, both theme palettes, the `.slide` / scroll-snap system, the `.rail` carousel, reveal + marquee animations. |
| `src/theme.js` | The `theme` ref and `toggleTheme()` (persisted to `localStorage`, defaults to the OS preference). |
| `public/showcase/<slug>/` | Screenshots as `.webp` — `name.webp` (1600px) and `name-thumb.webp` (760px). |
| `scripts/prepare-shots.py` | Regenerates `public/showcase/` from the raw PNGs, including the ERP branding redaction. |

## Adding a project

1. Drop screenshots into `public/showcase/<slug>/` (run `scripts/prepare-shots.py` to resize
   and generate thumbs, or do it by hand — the code expects the `-thumb` suffix).
2. Add an entry to `featured` in **both** `src/content.en.js` and `src/content.id.js` with
   matching `slug` and `shots[].file` (filename without extension), then run
   `node scripts/check-content.mjs`.

Projects without screenshots go in `otherWork` instead — they render a generated gradient
thumbnail from `icons` / `tones`.

## Note on the ERP screenshots

The ERP product is internal. `scripts/prepare-shots.py` replaces the client logo and the
company name in the header before the images are published. Re-run it if the raw screenshots
are ever refreshed — never copy the raw PNGs into `public/` directly.
