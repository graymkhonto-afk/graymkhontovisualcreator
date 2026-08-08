# Visual Review Standard

Use the Figma Make file as the visual reference for all public portfolio refinements:

https://www.figma.com/make/w79qdJnWymlKENWtewikhX/Premium-Editorial-Portfolio-Design?p=f&t=eagt1coTq4ndmAmF-0

Maintain the premium editorial portfolio style:

- Preserve the established typography, quiet luxury tone, page-frame discipline, restrained colour palette, and art-directed evidence layout.
- Refine content as an RPL panel-facing submission, not as an authoring tool or casual website.
- Consolidate duplicate evidence into stronger editorial spreads.
- Keep research, process, final work, and references visible where they strengthen assessment.
- Check every changed visual section for text overflow, overlap, weak hierarchy, and loss of reading order before closing the task.

## Current Visual Problems Identified

- Viewer chrome used brittle descendant selectors, so future layout changes could style the wrong element or miss the toolbar entirely.
- The public portfolio shell relied on `100vh`, which can crop the slide stage on mobile browsers with dynamic address bars.
- On narrow screens the sidebar and toolbar consumed too much vertical space, leaving the A4 portfolio page visibly squeezed.
- Toolbar actions used horizontal overflow but kept browser scrollbars visible, creating visual noise against the premium editorial frame.
- Short landscape screens needed a separate rule so the sidebar and toolbar do not dominate the viewport.

## Handoff To Codex

- Run the portfolio locally and capture desktop, tablet, mobile portrait, and mobile landscape screenshots.
- Verify the A4 page remains centered, nonblank, and fully visible after the `100dvh`, toolbar, sidebar, and short-screen refinements.
- Inspect representative dense pages: cover, artwork integration index, accessories consolidated page, Gold Rush pages, editable Keynote slide, and imported PDF slide.
- If filesystem/git access is available, stage only `index.html`, `src/app/App.tsx`, `src/styles/theme.css`, and `guidelines/VisualReview.md` for this visual pass.
