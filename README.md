# SB Dev Works

Personal developer landing page: a logo, a short intro, a projects grid, and a contact
section. Plain HTML/CSS/JS — no build step, no dependencies, no framework.

## Structure

```
index.html    page structure
styles.css    all styling (shared by the homepage and app detail pages)
projects.js   portfolio data (edit this to add/remove projects)
script.js     renders the project cards on the homepage
year.js       footer year, shared by every page
assets/       logo.png (SB Dev Works logo)
apps/         one detail page per project (apps/<slug>.html)
```

## Adding a project

1. Open `projects.js` and add one object to the `PROJECTS` array:

   ```js
   {
     name: "MyNewApp",
     slug: "my-new-app",       // used for apps/my-new-app.html
     blurb: "One sentence about what it does.",
     tags: ["Android", "Kotlin"],
   },
   ```

2. Copy an existing file in `apps/` to `apps/<slug>.html` and edit the title, tagline,
   overview, features, and "Built with" sections.

The homepage card is generated automatically from `projects.js` and links to
`apps/<slug>.html`.

## Contact info

The contact section links `mailto:sbdevworks@proton.me` — the default contact address across
every project under `C:\Dev`.

## Hosting

Hosted on **GitHub Pages** at **sbdevworks.com**. A workflow at
`.github/workflows/deploy-pages.yml` deploys the repo root on every push to `main` using GitHub's
official Pages actions — no build step involved. `CNAME` (repo root) pins the custom domain; the
`Settings → Pages` custom-domain field is set to match. DNS at the registrar points the apex
domain at GitHub Pages' four A records (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`) —
see GitHub's [custom domain docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)
if the domain ever needs to move to a new registrar/DNS provider. HTTPS enforcement turns on
automatically once GitHub finishes DNS verification and provisions the certificate (can take up
to 24h after DNS propagates) — until then the site may only be reachable over plain HTTP.

Any push to `main` automatically redeploys the live site — no build/deploy step of your own. The
old `https://laedos.github.io/webpage/` URL keeps working as a GitHub-provided fallback.

### Alternatives

- **Netlify / Vercel**: connect the GitHub repo, leave the build command empty and the
  publish directory as `/` — both auto-deploy on every push and give you free HTTPS.
- **Any static file host** (S3 + CloudFront, Cloudflare Pages, a plain web server, etc.):
  just upload the contents of this folder as-is.

## Local preview

No server required — just open `index.html` in a browser. Or, for a local dev server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
