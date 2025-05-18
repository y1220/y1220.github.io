#!/bin/bash

echo "🔨 Building your site..."
pnpm build

echo "📂 Ensuring .nojekyll exists in out directory..."
touch out/.nojekyll

echo "🚀 Deploying to GitHub Pages..."
npx gh-pages -d out --dotfiles

echo "✅ Deployment process complete!"
echo "Wait a few minutes, then visit https://y1220.github.io/"
