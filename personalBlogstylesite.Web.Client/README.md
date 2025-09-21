# Personal Blog Style Site

A modern Blazor WebAssembly application showcasing a personal blog-style website.

## 🚀 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Deployment Process

1. **Push to main branch** - The GitHub Actions workflow automatically triggers
2. **Build & Publish** - The Blazor WASM app is built and published
3. **Deploy to Pages** - The built app is deployed to GitHub Pages

### Repository Setup

To deploy this project:

1. **Enable GitHub Pages:**
   - Go to your repository Settings
   - Navigate to "Pages" section
   - Set Source to "GitHub Actions"

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. **Your site will be available at:**
   `https://[username].github.io/[repository-name]/`

### Project Structure

- `personalBlogstylesite.Web.Client/` - Main Blazor WebAssembly project
- `personalBlogstylesite.Shared/` - Shared components and pages
- `personalBlogstylesite.Web/` - Server-side Blazor project (if needed)
- `personalBlogstylesite/` - Multi-platform app (MAUI)

### Technologies Used

- ✅ Blazor WebAssembly (.NET 9.0)
- ✅ GitHub Actions for CI/CD
- ✅ GitHub Pages for hosting
- ✅ Responsive design
- ✅ Modern UI components

## 🛠️ Local Development

```bash
# Navigate to the Web.Client project
cd personalBlogstylesite.Web.Client

# Run the development server
dotnet run

# Or watch for changes during development
dotnet watch run
```

## 📁 Important Files for Deployment

- `.github/workflows/deploy-to-pages.yml` - GitHub Actions workflow
- `personalBlogstylesite.Web.Client/wwwroot/404.html` - SPA fallback for routing
- `.gitignore` - Git ignore patterns
- Base href is automatically configured during deployment

The workflow automatically handles:
- Building the Blazor WASM app
- Setting the correct base href for GitHub Pages
- Creating a 404.html fallback for client-side routing
- Adding .nojekyll file to prevent Jekyll processing
- Deploying to GitHub Pages