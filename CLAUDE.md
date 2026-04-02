# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio website for Tleubay Almaz (UI/UX Designer). This is a **single-file static site** — all HTML, CSS, and JavaScript live in `index.html`. The files `css.css`, `js.js`, and `html.html` exist but are empty.

## Running the site

Open `index.html` directly in a browser, or serve it locally:

```sh
python3 -m http.server 8080
# then open http://localhost:8080
```

No build step, no dependencies, no package manager.

## Architecture

Everything is in `index.html`:

- **Styles** — inline `<style>` block in `<head>`. Uses CSS custom properties (`--black`, `--white`, `--grey`, etc.) for the dark monochrome palette.
- **Fonts** — loaded from Google Fonts: Instrument Serif (display/headings), Syne (body/UI), Geist Mono (labels/captions).
- **Sections** — Hero → About → Work (projects grid) → Skills → Footer/Contact, each with `id` anchors for nav links.
- **Scroll reveal** — `.reveal` class elements animate in via `IntersectionObserver` (inline `<script>` at bottom of `<body>`).
- **Project thumbnails** — pure CSS patterns using `.p1`–`.p4` modifier classes; no images used.

## Design conventions

- Nav uses `mix-blend-mode: difference` to invert over any background.
- Responsive breakpoints: `900px` (stacks grids to single column) and `520px` (hides nav links).
- Grain overlay is a fixed `body::after` pseudo-element using an inline SVG `feTurbulence` filter.
- Animations use `cubic-bezier(0.16, 1, 0.3, 1)` (spring-like) consistently for reveals and `cubic-bezier(0.25, 0, 0, 1)` for hover transitions.
