# Syaraf Firas — Glassmorphism Portfolio

A responsive, single-page personal portfolio for **Syaraf Firas** (GitHub:
[@calap0309](https://github.com/calap0309)), a beginner coder.

Built with **HTML5, CSS3 and vanilla JavaScript only** — no React, no backend,
no database and no paid APIs.

---

## Why it looks like this

The design is a premium **dark glassmorphism** theme:

- Dark navy background (`#080D1B`)
- Purple + blue gradient glow blobs
- Frosted translucent "glass" cards using `backdrop-filter: blur(...)`
- Thin white translucent borders, rounded corners and soft shadows
- Subtle, accessible hover and entrance animations
- A graceful fallback when `backdrop-filter` is not supported

---

## Project files

| File | What it is |
| --- | --- |
| `index.html` | The page structure and all the content (navigation, hero, about, projects, skills, contact, footer). |
| `style.css` | All styling: design tokens, layout, glassmorphism, responsive rules and reduced-motion support. |
| `script.js` | Small vanilla JS behaviours: mobile menu, scroll spy, scroll reveal, footer year. |
| `README.md` | This file. |

All four files live in the **same folder**. There is nothing to install and no
build step.

```
glassmorphism-portfolio/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How to run it locally

**Option A — just open it**

Double-click `index.html`. It opens in your browser and works immediately.

**Option B — run a tiny local server (recommended)**

Some browsers are stricter about local files. From inside the project folder run
either of these, then open the address it prints (usually
`http://localhost:8000`):

```bash
# Python 3 (already installed on most machines)
python3 -m http.server 8000

# or, if you have Node.js
npx serve .
```

---

## How to customise it

Everything is designed to be edited by a beginner.

### Change colours, spacing or fonts

Open `style.css` and edit the variables at the very top (the `:root` block):

```css
:root {
  --bg: #080d1b;        /* background colour            */
  --purple: #8b5cf6;    /* gradient colour 1            */
  --blue: #3b82f6;      /* gradient colour 2            */
  --radius-lg: 26px;    /* how round the cards are      */
  --blur: 16px;         /* strength of the glass blur   */
}
```

Change a value there and it updates across the whole site.

### Replace the placeholder projects

In `index.html`, find the **Projects** section and look for the three
`<article class="card glass project">` blocks. For each card replace:

1. **Title** — the `<h3 class="card__title">` text.
2. **Description** — the italic `[Short description ...]` paragraph.
3. **Technologies** — the `<li class="tag">` items inside `<ul class="tags">`.
4. **Repository link** — the `href` on the `View repository` link. Point it at
   your real repo, for example:
   ```html
   <a href="https://github.com/calap0309/my-project" target="_blank" rel="noopener noreferrer">
   ```
5. **Badge** — once a card is a real project, change
   `<p class="project__badge">Placeholder project</p>` or delete that line.

To add more projects, copy an entire `<article class="card glass project">`
block and paste it after the last one. The grid rearranges automatically.

### Replace the placeholder contact details

In the **Contact** section, replace these clearly-labelled placeholders with
your real information (or remove the lines until you're ready to share them):

- `[your@email.com]`
- `[Your city, country]`

The GitHub link already points to the real profile and works.

### Update your skills

In the **Skills** section, each skill bar uses an inline value:

```html
<span class="skill__fill" style="--value: 45%"></span>
```

Change `45%` to reflect your own comfort level, and update the
`<span class="skill__level">` label text to match.

---

## Publish it with GitHub Pages (free)

1. Create a new repository on GitHub, e.g. `portfolio`.
2. Upload `index.html`, `style.css`, `script.js` (and `README.md`) to the
   repository root.
   ```bash
   git init
   git add .
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/calap0309/portfolio.git
   git push -u origin main
   ```
3. On GitHub, open the repository → **Settings** → **Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/ (root)**, then **Save**.
6. Wait a minute. Your site will be live at:
   `https://calap0309.github.io/portfolio/`

> Tip: name the repository `calap0309.github.io` instead and your site will be
> served at the root: `https://calap0309.github.io/`.

---

## Testing checklist

Run through this before sharing the site. Check it on a phone, a tablet and a
desktop monitor (or use your browser's responsive/device mode).

**Layout & responsiveness**
- [ ] No horizontal scrollbar on any screen width.
- [ ] Text stays readable and cards fit narrow (≈320px) screens.
- [ ] Project cards reflow into one column on mobile and multiple on desktop.
- [ ] Nav collapses into a hamburger menu below 720px.

**Navigation**
- [ ] Clicking each nav link smooth-scrolls to the right section.
- [ ] Section headings are not hidden behind the sticky nav when jumped to.
- [ ] The active section's link is highlighted while scrolling.

**Mobile menu**
- [ ] Hamburger opens the menu; tapping it again closes it.
- [ ] Tapping a link closes the menu.
- [ ] Pressing `Escape` closes the menu and returns focus to the button.
- [ ] Clicking outside the menu closes it.

**Accessibility**
- [ ] Press `Tab` from the top: a "Skip to content" link appears first.
- [ ] Every interactive element shows a visible focus ring.
- [ ] The hamburger button announces its state (open/closed) to screen readers.
- [ ] With "reduce motion" enabled in your OS, content is visible without animating.

**Links & content**
- [ ] The GitHub links open `https://github.com/calap0309` in a new tab.
- [ ] Placeholder text is still clearly marked as placeholder.

**Glass fallback**
- [ ] In a browser without `backdrop-filter`, cards still show readable text.

---

## Known limitations

- **No contact form.** There is no backend, so the contact section lists details
  instead of sending messages. Add a form service (e.g. Formspree) later if you
  want one.
- **Placeholder content.** All projects, skills levels, goals and contact
  details are intentionally placeholders — nothing has been invented about the
  owner.
- **Backdrop blur support.** `backdrop-filter` is unsupported in some older
  browsers; the site falls back to a solid panel colour so text stays legible.
- **Google Fonts.** Typography loads from Google Fonts. If you need the site to
  work fully offline, self-host the fonts and update the `<link>` in
  `index.html`.
- **No analytics or SEO tooling** beyond basic meta tags.
