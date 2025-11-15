---
title: Analytics & Metrics
description: Track usage, costs, and performance
---

llms.py includes comprehensive analytics to help you track usage, costs, and performance across all your LLM interactions.

## Overview

Analytics data is stored locally in your browser's IndexedDB and includes:

- **Cost tracking**: Per-model and per-provider costs
- **Token usage**: Input and output token counts
- **Performance metrics**: Response times and speeds
- **Request history**: Detailed activity logs

## Thread-Level Metrics

Each conversation thread displays:

- **Total Cost**: Cumulative cost for all messages in the thread
- **Token Count**: Total input and output tokens
- **Request Count**: Number of API requests made
- **Response Time**: Total time spent on requests

These metrics appear in the sidebar next to each thread and at the bottom of active conversations.

## Message-Level Metrics

Individual messages show:

- **Token Count**: Tokens used for that specific message
- **Cost**: Cost for that message (premium models only)
- **Response Time**: How long the response took
- **Model Used**: Which model generated the response

## Analytics Pages

### Cost Analytics

View daily cost breakdown by month:

- **Monthly Overview**: Total costs per day
- **Daily Details**: Click any day to expand
  - Cost per model
  - Cost per provider
  - Number of requests
- **Interactive Charts**: Visual representation of spending
- **Date Navigation**: Browse different months

**Access**: Click "Analytics" → "Costs" in the UI

### Token Analytics

View daily token usage by month:

- **Monthly Overview**: Total tokens per day
- **Daily Details**: Click any day to expand
  - Tokens per model
  - Tokens per provider
  - Input vs output breakdown
- **Interactive Charts**: Visual token usage
- **Date Navigation**: Browse different months

**Access**: Click "Analytics" → "Tokens" in the UI

### Activity Log

Detailed request history with:

- **Model**: Which model was used
- **Provider**: Which provider served the request
- **Prompt**: Partial prompt preview
- **Input Tokens**: Tokens in the request
- **Output Tokens**: Tokens in the response
- **Cost**: Request cost (if applicable)
- **Response Time**: How long it took
- **Speed**: Tokens per second
- **Date & Time**: When the request was made

**Features**:
- Searchable and filterable
- Sortable columns
- Pagination
- Export capability

**Access**: Click "Analytics" → "Activity" in the UI

## Cost Display

### Model Selector

The model selector shows pricing for each model:
- **Input cost**: Per 1M tokens
- **Output cost**: Per 1M tokens
- **Free models**: Marked as $0.00

### Pricing Configuration

Pricing is configured in `llms.json`:

```json
{
  "providers": {
    "openai": {
      "pricing": {
        "gpt-4o": {
          "input": 2.50,
          "output": 10.00
        }
      },
      "default_pricing": {
        "input": 0.0,
        "output": 0.0
      }
    }
  }
}
```

Costs are calculated as:
```
cost = (input_tokens / 1_000_000) * input_price + 
       (output_tokens / 1_000_000) * output_price
```

## Data Management

### Export Analytics

Export your analytics data:

1. Go to the home page
2. Hold **ALT** while clicking **Export**
3. Save the JSON file

This exports all request logs including:
- Timestamps
- Models and providers
- Token counts
- Costs
- Response times

### Import Analytics

Import previously exported analytics:

1. Go to the home page
2. Click **Import**
3. Select the exported JSON file

### Clear Analytics

To clear analytics data:

1. Open browser developer tools (F12)
2. Go to Application → IndexedDB
3. Delete the analytics database

Or clear all data including chat history:
1. Click "Clear All Data" on home page

## Privacy

All analytics data is:
- **Stored locally**: In browser's IndexedDB
- **Never sent**: No external tracking or reporting
- **Fully private**: Only accessible to you
- **Exportable**: You control your data

## Performance Metrics

### Response Time

Measured from request sent to response received:
- Includes network latency
- Includes model processing time
- Displayed in seconds

### Speed

Calculated as tokens per second:
```
speed = output_tokens / response_time
```

Useful for comparing:
- Model performance
- Provider reliability
- Network conditions

## Provider Reliability

Use the `--check` command to test providers:

```bash
# Check all models for a provider
llms --check groq

# Check specific models
llms --check groq kimi-k2 llama4:400b
```

This tests:
- Provider reachability
- API key validity
- Response times
- Model availability

Results help you:
- Identify fastest providers
- Detect configuration issues
- Compare provider performance

## Next Steps

- [Web UI](/features/web-ui/) - View analytics in the UI
- [Configuration](/getting-started/configuration/) - Set up pricing
- [Providers](/reference/providers/) - Provider-specific details

