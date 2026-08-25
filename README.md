# Developer Portfolio

A premium, interactive personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Making it yours

Almost everything on the site is placeholder content and can be replaced in **one file**:

```
src/data/portfolio.ts
```

That file exports:

- `profile` — name, role, tagline, location, email, resume path, social links
- `about` — intro paragraphs, current focus line, stat cards
- `skillCategories` — your skills grouped by category
- `experience` — your work history, most recent first
- `projects` — your projects, including the full case-study detail shown in the "View Details" modal (set `featured: true` on the one you want highlighted at the top of the Projects section)
- `contact` — the contact section heading/subheading
- `nav` — the nav bar labels (only change if you add/remove sections)

No other file needs to change to update your content.

### Resume

Drop your real PDF into `public/resume.pdf` (replacing the placeholder note there). The "Download Resume" buttons already point to `/resume.pdf`, so no code changes are needed.

### Contact form

The form in `src/components/Contact.tsx` doesn't call a backend yet — wire up `handleSubmit` to a form service (e.g. Formspree, Resend, your own API route) when you're ready to receive real messages.

### Theme

The color and type tokens live in `src/index.css` (as CSS variables for both the dark and `.light` themes) and `tailwind.config.js`. Change the `--accent` value to swap the accent color everywhere at once.

## Structure

```
src/
 ├── components/     UI components (no placeholder text lives here)
 ├── data/
 │    └── portfolio.ts   ← edit this file with your real content
 ├── hooks/           Scroll-spy hook
 ├── App.tsx          Section composition
 ├── index.css        Design tokens + global styles
 └── main.tsx
```
