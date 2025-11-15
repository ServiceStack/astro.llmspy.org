---
title: Use Cases
description: Common use cases and examples for llms.py
---

llms.py is versatile and can be used in many different scenarios. Here are some common use cases with practical examples.

## For Developers

### API Gateway

Use llms.py as a centralized gateway for all LLM provider access:

```python
from openai import OpenAI

# Point all your code to llms.py
client = OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="not-needed"
)

# Use any model from any provider
response = client.chat.completions.create(
    model="kimi-k2",  # Free via Groq
    messages=[{"role": "user", "content": "Hello!"}]
)
```

**Benefits**:
- Single integration point
- Easy to switch providers
- Automatic failover
- Cost optimization

### Cost Management

Route to cheapest available providers automatically:

```json
{
  "providers": {
    "groq": {"enabled": true},           // Free tier, tried first
    "openrouter_free": {"enabled": true}, // Free tier, tried second
    "openai": {"enabled": true}           // Paid, tried last
  }
}
```

**Benefits**:
- Minimize API costs
- Use free tiers first
- Fallback to paid when needed

### Testing & Comparison

Easily switch between models for comparison:

```bash
# Test different models
llms -m grok-4 "Explain quantum computing"
llms -m claude-sonnet-4-0 "Explain quantum computing"
llms -m gemini-2.5-pro "Explain quantum computing"

# Compare response times
llms --check groq
llms --check anthropic
llms --check google
```

**Benefits**:
- Quick model comparison
- Performance testing
- Quality evaluation

### Local Development

Use local models for development, cloud for production:

```bash
# Development: Use Ollama (free, private)
export ENV=development
llms --enable ollama
llms -m llama3.3 "test query"

# Production: Use premium models
export ENV=production
llms --enable openai anthropic
llms -m gpt-4o "production query"
```

## For ComfyUI Users

### Hybrid Workflows

Combine local Ollama models with cloud APIs in ComfyUI:

1. Install llms.py in ComfyUI environment
2. Enable both Ollama and cloud providers
3. Use llms.py node in workflows
4. Automatic routing based on availability

**Benefits**:
- Zero dependency conflicts
- Mix local and cloud models
- Cost control
- Provider flexibility

### Zero Setup

No dependency management headaches:

```bash
# Just one dependency
pip install llms-py

# Works immediately in ComfyUI
```

## For Enterprises

### Vendor Independence

Avoid lock-in to any single LLM provider:

```json
{
  "providers": {
    "openai": {"enabled": true},
    "anthropic": {"enabled": true},
    "google": {"enabled": true},
    "ollama": {"enabled": true}
  }
}
```

**Benefits**:
- No vendor lock-in
- Easy migration
- Negotiating leverage
- Risk mitigation

### Scalability

Distribute load across multiple providers:

```bash
# Enable multiple providers for same model
llms --enable groq openrouter openai

# Automatic load distribution with failover
```

**Benefits**:
- Higher throughput
- Better reliability
- Load balancing
- Reduced rate limiting

### Compliance

Keep sensitive data local while using cloud for general tasks:

```bash
# Sensitive data: Use local Ollama
llms -m llama3.3 --file sensitive-doc.pdf "Analyze"

# General tasks: Use cloud
llms -m gpt-4o "General query"
```

**Benefits**:
- Data sovereignty
- Privacy compliance
- Flexible deployment
- Cost optimization

### Budget Control

Intelligent routing to optimize costs:

```json
{
  "providers": {
    "groq": {"enabled": true},           // Free tier
    "google_free": {"enabled": true},    // Free tier
    "openai": {"enabled": false}         // Disabled to control costs
  }
}
```

Track spending with analytics:
- View cost analytics by day/month
- Monitor per-model costs
- Track per-provider spending

## Research & Education

### Model Comparison

Compare capabilities of different models:

```bash
# Test reasoning
llms -m o3 "Solve this logic puzzle..."
llms -m qwq-plus "Solve this logic puzzle..."

# Test vision
llms -m gpt-4o --image chart.png "Analyze"
llms -m gemini-2.5-pro --image chart.png "Analyze"

# Test multilingual
llms -m qwen3-max "Translate to Chinese..."
llms -m gemini-2.5-pro "Translate to Chinese..."
```

### Cost Analysis

Track costs for research projects:

```bash
# Enable analytics
llms --serve 8000

# View cost analytics in UI
# Export data for analysis
```

### Experimentation

Easy experimentation with different providers:

```bash
# Try new models quickly
llms --enable new_provider
llms -m new-model "test"

# Compare with existing
llms -m existing-model "test"
```

## Content Creation

### Writing Assistant

Use different models for different tasks:

```bash
# Brainstorming: Fast, creative model
llms -m gemini-2.5-flash "Blog post ideas about AI"

# Drafting: Balanced model
llms -m claude-sonnet-4-0 "Write blog post about..."

# Editing: Detail-oriented model
llms -m gpt-4o "Improve this text..."
```

### Image Analysis

Analyze images for content creation:

```bash
# Describe images
llms -m qwen2.5vl --image photo.jpg "Describe for alt text"

# Extract text
llms -m gemini-2.5-pro --image screenshot.png "Extract text"

# Analyze charts
llms -m gpt-4o --image chart.png "Summarize data"
```

### Audio Transcription

Transcribe and summarize audio content:

```bash
# Transcribe
llms -m gpt-4o-audio-preview --audio interview.mp3 "Transcribe"

# Summarize
llms -m gemini-2.5-flash --audio podcast.mp3 "Key points"
```

## Data Analysis

### Document Processing

Process and analyze documents:

```bash
# Summarize PDFs
llms -m gpt-5 --file report.pdf "Executive summary"

# Extract data
llms -m qwen3-max --file invoice.pdf "Extract line items"

# Compare documents
llms -m claude-opus-4-1 --file doc1.pdf "Compare with doc2"
```

### Code Analysis

Analyze code and generate documentation:

```bash
# Explain code
llms -m grok-4 "Explain this Python code: ..."

# Generate docs
llms -m claude-sonnet-4-0 "Document this function: ..."

# Code review
llms -m gpt-4o "Review this code for issues: ..."
```

## Personal Use

### Learning Assistant

Learn new topics with AI help:

```bash
# Explanations
llms -s "You are a patient teacher" "Explain quantum computing"

# Practice
llms "Give me a Python coding challenge"

# Feedback
llms "Review my solution: ..."
```

### Productivity

Boost productivity with AI:

```bash
# Email drafting
llms "Draft email to client about project delay"

# Meeting notes
llms --audio meeting.mp3 "Summarize and extract action items"

# Research
llms "Summarize recent developments in AI"
```

### Privacy-Focused

Use local models for private queries:

```bash
# Enable only Ollama
llms --disable openai anthropic google
llms --enable ollama

# All queries stay local
llms -m llama3.3 "Private query"
```

## Integration Examples

### With LangChain

```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    base_url="http://localhost:8000/v1",
    model="kimi-k2"
)

# Use in chains, agents, etc.
```

### With LlamaIndex

```python
from llama_index.llms.openai import OpenAI

llm = OpenAI(
    api_base="http://localhost:8000/v1",
    model="kimi-k2"
)

# Use in indexes, queries, etc.
```

### With Custom Code

```python
import requests

response = requests.post(
    "http://localhost:8000/v1/chat/completions",
    json={
        "model": "kimi-k2",
        "messages": [{"role": "user", "content": "Hello!"}]
    }
)

print(response.json()["choices"][0]["message"]["content"])
```

## Next Steps

- [CLI Usage](/guides/cli-usage/) - Learn CLI commands
- [Web UI](/features/web-ui/) - Use the web interface
- [Providers](/reference/providers/) - Explore available providers
- [Configuration](/getting-started/configuration/) - Customize your setup

