<div align="center">

# DocsNets

**Computer-networking lecture notes and Cisco lab write-ups**


</div>

A Docusaurus site collecting computer-networking course materials: protocol lectures (L2–L5) and Cisco Packet Tracer lab write-ups. Pages mix Markdown with custom React components — Mermaid diagrams, KaTeX formulas, draw.io SVGs, interactive PDU/protocol tables, and embedded iframes. Fully localized to Russian and deployed to GitHub Pages.

## ■ Features

- ❖ **Lectures & labs** — two doc instances (`lectures`, `labs`) each with its own sidebar
- ❖ **Mermaid diagrams** — rendered via a custom `Mermaid` component over the `mermaid` package
- ❖ **KaTeX math** — LaTeX formulas through `react-katex` (`InlineMath` / `BlockMath`)
- ❖ **draw.io SVGs** — embedded vector diagrams in lectures
- ❖ **Interactive components** — custom PDU/protocol tables, collapsible text, and embedded iframes
- ❖ **Russian locale** — single `ru` locale, dark mode by default

## ■ Stack

<div align="center">

| Component | Technology |
|-----------|------------|
| Framework | Docusaurus 3.6.1 (classic preset) |
| Frontend | React 18, MDX, styled-components |
| Diagrams | Mermaid 11, draw.io SVG |
| Math | KaTeX (react-katex) |
| Highlight | Prism (Catppuccin theme) |
| Deploy | GitHub Pages |

</div>

## ■ How It Works

```
1. Content is written in MDX files organized into two Docusaurus doc instances — lectures and labs — each with its own sidebar.
2. Custom React components render Mermaid diagrams, KaTeX formulas, and draw.io SVGs inline within the MDX pages.
3. Interactive components (PDU/protocol tables, collapsible text, iframes) enrich individual pages.
4. Docusaurus builds the site with the Russian locale and dark mode enabled by default, then publishes to GitHub Pages.
```

## ■ Screenshots

<div align="center">

![Screenshot](screenshots/main.png)
*Main page of the DocsNets site*

</div>

## ■ Usage

```bash
npm install
npm start       # dev server
npm run build   # production build
npm run deploy  # publish to GitHub Pages
```

## ■ License

MIT © [pluttan](https://github.com/pluttan)
