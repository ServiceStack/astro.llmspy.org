---
title: Changelog
description: Release history and version updates
---

## v2.0.30 (2025-11-01)

### Features
- **Improved Responsive Layout** with collapsible sidebar
- **Auto-reload** when config files change
- **Cancel Button** to cancel pending requests
- **Auto-focus** returns to textarea after request completes
- **Better UX** for model and system prompt selectors
  - Clicking outside selector collapses it
  - Clicking selected item no longer deselects it
- **Environment Variable Support** for `VERBOSE=1` to enable verbose mode (useful in Docker)

## v2.0.28 (2025-10-31)

### Major Features
- **Dark Mode** support
- **Drag & Drop** files in message prompt
- **Copy & Paste** files in message prompt
- **GitHub OAuth** authentication
  - Optional restrict access to specified users
- **Docker Support**
  - Official Docker images
  - Docker Compose configuration

## v2.0.24

### Analytics & Metrics

- **Cost Tracking**
  - Model selector displays input/output cost per 1M tokens
  - Thread-level cost and token metrics in sidebar
  - Per-message token breakdown
  - Thread summaries with total cost, tokens, requests, and response time

- **Analytics Pages**
  - **Cost Analytics**: Daily cost breakdown by month with per-model/provider details
  - **Token Analytics**: Daily token usage by month with input/output breakdown
  - **Activity Log**: Detailed request history with model, provider, tokens, cost, and performance metrics

- **Provider Reliability**
  - `--check` command to test provider status and response times
  - GitHub Action to publish provider test results

### UI Improvements

- **Edit & Redo**: Modify or re-run existing prompts
- **Metrics Display**: Token counts and costs visible throughout UI
- **Export/Import**: Backup and restore analytics data (hold ALT while clicking Export)

## Earlier Versions

### Core Features

- **Ultra-Lightweight Architecture**
  - Single file implementation
  - Single `aiohttp` dependency
  - Zero dependencies for ComfyUI integration

- **Multi-Provider Gateway**
  - Support for 160+ models
  - Automatic failover
  - Intelligent routing
  - Cost optimization

- **Multi-Modal Support**
  - Text generation
  - Vision (images)
  - Audio processing
  - File attachments (PDFs)

- **Flexible Deployment**
  - CLI tool
  - HTTP server (OpenAI-compatible)
  - Python module
  - ComfyUI node

- **Web UI**
  - ChatGPT-like interface
  - Offline operation
  - Local storage (IndexedDB)
  - Markdown rendering
  - Syntax highlighting
  - 200+ system prompts
  - Search history
  - Import/export

- **Provider Support**
  - OpenRouter (free and paid)
  - Groq
  - Google (free and paid)
  - Codestral
  - Ollama (local)
  - OpenAI
  - Anthropic
  - Grok (X.AI)
  - Qwen
  - Z.ai
  - Mistral

- **Configuration Management**
  - JSON-based configuration
  - Environment variable support
  - Easy provider enable/disable
  - Custom model mappings
  - Pricing configuration

## Upgrade Instructions

### From pip

```bash
pip install llms-py --upgrade
```

### From Docker

```bash
# Pull latest image
docker pull ghcr.io/servicestack/llms:latest

# Restart container
docker compose restart
```

### Configuration Migration

Configuration files are automatically migrated when you upgrade. Your existing settings in `~/.llms/llms.json` and `~/.llms/ui.json` will be preserved.

If you encounter issues, you can:

1. **Backup current config**:
```bash
cp ~/.llms/llms.json ~/.llms/llms.json.backup
cp ~/.llms/ui.json ~/.llms/ui.json.backup
```

2. **Reset to defaults**:
```bash
rm -rf ~/.llms
llms --init
```

3. **Restore your customizations** from the backup files

## Breaking Changes

### v2.0.28
- GitHub OAuth configuration moved to `ui.json`
- New `auth` section in configuration

### v2.0.24
- Analytics data structure changed
- Old analytics data may need to be cleared

## Roadmap

Planned features for future releases:

- **Streaming Support**: Real-time response streaming in UI
- **More Providers**: Additional LLM provider integrations
- **Advanced Analytics**: More detailed usage insights
- **Team Features**: Multi-user support
- **API Enhancements**: Additional API endpoints
- **Plugin System**: Extensibility for custom providers

## Links

- **GitHub Repository**: [github.com/ServiceStack/llms](https://github.com/ServiceStack/llms)
- **PyPI Package**: [pypi.org/project/llms-py](https://pypi.org/project/llms-py/)
- **Release Notes**: [github.com/ServiceStack/llms/releases](https://github.com/ServiceStack/llms/releases)
- **Issues**: [github.com/ServiceStack/llms/issues](https://github.com/ServiceStack/llms/issues)

## Contributing

We welcome contributions! See the [GitHub repository](https://github.com/ServiceStack/llms) for:
- Bug reports
- Feature requests
- Pull requests
- Documentation improvements

