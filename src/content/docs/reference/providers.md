---
title: Providers
description: Supported LLM providers and their models
---

llms.py supports multiple LLM providers through OpenAI-compatible APIs. Any provider can be added by configuring them in `llms.json`.

## Provider Overview

### Free Tier Providers

Providers with free models or free tiers:

- **OpenRouter Free** - Free tier models via OpenRouter
- **Groq** - Fast inference with free tier
- **Google Free** - Gemini models with free tier
- **Codestral** - Free code generation models
- **Ollama** - Local models (completely free)

### Premium Providers

Paid providers with advanced models:

- **OpenAI** - GPT-4o, GPT-5, o3, etc.
- **Anthropic** - Claude Opus, Sonnet, Haiku
- **Google** - Gemini Pro and advanced models
- **Grok** - X.AI's Grok models
- **OpenRouter** - Access to 100+ models
- **Qwen** - Alibaba's Qwen models
- **Z.ai** - GLM models
- **Mistral** - Mistral AI models

## OpenAI

**Type**: `OpenAiProvider`

**API Key**: `OPENAI_API_KEY`

**Popular Models**:
- `gpt-5` - Latest flagship model
- `gpt-5-mini` - Smaller, faster GPT-5
- `gpt-4o` - Multimodal GPT-4
- `gpt-4o-mini` - Efficient GPT-4
- `gpt-4o-audio-preview` - Audio processing
- `o3` - Advanced reasoning model

**Features**:
- Text generation
- Vision (images)
- Audio processing
- File attachments (PDFs)
- Function calling
- Streaming

**Enable**:
```bash
export OPENAI_API_KEY="sk-..."
llms --enable openai
```

## Anthropic (Claude)

**Type**: `OpenAiProvider`

**API Key**: `ANTHROPIC_API_KEY`

**Popular Models**:
- `claude-opus-4-1` - Most capable model
- `claude-sonnet-4-0` - Balanced performance
- `claude-haiku-3-5` - Fast and efficient

**Features**:
- Text generation
- Vision (images)
- Large context windows (200K+ tokens)
- Strong reasoning capabilities

**Enable**:
```bash
export ANTHROPIC_API_KEY="sk-ant-..."
llms --enable anthropic
```

## Google Gemini

**Type**: `GoogleProvider` or `GoogleOpenAiProvider`

**API Key**: `GOOGLE_API_KEY` or `GOOGLE_FREE_API_KEY`

**Popular Models**:
- `gemini-2.5-pro` - Most capable
- `gemini-2.5-flash` - Fast and efficient
- `gemini-2.5-flash-lite` - Lightweight
- `gemini-flash-latest` - Latest flash model

**Features**:
- Text generation
- Vision (images)
- Audio processing
- File attachments
- Safety settings
- Free tier available

**Enable**:
```bash
export GOOGLE_FREE_API_KEY="AIza..."
llms --enable google_free
```

## OpenRouter

**Type**: `OpenAiProvider`

**API Key**: `OPENROUTER_API_KEY`

**Popular Models**:
- `grok-4` - X.AI's Grok
- `kimi-k2` - Moonshot AI
- `deepseek-v3.1:671b` - DeepSeek
- `llama4:400b` - Meta's Llama 4
- `glm-4.5-air` - Z.AI's GLM
- 100+ more models

**Features**:
- Access to latest models
- Free tier available
- Multiple providers in one API
- Competitive pricing

**Enable**:
```bash
export OPENROUTER_API_KEY="sk-or-..."
llms --enable openrouter_free  # Free tier
llms --enable openrouter        # Paid tier
```

## Grok (X.AI)

**Type**: `OpenAiProvider`

**API Key**: `GROK_API_KEY`

**Popular Models**:
- `grok-4` - Latest model
- `grok-3` - Previous generation
- `grok-3-mini` - Smaller, faster
- `grok-code-fast-1` - Code generation

**Features**:
- Real-time information
- Humor and personality
- Uncensored responses
- Strong reasoning

**Enable**:
```bash
export GROK_API_KEY="xai-..."
llms --enable grok
```

## Groq

**Type**: `OpenAiProvider`

**API Key**: `GROQ_API_KEY`

**Popular Models**:
- `llama3.3:70b` - Meta Llama 3.3
- `llama4:400b` - Meta Llama 4
- `kimi-k2` - Moonshot AI
- `gpt-oss:120b` - OpenAI OSS
- `qwen3:32b` - Qwen 3

**Features**:
- Extremely fast inference
- Free tier
- Competitive pricing
- Multiple model providers

**Enable**:
```bash
export GROQ_API_KEY="gsk_..."
llms --enable groq
```

## Ollama (Local)

**Type**: `OllamaProvider`

**API Key**: Not required

**Features**:
- Local inference
- Complete privacy
- No API costs
- Auto-discovery of installed models
- Custom models

**Setup**:
1. Install Ollama from [ollama.ai](https://ollama.ai)
2. Pull models: `ollama pull llama3.3`
3. Enable in llms.py:

```bash
llms --enable ollama
```

**Configuration**:
```json
{
  "ollama": {
    "enabled": true,
    "type": "OllamaProvider",
    "base_url": "http://localhost:11434",
    "models": {},
    "all_models": true  // Auto-discover all models
  }
}
```

## Qwen (Alibaba Cloud)

**Type**: `OpenAiProvider`

**API Key**: `DASHSCOPE_API_KEY`

**Popular Models**:
- `qwen3-max` - Most capable
- `qwen2.5vl` - Vision model
- `qwen3-vl:235b` - Large vision model
- `qwen3-coder` - Code generation
- `qwq-plus` - Reasoning model

**Features**:
- Multilingual support
- Vision models
- Audio processing
- Code generation
- Reasoning capabilities

**Enable**:
```bash
export DASHSCOPE_API_KEY="sk-..."
llms --enable qwen
```

## Z.ai

**Type**: `OpenAiProvider`

**API Key**: `ZAI_API_KEY`

**Popular Models**:
- `glm-4.6` - Latest model
- `glm-4.5` - Previous generation
- `glm-4.5-air` - Lightweight
- `glm-4.5-flash` - Fast inference

**Features**:
- Strong reasoning
- Multilingual
- Competitive pricing

**Enable**:
```bash
export ZAI_API_KEY="sk-..."
llms --enable z.ai
```

## Mistral

**Type**: `OpenAiProvider`

**API Key**: `MISTRAL_API_KEY`

**Popular Models**:
- `mistral-large` - Most capable
- `pixtral` - Vision model
- `codestral` - Code generation

**Features**:
- Code generation
- Multilingual
- European provider

**Enable**:
```bash
export MISTRAL_API_KEY="..."
llms --enable mistral
```

## Codestral

**Type**: `OpenAiProvider`

**API Key**: `CODESTRAL_API_KEY`

**Models**:
- `codestral` - Code generation

**Features**:
- Specialized for code
- Free tier available

**Enable**:
```bash
export CODESTRAL_API_KEY="..."
llms --enable codestral
```

## Next Steps

- [Configuration](/getting-started/configuration/) - Configure providers
- [API Keys](/getting-started/api-keys/) - Set up API keys
- [CLI Usage](/guides/cli-usage/) - Use providers from CLI

