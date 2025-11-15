---
title: Configuration
description: Configure llms.py providers and models
---

## Configuration Files

llms.py uses two main configuration files stored in `~/.llms/`:

- **`llms.json`** - Provider and model configuration
- **`ui.json`** - Web UI settings and system prompts

These files are automatically created with defaults when you run `llms --init`.

## llms.json Structure

The main configuration file has the following structure:

```json
{
  "defaults": {
    "headers": {},
    "text": {},
    "image": {},
    "audio": {},
    "file": {},
    "check": {},
    "limits": {},
    "convert": {}
  },
  "providers": {}
}
```

### Defaults Section

#### Headers
Common HTTP headers for all requests:

```json
"headers": {
  "Content-Type": "application/json"
}
```

#### Text Template
Default chat completion request for text prompts:

```json
"text": {
  "model": "kimi-k2",
  "messages": [
    {"role": "user", "content": ""}
  ]
}
```

#### Image Template
Default request template for image prompts:

```json
"image": {
  "model": "gemini-2.5-flash",
  "messages": [
    {
      "role": "user",
      "content": [
        {"type": "image_url", "image_url": {"url": ""}},
        {"type": "text", "text": "Describe the key features of the input image"}
      ]
    }
  ]
}
```

#### Audio Template
Default request template for audio prompts:

```json
"audio": {
  "model": "gpt-4o-audio-preview",
  "messages": [
    {
      "role": "user",
      "content": [
        {"type": "input_audio", "input_audio": {"data": "", "format": "mp3"}},
        {"type": "text", "text": "Transcribe the audio"}
      ]
    }
  ]
}
```

#### File Template
Default request template for file attachments:

```json
"file": {
  "model": "gpt-5",
  "messages": [
    {
      "role": "user",
      "content": [
        {"type": "file", "file": {"filename": "", "file_data": ""}},
        {"type": "text", "text": "Summarize the document"}
      ]
    }
  ]
}
```

### Providers Section

Each provider has the following structure:

```json
"groq": {
  "enabled": true,
  "type": "OpenAiProvider",
  "base_url": "https://api.groq.com/openai",
  "api_key": "$GROQ_API_KEY",
  "models": {
    "kimi-k2": "moonshotai/kimi-k2-instruct-0905",
    "llama3.3:70b": "llama-3.3-70b-versatile"
  },
  "pricing": {
    "kimi-k2": {"input": 0.0, "output": 0.0}
  },
  "default_pricing": {"input": 0.0, "output": 0.0}
}
```

#### Provider Fields

- **`enabled`**: Whether the provider is active
- **`type`**: Provider class (`OpenAiProvider`, `GoogleProvider`, `OllamaProvider`)
- **`api_key`**: API key (use `$VAR_NAME` for environment variables)
- **`base_url`**: API endpoint URL
- **`models`**: Model name mappings (local name → provider name)
- **`pricing`**: Cost per 1M tokens (input/output) for each model
- **`default_pricing`**: Default pricing if not specified in `pricing`

## Managing Providers

### Enable/Disable Providers

```bash
# Enable providers
llms --enable openrouter groq google_free

# Disable providers
llms --disable ollama openai
```

### List Providers

```bash
# List all providers and models
llms ls

# List specific providers
llms ls groq anthropic
```

### Set Default Model

```bash
llms --default grok-4-fast
```

This updates `defaults.text.model` in your configuration.

## Custom Configuration Path

Use a custom configuration file:

```bash
llms --config /path/to/custom-config.json "Hello"
```

## Recreating Configuration

To reset to defaults, delete your configuration:

```bash
rm -rf ~/.llms
llms --init
```

## Next Steps

- [Providers Reference](/reference/providers/) - Detailed provider information
- [CLI Usage](/guides/cli-usage/) - Learn CLI commands
- [Server Mode](/features/server-mode/) - Run as an API server

