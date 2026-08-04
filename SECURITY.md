# Security and privacy

The published GitHub Pages portfolio is a static, view-only build. The deployment workflow sets `VITE_PUBLIC_VIEWER=true`, which disables content editing, uploads, document removal, and editable export controls for public visitors.

## Owner editing workflow

Use the `portfolio-editor` branch and run `pnpm dev` locally. Review and merge approved portfolio changes into `main`; only `main` deploys to GitHub Pages.

## Secrets

- Never commit passwords, API keys, access tokens, private keys, or unredacted private documents.
- Never store secrets in variables prefixed with `VITE_`: Vite embeds them in public browser JavaScript.
- Use GitHub Actions secrets only for server-side workflow credentials.
- Local `.env` files are ignored by Git. Keep `.env.example` limited to safe placeholders.

## Repository visibility

GitHub permissions prevent public visitors from changing the repository. In a public repository, however, every branch and its history can be read. Use a separate private repository if private source files or a hidden editing application are required.

## Reporting

If sensitive information is found in Git history, rotate the affected credential immediately and remove it from history before the next deployment.
