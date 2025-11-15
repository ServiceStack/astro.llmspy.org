---
title: Server Mode
description: Run llms.py as an OpenAI-compatible API server
---

llms.py can run as an OpenAI-compatible HTTP server, allowing you to use it as a drop-in replacement for the OpenAI API with any compatible client.

## Starting the Server

```bash
# Start on port 8000
llms --serve 8000

# With verbose logging
llms --serve 8000 --verbose

# With custom config
llms --serve 8000 --config /path/to/config.json
```

This launches:
- Web UI at `http://localhost:8000`
- OpenAI-compatible API at `http://localhost:8000/v1/chat/completions`

## API Endpoints

### Chat Completions

**Endpoint**: `POST /v1/chat/completions`

**Request**:
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

**Response**:
```json
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "kimi-k2",
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "Hello! How can I help you today?"
    },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}
```

## OpenAI Compatibility

The server implements the OpenAI Chat Completions API, making it compatible with:

### Python OpenAI SDK

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="not-needed"  # API key not required
)

response = client.chat.completions.create(
    model="kimi-k2",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)
```

### LangChain

```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    base_url="http://localhost:8000/v1",
    api_key="not-needed",
    model="kimi-k2"
)

response = llm.invoke("Hello!")
print(response.content)
```

### LlamaIndex

```python
from llama_index.llms.openai import OpenAI

llm = OpenAI(
    api_base="http://localhost:8000/v1",
    api_key="not-needed",
    model="kimi-k2"
)

response = llm.complete("Hello!")
print(response.text)
```

### Any OpenAI-Compatible Client

Any tool or library that supports OpenAI's API can use llms.py by:
1. Setting the base URL to `http://localhost:8000/v1`
2. Using any model name from your enabled providers
3. API key is optional (not validated)

## Request Parameters

Supported parameters in chat completion requests:

- **`model`**: Model name (required)
- **`messages`**: Array of message objects (required)
- **`temperature`**: 0.0 to 2.0 (default: varies by model)
- **`max_tokens`** / **`max_completion_tokens`**: Maximum response length
- **`top_p`**: 0.0 to 1.0 for nucleus sampling
- **`frequency_penalty`**: -2.0 to 2.0
- **`presence_penalty`**: -2.0 to 2.0
- **`stop`**: String or array of stop sequences
- **`seed`**: For reproducible outputs
- **`stream`**: Enable streaming responses
- **`logprobs`**: Include log probabilities
- **`top_logprobs`**: Number of top logprobs (0-20)
- **`reasoning_effort`**: For reasoning models
- **`enable_thinking`**: Enable thinking mode (Qwen)

## Model Routing

The server automatically routes requests to available providers:

1. Checks enabled providers in order (from `llms.json`)
2. Finds first provider that supports the requested model
3. If request fails, tries next available provider
4. Returns error if no providers can handle the request

### Example Routing

If `kimi-k2` is available in:
1. `groq` (free tier) - tried first
2. `openrouter` (paid) - tried if groq fails

This ensures cost optimization and automatic failover.

## Docker Deployment

### Using Docker

```bash
docker run -p 8000:8000 \
  -e GROQ_API_KEY=$GROQ_API_KEY \
  ghcr.io/servicestack/llms:latest
```

### Using Docker Compose

```yaml
version: '3.8'

services:
  llms:
    image: ghcr.io/servicestack/llms:latest
    ports:
      - "8000:8000"
    environment:
      - OPENROUTER_API_KEY=${OPENROUTER_API_KEY}
      - GROQ_API_KEY=${GROQ_API_KEY}
    volumes:
      - llms-data:/home/llms/.llms
    restart: unless-stopped

volumes:
  llms-data:
```

Start with:
```bash
docker compose up -d
```

## Health Checks

The Docker image includes health checks:

```bash
# Check container health
docker ps

# View health check logs
docker inspect --format='{{json .State.Health}}' llms-server
```

## Next Steps

- [Web UI](/features/web-ui/) - Use the web interface
- [Docker Guide](/guides/docker/) - Detailed Docker setup
- [API Reference](/reference/api/) - Complete API documentation

