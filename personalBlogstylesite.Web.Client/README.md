# Personal Blog Style Site

A personal blog-style site built with .NET MAUI and Blazor WebAssembly.

## GitHub Pages Deployment

This repo auto-deploys a Blazor WASM site to GitHub Pages on push to main. The deployment workflow automatically builds the Blazor WebAssembly project and publishes it to GitHub Pages, making your personal site accessible online.

### Steps to Enable GitHub Pages

To enable GitHub Pages deployment for your repository:

1. **Go to Settings → Pages** in your GitHub repository
2. **Set Source = GitHub Actions** (instead of the default "Deploy from a branch")  
3. **Wait for the "Deploy Blazor WASM to GitHub Pages" workflow to finish** - you can monitor progress in the Actions tab
4. **Access your site** at: `https://<your-username>.github.io/<repo>/`

### Important Notes

- **MAUI/Hybrid Note**: Only the `Web.Client` (WASM) project is deployed to GitHub Pages, not the full MAUI application
- **URL Pattern**: Your deployed site will be available at `https://<your-username>.github.io/<repository-name>/`
- **Automatic Deployment**: Every push to the `main` branch will trigger a new deployment
- **SPA Support**: The deployment includes proper Single Page Application fallback routing via 404.html

The workflow automatically handles:
- Building the Blazor WASM project in Release configuration
- Setting the correct base href for your repository
- Creating SPA fallback pages
- Disabling Jekyll processing
- Deploying to GitHub Pages
