
# Gray Mkhonto — Communication Design Portfolio

An editorial, slide-based portfolio presenting Gray Mkhonto's work across branding, editorial design, packaging, art direction, illustration, craft, painting, drawing, and visual storytelling. The interface preserves the original premium editorial system while providing responsive viewing, keyboard navigation, view-only sharing, and portfolio export tools.

## Features

- Premium A4 landscape slide presentation
- Responsive single-slide and flipbook viewing modes
- Searchable portfolio navigation
- Keyboard navigation with Arrow, Home, and End keys
- Accessible focus states, semantic landmarks, and skip navigation
- Local PDF rendering and editable PowerPoint export
- SEO metadata, structured data, sitemap, and social sharing cards
- Automatic GitHub Pages deployment on every push to `main`

## Technology stack

- React 18
- TypeScript/TSX
- Vite 6
- Tailwind CSS 4
- PDF.js
- PptxGenJS
- Lucide React
- pnpm
- GitHub Actions and GitHub Pages

## Installation

Requirements: Node.js 22 and pnpm 10.

```bash
git clone https://github.com/graymkhonto-afk/graymkhontovisualcreator.git
cd graymkhontovisualcreator
pnpm install
```

Large portfolio assets are tracked with Git LFS. Install Git LFS before cloning if the artwork is not downloaded automatically.

## Development

```bash
pnpm dev
```

Open the local URL printed by Vite. The development server honours the GitHub Pages project base path.

## Build

```bash
pnpm build
```

The production output is generated in `dist/`. To inspect it locally:

```bash
pnpm preview
```

## Deployment

The repository is configured as a GitHub Pages **project site**, so Vite uses:

```ts
base: "/graymkhontovisualcreator/"
```

The workflow at `.github/workflows/deploy.yml` installs dependencies, builds the site, uploads the Pages artifact, and deploys it automatically after every push to `main`.

In the GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions**. The published portfolio is expected at:

https://graymkhonto-afk.github.io/graymkhontovisualcreator/

No `CNAME` file is required unless a custom domain is added later.

## License

All portfolio artwork, writing, photography, branding, and project content are © Gray Mkhonto. Source code may not be reused commercially without permission.

## Author

Gray Mkhonto — South African communication designer.

- LinkedIn: https://www.linkedin.com/in/graciousgraymkhonto
- Behance: https://www.behance.net/graymkhonto1
