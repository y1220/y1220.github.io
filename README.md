# Portfolio Deployment Instructions

## How to Publish Your Next.js Portfolio to GitHub Pages

This project uses [Next.js](https://nextjs.org/) with static export and is deployed to GitHub Pages (y1220.github.io).

### 1. Build the Static Site

Run the following command to generate the static site in the `out` directory:

```
pnpm build
```

### 2. Deploy to GitHub Pages

After building, deploy the contents of the `out` directory to the `gh-pages` branch using:

```
npx gh-pages -d out
```

This will publish your site to GitHub Pages. Make sure your repository's GitHub Pages settings are set to use the `gh-pages` branch as the source.

### 3. View My Site

Visit: https://y1220.github.io/
