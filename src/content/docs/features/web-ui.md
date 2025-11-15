---
title: Web UI
description: ChatGPT-like interface for accessing all your LLMs
---

llms.py includes a lightweight, fast, and privacy-focused web UI that provides a ChatGPT-like experience for accessing all your configured LLM providers.

## Starting the UI

```bash
llms --serve 8000
```

This launches:
- Web UI at `http://localhost:8000`
- OpenAI-compatible API at `http://localhost:8000/v1/chat/completions`

## Key Features

### 🔒 Privacy First

- **Offline Operation**: Works entirely offline once loaded
- **Local Storage**: All data stored in browser's IndexedDB
- **No Tracking**: No analytics, ads, or external dependencies
- **No Sign-ups**: Free and open source

### ⚡ Fast & Lightweight

- **Zero Build Tools**: Pure JavaScript modules
- **No npm Dependencies**: Simple, modern JavaScript
- **Fast Loading**: Minimal bundle size
- **Responsive**: Works on desktop and mobile

### 🎨 Modern Interface

- **Dark Mode**: Automatic or manual toggle
- **Markdown Support**: Full markdown rendering
- **Syntax Highlighting**: Code blocks with copy buttons
- **Responsive Layout**: Collapsible sidebar

## Core Features

### Chat Interface

- **Multi-turn Conversations**: Maintain context across messages
- **Edit Messages**: Modify and re-run previous prompts
- **Copy Responses**: Quick copy for messages and code blocks
- **Thread Management**: Organize conversations in threads

### Model Selection

- **Smart Autocomplete**: Quick model search and selection
- **Provider Filtering**: Only shows models from enabled providers
- **Cost Display**: See input/output pricing per 1M tokens
- **Real-time Updates**: Models update when providers are enabled/disabled

### System Prompts

- **200+ Built-in Prompts**: Professional prompts for various use cases
- **Quick Search**: Autocomplete for finding prompts
- **Custom Prompts**: Add your own in `ui.json`
- **Categories**: Organized by use case

### Multi-Modal Support

- **Image Upload**: Drag & drop or paste images
- **Audio Upload**: Process audio files
- **PDF Attachments**: Upload and analyze documents
- **Multiple Formats**: Support for various file types

## Analytics & Metrics

### Thread-Level Metrics

Each conversation thread displays:
- Total cost
- Token count (input/output)
- Number of requests
- Total response time

### Message-Level Metrics

Individual messages show:
- Token count
- Cost (for premium models)
- Response time
- Model used

### Analytics Pages

#### Cost Analytics
- Daily cost breakdown by month
- Per-model and per-provider costs
- Interactive charts
- Expandable daily details

#### Token Analytics
- Daily token usage by month
- Input/output token breakdown
- Per-model and per-provider usage
- Visual charts

#### Activity Log
- Detailed request history
- Model, provider, and prompt info
- Token counts and costs
- Response times and speeds
- Searchable and filterable

## Data Management

### Import/Export

- **Export Chats**: Backup all conversations
- **Import Chats**: Restore from backup
- **Export Logs**: Backup analytics data (hold ALT while clicking Export)
- **Import Logs**: Restore analytics data

### Search History

- **Full-text Search**: Find past conversations
- **Real-time Results**: Instant search as you type
- **Context Preview**: See matching messages

## Provider Management

### Enable/Disable Providers

Toggle providers on/off directly in the UI:
- Click provider toggle next to model selector
- Changes persist to configuration
- Models update immediately

### Provider Order

Providers are tried in the order defined in `llms.json`:
1. Free tier providers first
2. Local providers (Ollama)
3. Premium cloud providers

## Advanced Settings

Access advanced options through the settings dialog:

- **Temperature** (0-2): Control randomness
- **Max Tokens**: Limit response length
- **Top P** (0-1): Nucleus sampling
- **Frequency Penalty** (-2 to 2): Reduce repetition
- **Presence Penalty** (-2 to 2): Encourage diversity
- **Stop Sequences**: Control generation stopping
- **Seed**: Reproducible outputs
- **Reasoning Effort**: For reasoning models
- **And more**: Additional model-specific parameters

## Keyboard Shortcuts

- **Enter**: Send message
- **Shift+Enter**: New line in message
- **Esc**: Close dialogs/selectors

## Configuration

UI settings are stored in `~/.llms/ui.json`:

```json
{
  "prompts": [
    {
      "id": "it-expert",
      "name": "Act as an IT Expert",
      "value": "I want you to act as an IT expert..."
    }
  ]
}
```

## Next Steps

- [Image Support](/multimodal/images/) - Use images with vision models
- [Audio Support](/multimodal/audio/) - Process audio files
- [File Support](/multimodal/files/) - Work with PDFs and documents
- [Analytics](/features/analytics/) - Track usage and costs
- [CLI Usage](/guides/cli-usage/) - Command-line interface

