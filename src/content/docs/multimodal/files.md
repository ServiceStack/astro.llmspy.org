---
title: File Support
description: Work with PDFs and documents using file-capable models
---

llms.py supports file attachments, primarily PDFs, through file-capable models, enabling document analysis, summarization, and information extraction.

## CLI Usage

```bash
# Use default file template (summarize)
llms --file ./docs/handbook.pdf

# With custom prompt
llms --file ./policy.pdf "Summarize key changes"

# Remote PDF URL
llms --file https://example.org/whitepaper.pdf "Main findings?"

# With specific models
llms -m gpt-5 --file ./policy.pdf "Summarize"
llms -m gemini-flash-latest --file ./report.pdf "Extract action items"
llms -m qwen2.5vl --file ./manual.pdf "List key sections"

# Combined with system prompt
llms -s "You're a compliance analyst" --file ./policy.pdf "Identify risks"
```

## Web UI

1. Click the file attachment icon
2. Select a PDF or document
3. Add your prompt
4. Send

## Supported Formats

- PDF (primary support)
- Other document types may work depending on model/provider

## File Sources

- **Local files**: Absolute or relative paths
- **Remote URLs**: HTTP/HTTPS URLs (automatically downloaded)
- **Data URIs**: Base64-encoded files

## File-Capable Models

Popular models that support file (PDF) inputs:

- **OpenAI**: gpt-5, gpt-5-mini, gpt-4o, gpt-4o-mini
- **Google**: gemini-flash-latest, gemini-2.5-flash-lite
- **Grok**: grok-4-fast (via OpenRouter)
- **Qwen**: qwen2.5vl, qwen3-max, qwen3-vl:235b, qwen3-coder
- **Others**: kimi-k2, glm-4.5-air, deepseek-v3.1:671b, llama4:400b

## Custom Templates

You can create custom request templates for file processing. The file template uses a similar structure to image and audio templates, with the file content embedded in the request.

## Next Steps

- [Image Support](/multimodal/images/) - Analyze images with vision models
- [Audio Support](/multimodal/audio/) - Process audio files
- [Web UI](/features/web-ui/) - Use multi-modal features in the UI
- [Providers](/reference/providers/) - See which providers support files

