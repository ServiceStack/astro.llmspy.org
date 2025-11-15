---
title: Quick Start
description: Get started with llms.py in minutes
---

## 1. Set API Keys

Set environment variables for the providers you want to use:

```bash
export OPENROUTER_API_KEY="sk-or-..."
export GROQ_API_KEY="gsk_..."
export GOOGLE_FREE_API_KEY="AIza..."
```

See the [API Keys](/getting-started/api-keys/) page for a complete list of supported providers.

## 2. Initialize Configuration

```bash
llms --init
```

This creates a default configuration file at `~/.llms/llms.json`.

## 3. Enable Providers

Enable the providers you want to use:

```bash
llms --enable openrouter_free google_free groq
```

You can also enable premium providers:

```bash
llms --enable openai anthropic grok
```

## 4. List Available Models

See which models are available:

```bash
llms ls
```

Or list models for specific providers:

```bash
llms ls groq openrouter_free
```

## 5. Start Chatting

### CLI Usage

```bash
# Simple question
llms "Explain quantum computing in simple terms"

# With specific model
llms -m grok-4-fast "jq command to sort openai models by created"

# With system prompt
llms -s "You are a quantum computing expert" "Explain quantum computing"
```

### Start the Server

Run an OpenAI-compatible server with web UI:

```bash
llms --serve 8000
```

This launches:
- Web UI at `http://localhost:8000`
- OpenAI-compatible API at `http://localhost:8000/v1/chat/completions`

### Use the API

```bash
curl -X POST http://localhost:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "kimi-k2",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'
```

## Next Steps

- [Configuration Guide](/getting-started/configuration/) - Customize your setup
- [CLI Usage](/guides/cli-usage/) - Learn all CLI commands
- [Web UI Features](/features/web-ui/) - Explore the web interface
- [Image Support](/multimodal/images/) - Use images with vision models
- [Audio Support](/multimodal/audio/) - Process audio files
- [File Support](/multimodal/files/) - Work with PDFs and documents

