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

The contact section currently has placeholder text — look for the `TODO` markers in
`index.html` (email address) and replace them with real details before this goes live.

## Hosting

This is a fully static site, so any static host works. The simplest option, since the
code already lives on GitHub, is **GitHub Pages**. A workflow at
`.github/workflows/deploy-pages.yml` deploys the repo root on every push to `main` using
GitHub's official Pages actions — no build step involved. To turn it on (one-time):

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. On GitHub, go to the repo's **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or re-run the workflow from the **Actions** tab) to trigger the first deploy.
5. GitHub will publish the site at `https://<username>.github.io/<repo-name>/`
   (a few minutes after the first successful run).
6. Optional: add a custom domain under the same **Pages** settings once you have one.

Any push to `main` automatically redeploys the live site — no build/deploy step of your own.

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
