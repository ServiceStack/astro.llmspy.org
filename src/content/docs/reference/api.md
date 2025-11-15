---
title: API Reference
description: OpenAI-compatible API documentation
---

llms.py implements the OpenAI Chat Completions API, making it compatible with any OpenAI-compatible client.

## Base URL

When running in server mode:

```
http://localhost:8000/v1
```

## Authentication

API key authentication is optional and not validated. You can use any value or omit it entirely.

## Endpoints

### Chat Completions

**Endpoint**: `POST /v1/chat/completions`

**Description**: Create a chat completion using any configured model.

#### Request

```json
{
  "model": "kimi-k2",
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": "Hello!"
    }
  ],
  "temperature": 0.7,
  "max_tokens": 150
}
```

#### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `model` | string | Yes | Model name from enabled providers |
| `messages` | array | Yes | Array of message objects |
| `temperature` | number | No | 0.0 to 2.0, controls randomness |
| `max_tokens` | integer | No | Maximum tokens in response |
| `max_completion_tokens` | integer | No | Alternative to max_tokens |
| `top_p` | number | No | 0.0 to 1.0, nucleus sampling |
| `frequency_penalty` | number | No | -2.0 to 2.0, penalize frequency |
| `presence_penalty` | number | No | -2.0 to 2.0, penalize presence |
| `stop` | string/array | No | Stop sequences |
| `seed` | integer | No | For reproducible outputs |
| `stream` | boolean | No | Enable streaming responses |
| `logprobs` | boolean | No | Include log probabilities |
| `top_logprobs` | integer | No | 0-20, number of top logprobs |
| `reasoning_effort` | string | No | low, medium, high |
| `enable_thinking` | boolean | No | Enable thinking mode (Qwen) |

#### Message Object

```json
{
  "role": "user|assistant|system",
  "content": "string or array"
}
```

**Text Content**:
```json
{
  "role": "user",
  "content": "Hello!"
}
```

**Multi-Modal Content**:
```json
{
  "role": "user",
  "content": [
    {
      "type": "text",
      "text": "What's in this image?"
    },
    {
      "type": "image_url",
      "image_url": {
        "url": "data:image/jpeg;base64,..."
      }
    }
  ]
}
```

#### Response

```json
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "kimi-k2",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello! How can I help you today?"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}
```

#### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique completion ID |
| `object` | string | Always "chat.completion" |
| `created` | integer | Unix timestamp |
| `model` | string | Model used |
| `choices` | array | Array of completion choices |
| `usage` | object | Token usage information |

## Examples

### cURL

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

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="not-needed"
)

response = client.chat.completions.create(
    model="kimi-k2",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)
```

### JavaScript/TypeScript

```typescript
import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'http://localhost:8000/v1',
  apiKey: 'not-needed',
});

const response = await client.chat.completions.create({
  model: 'kimi-k2',
  messages: [
    { role: 'user', content: 'Hello!' }
  ],
});

console.log(response.choices[0].message.content);
```

### LangChain (Python)

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

## Error Responses

### Model Not Found

```json
{
  "error": {
    "message": "Model 'unknown-model' not found in any enabled provider",
    "type": "invalid_request_error",
    "code": "model_not_found"
  }
}
```

### Provider Error

```json
{
  "error": {
    "message": "All providers failed for model 'kimi-k2'",
    "type": "api_error",
    "code": "provider_error"
  }
}
```

## Model Routing

Requests are automatically routed to available providers:

1. Finds all enabled providers that support the requested model
2. Tries providers in order (as defined in `llms.json`)
3. If a provider fails, tries the next one
4. Returns error if all providers fail

This provides:
- **Automatic failover**: High availability
- **Cost optimization**: Free/cheap providers first
- **Load distribution**: Spread across providers

## Next Steps

- [Server Mode](/features/server-mode/) - Running the API server
- [Providers](/reference/providers/) - Available providers and models
- [Configuration](/getting-started/configuration/) - Configure routing

