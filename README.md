# Yui's Portfolio

## About
This is my personal portfolio website built with Next.js and deployed on GitHub Pages. The site showcases my projects, hackathon experiences, and interests.

## Technologies Used
- **Next.js 15.2.4** - React framework with App Router
- **TypeScript** - For type safety
- **Tailwind CSS** - For styling
- **Shadcn UI** - Component library
- **GitHub Pages** - For hosting

## Portfolio Deployment Instructions

### Prerequisites
- Node.js (latest LTS recommended)
- pnpm package manager

### Local Development
To run the project locally:
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The development server will be available at http://localhost:3000

### Deployment Process

#### Option 1: Using the Deployment Script (Recommended)

The simplest way to deploy is using the included script:

```bash
# Make sure the script is executable
chmod +x deploy.sh

# Run the deploy script
./deploy.sh
```

This script will:
1. Build the Next.js project
2. Ensure the `.nojekyll` file exists in the output directory
3. Deploy the content to GitHub Pages with proper settings

#### Option 2: Manual Deployment

If you prefer a manual deployment:

1. **Build the Static Site**
   ```bash
   pnpm build
   ```

2. **Ensure `.nojekyll` file exists**
   ```bash
   touch out/.nojekyll
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npx gh-pages -d out --dotfiles
   ```

4. **Check GitHub Pages Settings**
   - Go to repository Settings → Pages
   - Ensure source is set to `gh-pages` branch and root (/) folder

### Viewing the Live Site

After deployment, visit: [https://y1220.github.io/](https://y1220.github.io/)

Note: It may take a few minutes for changes to appear after deployment.

## Important Configuration Notes

- The `next.config.mjs` includes:
  - `output: "export"` for static site generation
  - `images: { unoptimized: true }` for static image exports
  - `trailingSlash: true` for proper path resolution

- The `.nojekyll` file is critical for GitHub Pages to serve the `_next` directory correctly

## Troubleshooting

If CSS or assets are not loading correctly after deployment:
1. Ensure the `.nojekyll` file exists at the root of the `gh-pages` branch
2. Check that you've deployed with the `--dotfiles` flag
3. Allow 5-10 minutes for GitHub Pages to update completely
