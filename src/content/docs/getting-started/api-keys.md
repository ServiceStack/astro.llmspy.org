---
title: API Keys
description: Configure API keys for LLM providers
---

## Environment Variables

llms.py uses environment variables to securely store API keys. Set the appropriate variables for the providers you want to use:

### Free Tier Providers

| Provider        | Variable                  | Description         | Example |
|-----------------|---------------------------|---------------------|---------|
| openrouter_free | `OPENROUTER_API_KEY` | OpenRouter FREE models API key | `sk-or-...` |
| groq            | `GROQ_API_KEY`            | Groq API key        | `gsk_...` |
| google_free     | `GOOGLE_FREE_API_KEY`     | Google FREE API key | `AIza...` |
| codestral       | `CODESTRAL_API_KEY`       | Codestral API key   | `...` |
| ollama          | N/A                       | No API key required | |

### Premium Providers

| Provider        | Variable                  | Description         | Example |
|-----------------|---------------------------|---------------------|---------|
| openrouter      | `OPENROUTER_API_KEY`      | OpenRouter API key  | `sk-or-...` |
| google          | `GOOGLE_API_KEY`          | Google API key      | `AIza...` |
| anthropic       | `ANTHROPIC_API_KEY`       | Anthropic API key   | `sk-ant-...` |
| openai          | `OPENAI_API_KEY`          | OpenAI API key      | `sk-...` |
| grok            | `GROK_API_KEY`            | Grok (X.AI) API key | `xai-...` |
| qwen            | `DASHSCOPE_API_KEY`       | Qwen (Alibaba) API key | `sk-...` |
| z.ai            | `ZAI_API_KEY`             | Z.ai API key        | `sk-...` |
| mistral         | `MISTRAL_API_KEY`         | Mistral API key     | `...` |

## Setting Environment Variables

### Linux/macOS

Add to your `~/.bashrc`, `~/.zshrc`, or `~/.profile`:

```bash
export OPENROUTER_API_KEY="sk-or-..."
export GROQ_API_KEY="gsk_..."
export GOOGLE_FREE_API_KEY="AIza..."
```

Then reload your shell:

```bash
source ~/.bashrc  # or ~/.zshrc
```

### Windows (PowerShell)

```powershell
$env:OPENROUTER_API_KEY="sk-or-..."
$env:GROQ_API_KEY="gsk_..."
```

For permanent settings, use System Properties > Environment Variables.

### Docker

Pass environment variables when running the container:

```bash
docker run -p 8000:8000 \
  -e OPENROUTER_API_KEY="sk-or-..." \
  -e GROQ_API_KEY="gsk_..." \
  -e GOOGLE_FREE_API_KEY="AIza..." \
  ghcr.io/servicestack/llms:latest
```

Or use a `.env` file with docker compose:

```bash
# .env file
OPENROUTER_API_KEY=sk-or-...
GROQ_API_KEY=gsk_...
GOOGLE_FREE_API_KEY=AIza...
```

## Direct Configuration

Alternatively, you can set API keys directly in `~/.llms/llms.json`:

```json
{
  "providers": {
    "groq": {
      "api_key": "gsk_your_actual_key_here"
    }
  }
}
```

:::caution
Storing API keys directly in configuration files is less secure than using environment variables.
:::

## Obtaining API Keys

### OpenRouter
1. Visit [openrouter.ai](https://openrouter.ai)
2. Sign up for an account
3. Navigate to API Keys section
4. Create a new API key

### Groq
1. Visit [console.groq.com](https://console.groq.com)
2. Sign up for an account
3. Go to API Keys
4. Generate a new key

### Google AI Studio
1. Visit [aistudio.google.com](https://aistudio.google.com)
2. Sign in with Google account
3. Click "Get API Key"
4. Create a new API key

### OpenAI
1. Visit [platform.openai.com](https://platform.openai.com)
2. Sign up or log in
3. Navigate to API Keys
4. Create a new secret key

### Anthropic
1. Visit [console.anthropic.com](https://console.anthropic.com)
2. Sign up for an account
3. Go to API Keys
4. Generate a new key

## Verifying API Keys

After setting your API keys, verify they work:

```bash
# List available providers and models
llms ls

# Check specific provider
llms --check groq
```

## Next Steps

- [Configuration](/getting-started/configuration/) - Configure providers and models
- [Providers](/reference/providers/) - Learn about supported providers

