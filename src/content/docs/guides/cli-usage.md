---
title: CLI Usage
description: Complete guide to using llms.py from the command line
---

llms.py provides a powerful command-line interface for interacting with LLMs.

## Basic Usage

### Simple Queries

```bash
# Ask a question
llms "What is the capital of France?"

# Multi-line prompt
llms "Explain quantum computing
in simple terms"
```

### Specify Model

Use specific model

```bash 
llms -m gemini-2.5-pro "Write a Python function to sort a list"
llms -m grok-4 "Explain this code with humor"
llms -m qwen3-max "Translate this to Chinese"
```

### System Prompts

Add system prompt

```bash
llms -s "You're a helpful coding assistant" "Reverse a string in Python?"
```

Combine with model selection

```bash
llms -m claude-sonnet-4-0 -s "You are a quantum computing expert" \
  "Explain quantum entanglement"
```

## Multi-Modal Inputs

### Images

```bash
# Analyze image
llms --image photo.jpg "What's in this image?"

# Remote image
llms --image https://example.com/photo.png "Describe this photo"

# With specific model
llms -m qwen2.5vl --image screenshot.png "Extract text from this image"

# Combined with system prompt
llms -s "You are a data analyst" --image chart.png "What trends do you see?"
```

### Audio

```bash
# Transcribe audio
llms --audio recording.mp3 "Transcribe this audio"

# Summarize audio
llms --audio meeting.wav "Summarize this meeting"

# With specific model
llms -m gpt-4o-audio-preview --audio interview.mp3 "Extract main topics"
```

### Files (PDFs)

```bash
# Summarize document
llms --file report.pdf "Summarize this document"

# Extract information
llms --file policy.pdf "What are the key changes?"

# With specific model
llms -m gpt-5 --file handbook.pdf "List all policies"
```

## Custom Templates

### Using Chat Templates

```bash
# Load request from JSON file
llms --chat request.json

# Override user message
llms --chat request.json "New user message"

# Override model
llms -m kimi-k2 --chat request.json

# With image
llms --chat image-request.json --image photo.jpg

# With audio
llms --chat audio-request.json --audio talk.mp3
```

### Example Template

```json
{
  "model": "kimi-k2",
  "messages": [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": ""}
  ],
  "temperature": 0.7,
  "max_tokens": 150
}
```

## Advanced Options

### Custom Parameters

```bash
# Set temperature and seed
llms --args "temperature=0.7&seed=111" "What is 2+2?"

# Multiple parameters
llms --args "temperature=0.5&max_completion_tokens=50" "Tell me a joke"

# Stop sequences
llms --args "stop=Two,Words" "Count to 5"

# Combine with other options
llms -m grok-4 --args "temperature=0.3" "Hello"
```

### Parameter Types

- **Floats**: `temperature=0.7`, `frequency_penalty=0.2`
- **Integers**: `max_completion_tokens=100`
- **Booleans**: `store=true`, `logprobs=true`
- **Strings**: `stop=one`
- **Lists**: `stop=two,words`

### Common Parameters

- `temperature`: Controls randomness (0.0 to 2.0)
- `max_completion_tokens`: Maximum tokens in response
- `seed`: For reproducible outputs
- `top_p`: Nucleus sampling parameter
- `frequency_penalty`: Penalize new tokens based on frequency
- `presence_penalty`: Penalize new tokens based on presence
- `reasoning_effort`: Reasoning effort (low, medium, high)

### Raw Output

```bash
# Display full JSON response
llms --raw "What is 2+2?"
```

### Verbose Logging

```bash
# Enable detailed logging
llms --verbose "Tell me a joke"

# Custom log prefix
llms --verbose --logprefix "[DEBUG] " "Hello world"
```

## Configuration Management

### List Providers and Models

```bash
# List all enabled providers and models
llms --list
llms ls

# List specific providers
llms ls ollama
llms ls google anthropic
```

### Enable/Disable Providers

```bash
# Enable providers
llms --enable openrouter
llms --enable anthropic google_free groq

# Disable providers
llms --disable ollama
llms --disable openai anthropic
```

### Set Default Model

```bash
# Set default model
llms --default grok-4

# Verify
llms "Hello"  # Uses grok-4
```

### Check Providers

```bash
# Check all models for a provider
llms --check groq

# Check specific models
llms --check groq kimi-k2 llama4:400b gpt-oss:120b
```

This tests:
- Provider reachability
- API key validity
- Response times
- Model availability

### Custom Config File

```bash
# Use custom config
llms --config /path/to/config.json "Hello"
```

### Initialize Config

```bash
# Create default config
llms --init
```

## Output Formatting

### Pipe to Markdown Renderer

```bash
# Beautiful terminal output with glow
llms "Explain quantum computing" | glow
```

### Save to File

```bash
# Save response to file
llms "Write a Python script" > script.py

# Append to file
llms "Add error handling" >> script.py
```

## Examples

### Code Generation

```bash
llms -m claude-sonnet-4-0 "Python function to calculate fibonacci numbers"
```

### Translation

```bash
llms -m qwen3-max "Translate 'Hello, how are you?' to Chinese"
```

### Data Analysis

```bash
llms -m gemini-2.5-pro --image chart.png "Analyze this sales chart"
```

### Document Summarization

```bash
llms -m gpt-5 --file report.pdf "Provide a 3-paragraph summary"
```

### Audio Transcription

```bash
llms -m gpt-4o-audio-preview --audio meeting.mp3 "Transcribe and summarize"
```

## Next Steps

- [Image Support](/multimodal/images/) - Use images with vision models
- [Audio Support](/multimodal/audio/) - Process audio files
- [File Support](/multimodal/files/) - Work with PDFs and documents
- [Server Mode](/features/server-mode/) - Run as API server
- [Configuration](/getting-started/configuration/) - Customize settings

