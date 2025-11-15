# llms.py Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Official documentation website for [llms.py](https://github.com/ServiceStack/llms) - a lightweight OpenAI compatible CLI and server gateway for multiple LLMs.

## About llms.py

llms.py is a super lightweight CLI tool and OpenAI-compatible server that acts as a configurable gateway over multiple Large Language Model (LLM) providers. It supports text, image, and audio generation, allowing you to seamlessly mix and match local models with premium cloud LLMs.

## 📚 Documentation Structure

The documentation is organized into four main sections:

### Getting Started
- Installation
- Quick Start
- API Keys
- Configuration

### Features
- Web UI
- Multi-Modal Support
- Server Mode
- Analytics & Metrics

### Guides
- CLI Usage
- Use Cases
- Docker Deployment
- GitHub OAuth Setup
- Troubleshooting

### Reference
- Providers
- API Reference
- Changelog

## 🚀 Project Structure

```
.
├── docs/                      # Original markdown files
├── src/
│   └── content/
│       └── docs/
│           ├── index.mdx      # Home page
│           ├── getting-started/
│           ├── features/
│           ├── guides/
│           └── reference/
├── astro.config.mjs           # Starlight configuration
└── CONVERSION_SUMMARY.md      # Detailed conversion notes
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Initial Setup

To enable GitHub Pages deployment for the first time:

1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to the `main` branch or manually trigger the workflow from the **Actions** tab

The site will be deployed to `https://llmspy.org` (or your configured custom domain).

### Manual Deployment

You can also manually trigger a deployment:
1. Go to the **Actions** tab in your GitHub repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## 📝 Content Sources

The documentation was converted from three original markdown files:
- `docs/intro.md` - Introduction and overview
- `docs/guide.md` - Comprehensive usage guide
- `docs/ui.md` - Web UI documentation

These were reorganized into 18 focused documentation pages for better navigation and discoverability.

## 🔗 Links

- **llms.py GitHub**: [github.com/ServiceStack/llms](https://github.com/ServiceStack/llms)
- **PyPI Package**: [pypi.org/project/llms-py](https://pypi.org/project/llms-py/)
- **Starlight Docs**: [starlight.astro.build](https://starlight.astro.build/)

## 📄 License

Documentation content is licensed under the same license as llms.py.

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
